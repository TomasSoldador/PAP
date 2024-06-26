// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json({ limit: '10mb' })); // ajuste conforme necessário
app.use(express.urlencoded({ limit: '10mb', extended: true })); // ajuste conforme necessário
app.use(cors());

app.use('/server/imagens', express.static(path.join(__dirname, './images/imagensPerfil')));
app.use('/server/imagesPosts', express.static(path.join(__dirname, './images/imagesPosts')));
app.use('/server/imagesPostsLoja', express.static(path.join(__dirname, './images/imagesPostsLoja')));


app.use('/api', routes);

// Importante: Use server.listen ao invés de app.listen
app.listen(3001, () => {
   console.log(`Server running on http://localhost:3001`);
});
