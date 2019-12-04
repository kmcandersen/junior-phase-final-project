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

// GET api/campuses/:campusId
router.get('/:campusId', async (req, res, next) => {
  try {
    const result = await Campus.findByPk(req.params.campusId);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
