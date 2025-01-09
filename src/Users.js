import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Users = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", phone: "1234567890", role: "Customer" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", phone: "0987654321", role: "Admin" },
  ];

  return (
    <Container fluid>
      <section className="my-5">
        <h2 className="banner text-center py-1 bg-primary text-white">All Users</h2>
        <Row>
          {users.map((user) => (
            <Col key={user.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{user.role}</Card.Subtitle>
                  <Card.Text>
                    <strong>Email:</strong> {user.email}
                    <br />
                    <strong>Phone:</strong> {user.phone}
                  </Card.Text>
                  <Button variant="info" size="sm" className="me-2">Edit</Button>
                  <Button variant="danger" size="sm">Delete</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default Users;
