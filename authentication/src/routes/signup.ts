import express from 'express';

const router = express.Router();

router.get('/api/users/signup', (req, res) => {
  res.send('Sign the user up');
});

export { router as signupRouter };
