import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

export const GalleryFooter = ({ totalMailItems, totalPages, currentPage, onPreviousPage, onNextPage }) => {

  // useEffect(() => {
  // }, [currentPage])

  console.log('current page in footer:', currentPage)
  return (
    <Container className="gallery-footer">
      <Row xs="2">
        <Col xs="6">
          <strong>
            {totalMailItems}
          </strong> mail items
        </Col>
        <Col xs="6">
          <Button color="" disabled={currentPage === totalPages} onClick={() => onNextPage(currentPage, totalPages)} className="gallery-footer-btn">Next</Button>
          <Button color="" disabled={currentPage === 1} onClick={() => onPreviousPage(currentPage, totalPages)} className="gallery-footer-btn">Previous</Button>
        </Col>
      </Row>
    </Container>
  )
}