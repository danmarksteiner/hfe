import express from 'express';

const router = express.Router();

router.get('/api/users/signup', (req, res) => {
  res.send('Signup user');
});

export { router as signupRouter };
