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
    res.send(result);
  } catch (err) {
    next(err);
  }
});

// POST api/students
router.post('/', async (req, res, next) => {
  try {
    const { firstName, lastName, email, gpa } = req.body;
    const imageUrl = `https://robohash.org/${firstName}?set=set2`;
    res.status(201);
    res.json(
      await Student.create({ firstName, lastName, email, gpa, imageUrl })
    );
  } catch (err) {
    next(err);
  }
});

module.exports = router;
