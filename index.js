const express = require('express');
const routerApi = require('./routes');
const {logError , errorHandler} = require('./middlewares/error.handler');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logError);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port' +  port);
});
