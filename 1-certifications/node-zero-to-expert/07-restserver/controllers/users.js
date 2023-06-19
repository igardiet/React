const { response, request } = require('express');

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

const postUsers = (req, res = response) => {
  const { name, age } = req.body;
  res.json({
    msg: 'post API - controller',
    name,
    age,
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
