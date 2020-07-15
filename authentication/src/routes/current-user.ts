import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
  res.send('The current user');
});

export { router as currentUserRouter };
