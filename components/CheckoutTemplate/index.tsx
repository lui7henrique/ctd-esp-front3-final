import { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert, { AlertColor } from "@mui/material/Alert";

import { Summary } from "./Summary";

import { PersonalData } from "./PersonalData";
import { Address } from "./Address";
import { Payment } from "./Payment";

import { checkoutSchema } from "./schema";
import { CheckoutSchemaType } from "./type";
import { api } from "dh-marvel/services/checkout/checkout.errors";
import { AxiosError } from "axios";

import { useCart } from "../../context/Cart";

type Toast = {
  isOpen: boolean;
  message: string;
  status: AlertColor;
};

export const CheckoutTemplate = () => {
  const [toast, setToast] = useState<Toast>({
    isOpen: false,
    message: "",
    status: "error",
  });

  const methods = useForm<CheckoutSchemaType>({
    resolver: yupResolver(checkoutSchema()),
  });

  const { handleFinishCheckout } = useCart();

  const onSubmit = useCallback(async (data: CheckoutSchemaType) => {
    const body = {
      customer: {
        address: {
          address2: data.street,
        },
      },
      card: {
        number: data.cardNumber.replaceAll(" ", ""),
      },
    };

    try {
      await api.post("/checkout", body);
      handleFinishCheckout(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        const { response } = error;
        const message = response?.data.message;

        if (message) {
          return setToast({
            isOpen: true,
            message: message,
            status: "error",
          });
        }
      }
      return setToast({
        isOpen: true,
        message: "Error completing the purchase, check the data and try again.",
        status: "error",
      });
    }
  }, []);

  return (
    <>
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
            <Box position="sticky" top={0} width="100%">
              <Summary />
            </Box>
          </Box>
        </Box>
      </FormProvider>

      <Snackbar
        open={toast.isOpen}
        autoHideDuration={6000}
        onClose={() =>
          setToast((prev) => {
            return {
              ...prev,
              isOpen: false,
            };
          })
        }
        message="Note archived"
      >
        <Alert severity={toast.status}>{toast.message}</Alert>
      </Snackbar>
    </>
  );
};
