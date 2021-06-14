//entry point server
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const port = process.env.PORT || 3000;

// logging middleware
app.use(morgan('dev'));
//body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// static file-serving middleware
app.use(express.static(path.join(__dirname, '../public/index.html')));
// api routes
app.use('/api', require('./api'));
//send index html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res
    .status(err.status || 500)
    .send(err.message || 'DANG! Internal server error 🥴');
});

app.listen(port, () => {
  console.log(`Harmonizing on port ${port}`);
});
