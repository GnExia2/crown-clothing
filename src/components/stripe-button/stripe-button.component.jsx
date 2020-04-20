import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_N2ClhDTvs5jnJbPjLI62P3y800lp8qQsw3'

  const onToken = token => {
    console.log(token);
    alert('Payment Sucessful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Crown Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;
