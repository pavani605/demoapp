import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Home= () => {
  const categories = [
    { id: 1, name: "Electronics", description: "Devices and gadgets" },
    { id: 2, name: "Clothing", description: "Fashionable wear" },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Smartphone",
      price: 699.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "T-Shirt",
      price: 19.99,
      image: "https://via.placeholder.com/150",
    },
  ];
  //Add code

  return (
    <Container fluid>
      {/* Banner Section */}
      <div className="banner text-center py-5 bg-primary text-white">
        <h1>Welcome to My E-Commerce</h1>
        <p>Discover amazing products at unbeatable prices.</p>
      </div>

      {/* Categories Section */}
      <section className="my-5">
        <h2 className="text-center mb-4">Categories</h2>
        <Row>
          {categories.map((category) => (
            <Col key={category.id} md={6} lg={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>{category.name}</Card.Title>
                  <Card.Text>{category.description}</Card.Text>
                  <Button variant="primary">Explore</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Featured Products Section */}
      <section className="my-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <Row>
          {featuredProducts.map((product) => (
            <Col key={product.id} md={6} lg={4}>
              <Card className="mb-4">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>${product.price.toFixed(2)}</Card.Text>
                  <Button variant="success">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default Home;
