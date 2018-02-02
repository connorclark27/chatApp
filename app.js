const express = require('express'); //include this just like a php include
const app = express();


//app routes
app.use(require('./routes/index'));
app.use(require('./routes/contact'));
app.use(require('./routes/portfolio'));


/*app.get('/contact', (req, res)=> {
  res.sendFile(__dirname + '/contact.html');
});

app.get('/portfolio', (req, res)=> {
  res.sendFile(__dirname + '/portfolio.html');
});*/

app.listen(3000, () => {
  console.log('listening on port 3000');
});
