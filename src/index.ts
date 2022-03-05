import express from 'express';

const app = express();
const port = 3000;

app.get('/health', (_req, res) => {
  res.status(200).send('Ok');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
