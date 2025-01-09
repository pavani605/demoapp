import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const orderDetails = [
    { id: 1, product: "Smartphone", quantity: 1, price: 699.99 },
    { id: 2, product: "T-Shirt", quantity: 2, price: 19.99 },
  ];
  const navigate = useNavigate();
const BackToOrder=()=>{
    navigate("/orders");
}
  return (
    <Container fluid>
      {/* Banner Section */}
      <div className="banner text-center py-1 bg-primary text-white">
        <h1>Order Details</h1>
        <p>View detailed information about your order</p>
      </div>

      {/* Order Details Table Section */}
      <section className="my-5">
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
                {orderDetails.map((item) => (
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
            <Button variant="secondary" className="mt-3" onClick={()=>BackToOrder()}>Back to Orders</Button>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default OrderDetails;
