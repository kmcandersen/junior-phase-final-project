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
// router.get('/:id', async (req, res, next) => {
//   try {
//     const result = await Student.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [Campus]
//     });
//     res.send(result);
//   } catch (err) {
//     next(err);
//   }
// });

router.get('/:id', async (req, res, next) => {
  try {
    const result = await Student.findByPk(req.params.id);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
