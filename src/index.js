const express = require('express');
const cors = require('cors');

const predictRouter = require('./routes/predict');

const app = express();

app.use(cors({ credentials: true }));

app.use('/predict', predictRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
