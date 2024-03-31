const express = require('express')
const { readFile } = require('fs')
const cors = require('cors');

const app = express();
app.use(cors({ origin: '*' }));

app.listen(5000)

app.use((req, res) => {
  if (req.url == '/users'){
    res.json({ users: { user: {id: 19912, name: 'Ivan', phone: '+79384102612', email: 'besedin_b@bk.ru'}}})
  }
})