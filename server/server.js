// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use('/server/imagens', express.static(path.join(__dirname, './imagens')));

app.use('/api', routes);

// Importante: Use server.listen ao invés de app.listen
app.listen(3001, () => {
   console.log(`Server running on http://localhost:3001`);
});
