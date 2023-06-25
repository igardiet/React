const { Router } = require('express');
const { check } = require('express-validator');
const { validateJWT, validateFields } = require('../middlewares');
const {
  createCategory,
  obtainCategories,
  obtainCategory,
} = require('../controllers/categories');
const { categoryExistsById } = require('../helpers/db-validators');

const router = Router();

router.get('/', obtainCategories);

router.get(
  '/:id',
  [
    check('id', 'It is not a valid Mongo ID').isMongoId(),
    check('id').custom(categoryExistsById),
    validateFields,
  ],
  obtainCategory
);

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
