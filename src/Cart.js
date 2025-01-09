import React from "react";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const ContinuesShoping=()=>{
    navigate('/products')
  }
  const cartItems = [
    { id: 1, product: "Smartphone", quantity: 1, price: 699.99 },
    { id: 2, product: "T-Shirt", quantity: 2, price: 19.99 },
  ];
  

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Container fluid>
      {/* Banner Section */}
      <div className="banner text-center py-1 bg-primary text-white">
        <h1>Your Cart</h1>
        <p>Review your cart before checking out</p>
      </div>

      {/* Cart Table Section */}
      <section className="my-5">
        <h2 className="text-center mb-4">Cart Items</h2>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.product}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <Row className="mt-3">
              <Col className="text-right">
                <h4>Total: ${calculateTotal()}</h4>
                <Button variant="success" className="me-2">Proceed to Checkout</Button>
                <Button variant="secondary" onClick={()=>ContinuesShoping()}>Continue Shopping</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Cart;
