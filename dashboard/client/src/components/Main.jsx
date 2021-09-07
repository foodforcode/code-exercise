import React, { useEffect, useState } from 'react';
import axios from 'axios';
import chunkMail from '../../../utils/chunkMail.js';
import { Container, Row } from 'reactstrap';
import { MailGallery } from './MailGallery';
import { Header } from './Header';


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
      console.log('success', response.data);
      const mailChunks = chunkMail(response.data)
      setMailItems(response.data);
      setMailChunks(mailChunks);
      setTotalPages(mailChunks.length);
    })
    .catch(error => {
      console.log('error', error);
      })
  }

  useEffect(() => {
    getMailItems();
  }, [])

  console.log('current page:', currentPage );
  console.log('mailChunkIndex:', mailChunkIndex);
  return (
    <div className="Main">
      <Header />
      <Container>
        {mailChunks.length > 0 ?
          <MailGallery mailChunks={mailChunks} mailItems={mailItems} mailChunkIndex={mailChunkIndex} onPreviousPage={handlePagePrevious} onNextPage={handlePageNext} currentPage={currentPage} totalPages={totalPages} /> : (null)
        }
      </Container>
    </div>
  );
}