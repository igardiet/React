const { response, request } = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const getUsers = (req = request, res = response) => {
  const { q, name = 'No name', apiKey, page = 1, limit } = req.query;
  res.json({
    msg: 'get API - controller',
    q,
    name,
    apiKey,
    page,
    limit,
  });
};

const postUsers = async (req, res = response) => {
  const { name, email, password, role } = req.body;
  const user = new User({ name, email, password, role });

  // PASSWORD ENCRYPTION  *!
  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(password.toString(), salt);

  // SAVE IN DB
  await user.save();

  res.json({
    user,
  });
};

const putUsers = (req, res = response) => {
  const { id } = req.params;
  res.json({
    msg: 'put API - controller',
    id,
  });
};

const patchUsers = (req, res) => {
  res.json({
    msg: 'patch API - controller',
  });
};

const deleteUsers = (req, res) => {
  res.json({
    msg: 'delete API - controller',
  });
};

module.exports = {
  getUsers,
  postUsers,
  putUsers,
  patchUsers,
  deleteUsers,
};
