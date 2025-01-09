import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';  // Import Font Awesome

const Footer = () => {
  return (
    <footer className="bg-primary text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-left">
            <p>&copy; 2025 E-Shop. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-right">
            <ul className="list-unstyled d-inline-flex mb-3 mb-md-0 footer-links">
              <li><a href="/PrivacyPolicy" className="text-light mx-3">Privacy Policy</a></li>
              <li><a href="/terms" className="text-light mx-3">Terms of Service</a></li>
              <li><a href="/contact" className="text-light mx-3">Contact Us</a></li>
            </ul>
            <div>
              <a href="https://facebook.com" className="text-light mx-3" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://twitter.com" className="text-light mx-3" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-light mx-3" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
