import { useCart } from "context/Cart";

import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import { formatCurrency } from "utils/currency/format";

type BasicInfoProps = {
  label: string;
  value: string;
};

export const SuccessTemplate = () => {
  const { cart, checkout } = useCart();
  const { push } = useRouter();

  if (!cart && !checkout) {
    push("/");
  }

  const image = `${cart!.thumbnail.path}.${cart!.thumbnail.extension}`;
  const title = cart!.title;
  const price = cart?.prices[0].price;

  const { firstName, lastName, email } = checkout!;

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="1rem"
      width="100%"
      minHeight="80vh"
      justifyContent="center"
      alignItems="center"
      padding="1rem"
    >
      <Box bgcolor="#48BB78" padding="1rem" borderRadius="2px" width="50%">
        <Box
          display="grid"
          gridTemplateColumns="1fr 3fr"
          width="100%"
          gap="1rem"
        >
          <Box>
            <Box
              sx={{
                aspectRatio: "9 / 16",
              }}
              position="relative"
              borderRadius="3px"
              overflow="hidden"
            >
              <Image src={image} layout="fill" />
            </Box>
          </Box>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              color="#fff"
            >
              <Typography variant="h6" fontSize="2.5rem">
                Enjoy your purchase! 😁
              </Typography>

              <Typography variant="h6" fontSize="0.8rem" color="#fff" my={1}>
                - {title}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        padding="1rem"
        borderRadius="2px"
        width="50%"
        sx={{
          backgroundColor: "#d4d4d4",
        }}
        display="flex"
        flexDirection="column"
        gap="1rem"
      >
        <Box>
          <Typography fontWeight="bold">Personal data</Typography>
          <Typography>First name: {firstName}</Typography>
          <Typography>Last name: {lastName}</Typography>
          <Typography>Email: {email}</Typography>
        </Box>

        <Box>
          <Typography fontWeight="bold">Address</Typography>

          <Typography>Street: {firstName}</Typography>
          <Typography>City: {lastName}</Typography>
          <Typography>State: {email}</Typography>
          <Typography>Postal code: {email}</Typography>
        </Box>

        <Box>
          <Typography fontWeight="bold">Total of purchase:</Typography>
          <Typography>{formatCurrency(price!)}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
