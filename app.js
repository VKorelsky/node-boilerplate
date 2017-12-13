const path = require('path');
const express = require('express');
const helmet = require('helmet');
const expressLayouts = require('express-ejs-layouts');
const app = express();

const port = process.env.PORT || 3000;

app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {
  res.render('pages/home');
})

app.listen(port, function(){
  console.log(`listening on port ${port}`);
})
