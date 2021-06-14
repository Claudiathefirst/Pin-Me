const router = require('express').Router();
router.use('/users', require('./users').default);
router.use((req, res, next) => {
  const err = new Error('Whomp Whomp!');
  err.status = 404;
  next(err);
});
module.exports = router;