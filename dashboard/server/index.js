const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
// app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/mail', (req, res) => {
  res.send('requested mail');
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});