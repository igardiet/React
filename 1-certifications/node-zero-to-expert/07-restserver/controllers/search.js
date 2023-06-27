const { response } = require('express');
const { ObjectId } = require('mongoose').Types;
const { User, Category, Product } = require('../models');

const allowedCollections = ['category', 'products', 'roles', 'users'];
const searchUsers = async (term = '', res = response) => {
  const isMongoID = ObjectId.isValid(term);
  if (isMongoID) {
    const user = await User.findById(term);
    return res.json({
      results: user ? [user] : [],
    });
  }
};

const search = (req, res = response) => {
  const { collection, term } = req.params;
  if (!allowedCollections.includes(collection)) {
    return res.status(400).json({
      msg: `Allowed collections are: ${allowedCollections}`,
    });
  }
  switch (collection) {
    case 'users':
      searchUsers(term, res);
      break;
    case 'category':
      break;
    case 'products':
      break;
    default:
      res.status(500).json({
        msg: 'This search was forgotten',
      });
  }
};

module.exports = {
  search,
};
