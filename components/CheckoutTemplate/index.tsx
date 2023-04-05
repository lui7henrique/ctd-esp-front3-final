import { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box } from "@mui/material";

import { Summary } from "./Summary";

import { PersonalData } from "./PersonalData";
import { Address } from "./Address";
import { Payment } from "./Payment";

import { checkoutSchema } from "./schema";
import { CheckoutSchemaType } from "./type";

export const CheckoutTemplate = () => {
  const methods = useForm<CheckoutSchemaType>({
    resolver: yupResolver(checkoutSchema()),
  });

  const onSubmit = useCallback((data: any) => {
    console.log({ data });
  }, []);

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        display="grid"
        gridTemplateColumns="2fr 1fr"
        gap="1rem"
        my={4}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Box display="flex" flexDirection="column" gap="1rem" width="100%">
          <PersonalData />
          <Address />
          <Payment />
        </Box>

        <Box display="flex" position="relative">
          <Box position="sticky" top={0}>
            <Summary />
          </Box>
        </Box>
      </Box>
    </FormProvider>
  );
};
