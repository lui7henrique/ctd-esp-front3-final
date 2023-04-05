import * as yup from "yup";

export const checkoutSchema = () => {
  return yup.object().shape({
    firstName: yup.string().required("First name is required."),
    lastName: yup.string().required("Last name is required."),
    email: yup
      .string()
      .required("E-mail is required.")
      .email("Must be a valid e-mail."),

    street: yup.string().required("Street is required."),
    city: yup.string().required("City is required."),
    state: yup.string().required("State is required."),
    postalCode: yup.string().required("Postal code is required."),
    complement: yup.string(),

    cardNumber: yup.string().required("Card number is required."),
    ownerName: yup.string().required("Owner name is required."),
    expirationDate: yup.string().required("Expiration date is required"),
    securityCode: yup.string().required("Security code is required."),
  });
};
