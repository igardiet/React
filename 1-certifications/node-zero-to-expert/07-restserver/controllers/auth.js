const { response } = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const generateJWT = require('../helpers/generate-jwt');
const { googleVerify } = require('../helpers/google-verify');

const login = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    // EMAIL EXISTS ?
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        msg: 'User or Password incorrect',
      });
    }
    // IF USER IS ACTIVE
    if (!user.status) {
      return res.status(400).json({
        msg: 'User or Password incorrect - status: false',
      });
    }
    // PASSWORD VERIFICATION
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: 'User or Password incorrect - password',
      });
    }
    // GENERATE JWT
    const token = await generateJWT(user.id);

    res.json({
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Something went wrong',
    });
  }
};

const googleSignIn = async (req, res = response) => {
  const { id_token } = req.body;
  try {
    const googleUser = await googleVerify(id_token);
    console.log(googleUser);

    res.json({
      msg: 'All good!',
      id_token,
    });
  } catch (error) {
    json.status(400).json({
      ok: false,
      msg: 'Token could not be verified',
    });
  }
};

module.exports = {
  login,
  googleSignIn,
};
