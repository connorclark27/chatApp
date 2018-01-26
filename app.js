const express = require('express'); //include this just like a php include
const app = express();

app.get('/', (req, res)=> {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
