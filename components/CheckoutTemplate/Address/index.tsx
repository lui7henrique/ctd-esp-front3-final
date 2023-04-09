import { Box, Card, TextField, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import { useFormContext } from "react-hook-form";

import { CheckoutSchemaType } from "../type";

export const addressTestId = "address";

export const Address = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutSchemaType>();

  return (
    <Card
      sx={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
      data-testid={addressTestId}
    >
      <Box display="flex" alignItems="center" gap="0.5rem" width="100%">
        <HomeIcon />
        <Typography variant="h6">Address</Typography>
      </Box>

      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="1rem">
        <TextField
          label="Street"
          variant="standard"
          error={!!errors.street}
          helperText={errors.street?.message}
          {...register("street")}
        />

        <TextField
          label="Apartment, floor, etc..."
          variant="standard"
          {...register("complement")}
        />

        <TextField
          label="City"
          variant="standard"
          error={!!errors.city}
          helperText={errors.city?.message}
          {...register("city")}
        />

        <TextField
          label="State"
          variant="standard"
          error={!!errors.state}
          helperText={errors.state?.message}
          {...register("state")}
        />

        <TextField
          label="Postal code"
          variant="standard"
          error={!!errors.postalCode}
          helperText={errors.postalCode?.message}
          {...register("postalCode")}
        />
      </Box>
    </Card>
  );
};
