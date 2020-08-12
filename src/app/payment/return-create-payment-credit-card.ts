export interface ReturnPaymentCreditCard {
    merchantOrderId: string;
    customer: {
      name: string;
      identity: string;
      identityType: 'CPF';
      email: string;
      deliveryAddress: {
        street: string;
        number: string;
        complement: string;
        zipCode: string;
        city: string;
        state: string;
        country: string;
      }
    };
  payment: {
    serviceTaxAmount: 0;
    installments: 1;
    interest: 0;
    capture: false;
    authenticate: false;
    recurrent: false;
    creditCard: {
      cardNumber: string;
      holder: string;
      expirationDate: string;
      saveCard: string;
      brand: string
    };
    tid: string;
    proofOfSale: string;
    authorizationCode: string;
    softDescriptor: string;
    provider: string;
    isQrCode: boolean;
    amount: 0;
    receivedDate: string;
    status: string;
    isSplitted: boolean;
    returnMessage: string;
    returnCode: string;
    paymentId: string;
    type: 'CreditCard';
    currency: 'BRL';
    country: 'BRA';
    links: [
      {
        method: string;
        rel: string;
        href: string
      },
      {
        method: string;
        rel: string;
        href: string
      },
      {
        method: string;
        rel: void;
        href: string;
      }
    ]
  };
}
