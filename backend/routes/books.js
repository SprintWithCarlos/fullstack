const {
  Router,
} = require('express');

const router = Router();
router.get('/', (req, res) => res.json('Hello World'));
module.exports = router;
