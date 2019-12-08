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

router.put('/:id/update', async (req, res, next) => {
  try {
    const { firstName, lastName, gpa, email } = req.body;
    const updatedStudent = await Student.update(
      {
        firstName,
        lastName,
        gpa,
        email
      },
      {
        where: { id: req.params.id },
        returning: true,
        plain: true
      }
    );
    res.json(updatedStudent);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id/', async (req, res, next) => {
  try {
    await Student.destroy({
      where: {
        id: req.params.id
      }
    });
    res.send(req.params.id);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
