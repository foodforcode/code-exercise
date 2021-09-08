const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const mailData = require('../client/src/api/mail.js');
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/mail', (req, res) => {
  res.status(200).send(mailData);
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});