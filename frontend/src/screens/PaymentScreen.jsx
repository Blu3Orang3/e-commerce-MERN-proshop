import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";

const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  let navigate = useNavigate();

  if (!shippingAddress) {
    navigate("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const [paymentChecked, setPaymentChecked] = useState(true)

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              onChange={(e) => {
                setPaymentMethod(e.target.value)
                setPaymentChecked(false)
              }}
            ></Form.Check>
            {/* <Form.Check
            type='radio'
            label='Stripe or Credit Card'
            id='Stripe'
            name='paymentMethod'
            value='Stripe'
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></Form.Check> */}
          </Col>
        </Form.Group>

        <Button type='submit' variant='primary' disabled={paymentChecked}>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};
export default PaymentScreen;
