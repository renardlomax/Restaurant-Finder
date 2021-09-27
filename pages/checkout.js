/* pages/checkout.js */

import React, { useContext } from "react";
import { Row, Col, Container } from "reactstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/checkoutForm";
import AppContext from "../components/context";
import Cart from "../components/cart";

function Checkout() {
  // get app context
  const {isAuthenticated} = useContext(AppContext);
  // isAuthenticated is passed to the cart component to display order button
  // const isAuthenticated  = true;
  
  // load stripe to inject into elements components
  const stripePromise = loadStripe(
    "pk_test_51JWLntFxjMMihmNvP9Gk0qJNgQ16dz6zyrXevn5lujfFX24jaU9nfQrKN2FmeYnKy1v9P2vedSpDWsQRRf04zJ4u00MJu3bib9"
  );

  return (
    <div>
     
    <Container> 
    <Row>
      
      <Col style={{ paddingRight: 0 }} sm={{ size: 3, order: 1, offset: 2 }}>
        
        <Cart isAuthenticated={isAuthenticated} />
      </Col>
      <Col style={{ paddingLeft: 5 }} sm={{ size: 6, order: 2 }}>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </Col>
      <style jsx global>{`
      h1 {
        padding-left: 10px;
        font-family: playfair display, serif;
      }
      
      
      `}</style>
    </Row>
    </Container>
    </div>
  );
  // }
}
export default Checkout;
