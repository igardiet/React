const { Router } = require('express');
const { check } = require('express-validator');
const { validateJWT, validateFields } = require('../middlewares');
const { createCategory } = require('../controllers/categories');

const router = Router();

router.get('/', (req, res) => {
  res.json('get');
});

router.get('/:id', [check('id').custom(
  // categoryExists
  )], (req, res) => {
  res.json('get - id');
});

router.post(
  '/',
  [
    validateJWT,
    check('name', 'Name is mandatory').not().isEmpty(),
    validateFields,
  ],
  createCategory
);

router.put('/:id', (req, res) => {
  res.json('put');
});

router.delete('/:id', (req, res) => {
  res.json('user status: false');
});

module.exports = router;
