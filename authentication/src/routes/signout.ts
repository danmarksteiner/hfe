import express from 'express';

const router = express.Router();

router.get('/api/users/signout', (req, res) => {
  res.send('Signout route');
});

export { router as signoutRouter };
