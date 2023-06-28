const { response } = require('express');
const { uploadFile } = require('../helpers');

const loadFile = async (req, res = response) => {
  if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
    return res.status(400).json({ msg: 'There are no files to upload' });
  }

  try {
    // const name = await uploadFile(req.files, ['txt', 'md'], 'texts'); -> ONLY SAVE .MD OR .TXT IN TEXTS FOLDER
    const name = await uploadFile(req.files, undefined, 'images');
    res.json({ name });
  } catch (msg) {
    res.status(400).json({msg})
  }
};

const updateImage = async (req, res = response) => {
  const {id, collection} = req.params
  
  res.json({id, collection})
}

module.exports = {
  loadFile,
  updateImage
};
