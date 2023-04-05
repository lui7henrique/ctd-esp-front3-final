import { Box, Card, TextField, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import { useFormContext } from "react-hook-form";
import { CheckoutSchemaType } from "./type";

export const PersonalData = () => {
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
    >
      <Box display="flex" alignItems="center" gap="0.5rem" width="100%">
        <PersonIcon />
        <Typography variant="h6">Personal data</Typography>
      </Box>

      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="1rem">
        <TextField
          label="First name"
          variant="standard"
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
          {...register("firstName")}
        />

        <TextField
          label="Last name"
          variant="standard"
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          {...register("lastName")}
        />

        <TextField
          label="E-mail"
          variant="standard"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register("email")}
        />
      </Box>
    </Card>
  );
};
