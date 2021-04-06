const path = require('path');
const express = require('express');
const cowsay = require('cowsay');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, '../dist')));

const port = process.env.port || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(
    cowsay.say({
      text: `Yeah we did it, we started the server on PORT ${port}`,
    })
  );
});
