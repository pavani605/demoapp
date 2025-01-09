import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Table, Modal } from "react-bootstrap";

const Orders = () => {
  const orders = [
    { id: 1, user: "Pavani", total: 699.99, status: "Shipped" },
    { id: 2, user: "Swaroopa", total: 19.99, status: "Pending" },
    { id: 3, user: "Prasad", total: 699.99, status: "Shipped" },
    { id: 4, user: "Usha", total: 19.99, status: "Pending" },
    { id: 5, user: "Sunny", total: 699.99, status: "Shipped" },
    { id: 6, user: "Ram", total: 19.99, status: "Pending" },
    { id: 7, user: "Raju", total: 699.99, status: "Shipped" },
    { id: 8, user: "vinay", total: 19.99, status: "Pending" },
  ];
  

  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const onViewDetails = (order) => {
    setSelectedOrder(order);
    setPopupVisible(true);
  };

  const onClosePopup = () => {
    setPopupVisible(false);
    setSelectedOrder(null);
  };

  return (
    <Container fluid>
      <section className="my-5">
        <h2 className="banner text-center py-1 bg-primary text-white">All Orders</h2>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.user}</td>
                    <td>${order.total.toFixed(2)}</td>
                    <td>{order.status}</td>
                    <td>
                      <Button
                        variant="info"
                        size="sm"
                        className="me-2"
                        onClick={() => onViewDetails(order)}
                      >
                        View Details
                      </Button>
                      <Button variant="warning" size="sm">
                        Update Status
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </section>

      {/* Modal */}
      <Modal
        show={popupVisible}
        onHide={onClosePopup}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"  
      >
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder ? (
            <div>
              <p><strong>User:</strong> {selectedOrder.user}</p>
              <p><strong>Total:</strong> ${selectedOrder.total.toFixed(2)}</p>
              <p><strong>Status:</strong> {selectedOrder.status}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onClosePopup}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Orders;
