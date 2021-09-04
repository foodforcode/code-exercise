import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
  const [MailItems, setMailItems] = useState([]);
  const getMailItems = () => {
    console.log('make request');
    axios.get('/mail')
      .then(response => {
        console.log('success');
      })
      .catch(error => {
        console.log('error');
      })
  }

  useEffect(() => {
    getMailItems();
  }, [])
  return (
    <div className="Main">
      <p>This is the mailbox</p>
    </div>
  );
}

export default Main;
