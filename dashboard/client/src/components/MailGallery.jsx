import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { GalleryHeader } from './GalleryHeader';
import { GalleryFooter } from './GalleryFooter';
import { MailCard } from './MailCard';

export const MailGallery = ({ mailItems, mailChunks, mailChunkIndex, onPreviousPage, onNextPage, currentPage, totalPages }) => {
  console.log('mailChunkIndex:', mailChunkIndex);

  return (
    <Container>
      <GalleryHeader />
      <div className="gallery-cards">

      <Row xs="1" md="3">
        {mailChunks[mailChunkIndex].map(mailItem => (
          <Col key={mailItem.id}>
            <MailCard mailItem={mailItem}/>
          </Col>
        ))}
        </Row>
        </div>
      <Row>
        <GalleryFooter totalMailItems={mailItems.length} onNextPage={onNextPage} onPreviousPage={onPreviousPage} currentPage={currentPage} totalPages={mailChunks.length} />
      </Row>
    </Container>
  )
}