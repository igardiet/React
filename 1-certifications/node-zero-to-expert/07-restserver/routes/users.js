const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const {
  getUsers,
  postUsers,
  putUsers,
  patchUsers,
  deleteUsers,
} = require('../controllers/users');

router.get('/', getUsers);
router.post(
  '/',
  [check('email', 'Email syntax is not valid!').isEmail()],
  postUsers
);
router.put('/:id', putUsers);
router.patch('/', patchUsers);
router.delete('/', deleteUsers);

module.exports = router;
