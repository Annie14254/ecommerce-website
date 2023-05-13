var stripe = Stripe('pk_test_51N71CaDW6kK5iyRNPC7gvc2jYROf3LUlNkqDmYRCTO5gWIePxXvIGlg56VHMq53TU5DeTtTtq2cmYgW21PeMrBGt0004Iefvyg')

const paymentElement = elements.create('payment', {
    paymentMethodOrder: ['card', 'apple_pay', 'google_pay'],
    layout: {
      type: 'accordion',
      defaultCollapsed: false,
      radios: true,
      spacedAccordionItems: false
    }
  });

var shippingAddressElement = elements.create('address', {
    mode: "shipping"
})

var billingAddressElement = elements.create('address', {
    mode: "billing"
})