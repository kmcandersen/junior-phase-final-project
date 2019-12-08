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

// POST api/campuses
router.post('/', async (req, res, next) => {
  try {
    const { name, description, address } = req.body;
    res.status(201);
    res.json(await Campus.create({ name, description, address }));
  } catch (err) {
    next(err);
  }
});

// PUT api/campuses/id
router.put('/:id/', async (req, res, next) => {
  try {
    const { name, description, address } = req.body;
    const updatedCampus = await Campus.update(
      {
        name,
        description,
        address
      },
      {
        where: { id: req.params.id },
        returning: true,
        plain: true
      }
    );
    res.json(updatedCampus);
  } catch (err) {
    next(err);
  }
});

// DELETE api/campuses/id
router.delete('/:id/', async (req, res, next) => {
  try {
    await Campus.destroy({
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
