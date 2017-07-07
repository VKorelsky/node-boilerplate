const express = require('express');
const helmet = require('helmet');
const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send();
})

debugger;
app.listen(port, function(){
  console.log(`listening on port ${port}`);
})
