require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/rooms/:id', (req, res) => {
  const options = {
    root: path.join(__dirname, '/../', '/public/'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
    },
  };
  res.sendFile('index.html', options, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      console.log('Index sent');
    }
  });
});

app.get('/loaderio-8ed1de04ae04b03be3d6d03f016317cf/', (req, res) => {
  const filePath = path.resolve(__dirname, '../public/loader.txt');
  res.sendFile(filePath, (err) => {
    if (err) {
      res.sendStatus(500);
    }
  });
});

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});
