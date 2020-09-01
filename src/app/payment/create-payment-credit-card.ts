import { Product } from './../products/product/products-type/product';
export interface CreatePaymentCreditCard {
  productName: string;
  urlImage: string;
  ownerEmail: string;
  customer: {
    name: string,
    identity: string,
    identityType: string,
    email: string,
    deliveryAddress: {
      street: string,
      number: string,
      complement: string,
      zipCode: string,
      city: string,
      state: string,
      country: string,
    },
    Address: {
      street: string,
      number: string,
      complement: string,
      zipCode: string,
      city: string,
      state: string,
      country: string,
    },
  };
  merchantOrderId: string;
  payment: {
    amount: number,
    creditCard: {
      brand: string,
      cardNumber: string,
      holder: string,
      expirationDate: string,
      securityCode: string,

    },
    installments: number,
    softDescriptor: string,
    type: string,
    capture: false,
  };
}
