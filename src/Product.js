import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import logo from './logo.svg';
import Dress from '../src/asserts/girlimage.jpg'
import Phone from '../src/asserts/PhoneImg.jpg'
import Jewellery from '../src/asserts/jewellery.jpg'
import Watch from '../src/asserts/Watch.jpg'
import MenDress from '../src/asserts/Men.jpg'
import Sare from '../src/asserts/Sare.jpg'
import { useNavigate } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate();
  const AddToCart = () => {
    navigate('/cart')
  }
  const products = [
    { id: 1, name: "Dress", price: 699.99, description: "Latest model", image: Dress },
    { id: 2, name: "Smartphone", price: 19.99, description: "Latest model", image: Phone },
    { id: 1, name: "Jewellery", price: 699.99, description: "Latest model", image: Jewellery },
    { id: 2, name: "Watch", price: 19.99, description: "Latest model", image: Watch },
    { id: 1, name: "T-Shirt", price: 699.99, description: "Latest model", image: MenDress },
    { id: 2, name: "Sare", price: 19.99, description: "Latest model", image: Sare },
  ];

  return (
    <Container fluid>
      {/* <img src={logo} alt="Logo" /> */}
      <section className="my-5">
        <h2 className="banner text-center py-1 bg-primary text-white">Products</h2>
        <Row>
          {products.map((product) => (
            <Col key={product.id} md={6} lg={4}>
              <Card className="mb-4">
                <Card.Img variant="top" src={product.image} width={"100px"} height={"400px"} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>${product.price.toFixed(2)}</Card.Text>
                  <Button variant="success" onClick={() =>
                    AddToCart()
                  }>Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default Products;
