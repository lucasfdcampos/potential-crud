import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World, Gazin tech!' });
});

app.listen(3333, () => {
  console.log('🚀 [Gazin tech] Server started on port 3333.');
});
