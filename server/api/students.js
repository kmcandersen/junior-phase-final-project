const router = require('express').Router();
const { Student, Campus } = require('../db');

// GET api/students
router.get('/', async (req, res, next) => {
  try {
    const result = await Student.findAll();
    res.send(result);
  } catch (err) {
    next(err);
  }
});

// GET api/students/:id
router.get('/:id', async (req, res, next) => {
  try {
    const result = await Student.findByPk(req.params.id);
    console.log('result from API', result);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
