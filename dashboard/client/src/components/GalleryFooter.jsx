import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

export const GalleryFooter = ({ totalMailItems, totalPages, currentPage, onPreviousPage, onNextPage }) => {

  return (
    <Container className="gallery-footer">
      <Row xs="2">
        <Col xs="6" className="total-mail-count">
          <strong>
            {totalMailItems}
          </strong> mail items
        </Col>
        <Col xs="6">
          <Button disabled={currentPage === totalPages} onClick={() => onNextPage(currentPage, totalPages)} className="gallery-footer-btn">Next</Button>
          <Button disabled={currentPage === 1} onClick={() => onPreviousPage(currentPage, totalPages)} className="gallery-footer-btn">Previous</Button>
        </Col>
      </Row>
    </Container>
  )
}