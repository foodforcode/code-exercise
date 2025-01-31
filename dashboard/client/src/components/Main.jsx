import React, { useEffect, useState } from 'react';
import { Container, Row } from 'reactstrap';
import axios from 'axios';
import { Header } from './Header.jsx';
import { MailGallery } from './MailGallery.jsx';
import chunkMail from '../../../utils/chunkMail.js';


export const Main = () => {
  const [mailItems, setMailItems] = useState([]);
  const [mailChunks, setMailChunks] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [mailChunkIndex, setMailChunkIndex] = useState(0);

  const handlePagePrevious = (currentPage, totalPages) => {
    setCurrentPage(currentPage - 1);
    setMailChunkIndex(mailChunkIndex - 1);
  }

  const handlePageNext = (currentPage, totalPages) => {
    setCurrentPage(currentPage + 1);
    setMailChunkIndex(mailChunkIndex + 1);
  }

  const getMailItems = () => {
    axios.get('/mail')
    .then(response => {
      const mailChunks = chunkMail(response.data)
      setMailItems(response.data);
      setMailChunks(mailChunks);
      setTotalPages(mailChunks.length);
    })
    .catch(error => {
      console.log('error:', error);
      })
  }

  useEffect(() => {
    getMailItems();
  }, [])

  return (
    <div>
      <Header />
      <Container className="main">
        {mailChunks.length > 0 ?
          (<MailGallery
            mailChunks={mailChunks}
            mailItems={mailItems}
            mailChunkIndex={mailChunkIndex}
            onPreviousPage={handlePagePrevious}
            onNextPage={handlePageNext}
            currentPage={currentPage}
            totalPages={totalPages}
            />) : (null)
        }
      </Container>
    </div>
  );
}