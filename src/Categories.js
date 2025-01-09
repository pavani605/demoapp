import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Categories = () => {
  const categories = [
    { id: 1, name: "Electronics", description: "Devices and gadgets", url: "https://www.google.com/search?q=electronics" },
    { id: 2, name: "Clothing", description: "Fashionable wear", url: "https://www.google.com/search?q=clothes" },
    { id: 3, name: "Jewellary", description: "Jewellary", url: "https://www.google.com/search?q=jewelry" }

  ];

  const handleExplore = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Container fluid>
      <section className="my-5">
        <h2 className="banner text-center py-1 bg-primary text-white">All Categories</h2>
        <Row>
          {categories.map((category) => (
            <Col key={category.id} md={6} lg={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>{category.name}</Card.Title>
                  <Card.Text>{category.description}</Card.Text>
                  <Button variant="primary" onClick={() => handleExplore(category.url)}>
                    Explore
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default Categories;
