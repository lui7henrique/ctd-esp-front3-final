export type CheckoutSchemaType = {
  firstName: string;
  lastName: string;
  email: string;

  street: string;
  city: string;
  state: string;
  postalCode: string;
  complement?: string;

  cardNumber: string;
  ownerName: string;
  expirationDate: string;
  securityCode: string;
};
