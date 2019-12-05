const router = require('express').Router();
const { Campus, Student } = require('../db');

// GET api/campuses
router.get('/', async (req, res, next) => {
  try {
    const result = await Campus.findAll();
    res.send(result);
  } catch (err) {
    next(err);
  }
});

// GET api/campuses/:id
router.get('/:id', async (req, res, next) => {
  try {
    const result = await Campus.findByPk(req.params.id);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
