import express from 'express';
import { json } from 'body-parser';

import { currentUserRouter } from './routes/current-user';
import { signupRouter } from './routes/signup';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';

// Start Express Server
const app = express();

// JSON body parsing middleware
app.use(json());

// Authentication Routes
app.use(currentUserRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);

// Listen on port 3000
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
