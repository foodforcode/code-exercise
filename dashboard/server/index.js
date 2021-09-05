const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const mailData = require('../client/src/api/mail.js');
// app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.static(path.join(__dirname, '../client/src/api')));

app.get('/mail', (req, res) => {

  res.send(mailData);
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});