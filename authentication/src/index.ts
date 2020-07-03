import express from 'express';
import { json } from 'body-parser';

// Start Express Server
const app = express();

// JSON body parsing middleware
app.use(json());

// Listen on port 3000
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
