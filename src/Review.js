import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Reviews = () => {
  const reviews = [
    { id: 1, product: "Smartphone", rating: 5, comment: "Excellent product!" },
    { id: 2, product: "T-Shirt", rating: 4, comment: "Good quality, comfortable fit" },
  ];

  return (
    <Container fluid>
      {/* Banner Section */}
      <div className="banner text-center py-1 bg-primary text-white">
        <h1>Reviews</h1>
        <p>Read what customers are saying to the review</p>
      </div>

      {/* Reviews Section */}
      <section className="my-5">
        <h2 className="text-center mb-4">Customer Reviews</h2>
        <Row>
          {reviews.map((review) => (
            <Col key={review.id} md={6} lg={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>{review.product}</Card.Title>
                  <Card.Text>Rating: {review.rating} stars</Card.Text>
                  <Card.Text>{review.comment}</Card.Text>
                  <Button variant="info" size="sm">Reply</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default Reviews;
