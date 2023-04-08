import { useFormContext } from "react-hook-form";
import Cards from "react-credit-cards-2";
import InputMask, { Props as ReactInputMaskProps } from "react-input-mask";

import { Box, Card, TextField, Typography } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";

import { CheckoutSchemaType } from "./type";

import "react-credit-cards-2/dist/es/styles-compiled.css";
import { ReactNode, useState } from "react";

type Focused = "name" | "number" | "expiry" | "cvc" | "";
type Fields = keyof Pick<
  CheckoutSchemaType,
  "cardNumber" | "ownerName" | "expirationDate" | "securityCode"
>;

export const Payment = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<CheckoutSchemaType>();

  const [focus, setFocus] = useState<Focused>();

  const { cardNumber, expirationDate, securityCode, ownerName } = watch();

  const handleChangeFocus = (field: Fields) => {
    const name: Record<Fields, Focused> = {
      cardNumber: "number",
      expirationDate: "expiry",
      ownerName: "name",
      securityCode: "cvc",
    };

    setFocus(name[field]);
  };

  return (
    <Card
      sx={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Box display="flex" alignItems="center" gap="0.5rem" width="100%">
        <PaymentIcon />
        <Typography variant="h6">Payment</Typography>
      </Box>

      <Box display="grid" gridTemplateColumns="2fr 1fr" gap="1rem">
        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap="0.5rem">
          <InputMask
            mask="9999 9999 9999 9999"
            onFocus={() => handleChangeFocus("cardNumber")}
            {...register("cardNumber")}
          >
            {
              ((props: any) => {
                return (
                  <TextField
                    label="Card number"
                    variant="standard"
                    error={!!errors.cardNumber}
                    helperText={errors.cardNumber?.message}
                    {...props}
                  />
                );
              }) as unknown as ReactNode
            }
          </InputMask>

          <TextField
            label="Owner name"
            variant="standard"
            error={!!errors.ownerName}
            helperText={errors.ownerName?.message}
            onFocus={() => handleChangeFocus("ownerName")}
            {...register("ownerName")}
          />

          <InputMask
            mask="99/99"
            {...register("expirationDate")}
            onFocus={() => handleChangeFocus("cardNumber")}
          >
            {
              ((props: any) => {
                return (
                  <TextField
                    label="Expiration date"
                    variant="standard"
                    error={!!errors.expirationDate}
                    helperText={errors.expirationDate?.message}
                    {...props}
                  />
                );
              }) as unknown as ReactNode
            }
          </InputMask>

          <TextField
            label="Security code"
            type="password"
            variant="standard"
            error={!!errors.securityCode}
            helperText={errors.securityCode?.message}
            inputProps={{ maxLength: 3, minLength: 3 }}
            onFocus={() => handleChangeFocus("securityCode")}
            {...register("securityCode")}
          />
        </Box>

        <Cards
          number={cardNumber ?? ""}
          expiry={expirationDate ?? ""}
          cvc={securityCode ?? ""}
          name={ownerName ?? ""}
          focused={focus}
        />
      </Box>
    </Card>
  );
};
