// src/AllTheBooks.js
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import booksData from "./books.json";

const AllTheBooks = () => {
  return (
    <Container className="mt-4">
      <Row>
        {booksData.map((book) => (
          <Col key={book.id} md={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={book.cover} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.author}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
