const { response } = require('express');

const getUsers = (req, res = response) => {
  res.json({
    msg: 'get API - controller',
  });
};

const postUsers = (req, res = response) => {
  const { name, age } = req.body;
  res.json({
    msg: 'post API - controller',
    name,
    age,
  });
};

const putUsers = (req, res) => {
  res.json({
    msg: 'put API - controller',
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
