const { login, googleSignIn } = require('./auth');
const {
  obtainCategories,
  obtainCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('./categories');
const {
  obtainProducts,
  obtainProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('./products');
const { search } = require('./search');
const { getUsers, postUsers, putUsers, deleteUsers } = require('./users');

module.exports = {
  login,
  googleSignIn,
  obtainCategories,
  obtainCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  obtainProducts,
  obtainProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  search,
  getUsers,
  postUsers,
  putUsers,
  deleteUsers,
};
