const {Router} = require('express')
const {check} = require('express-validator')
const {validateFields} = require('../middlewares')
const { loadFile, updateImage } = require('../controllers')
const { allowedCollections } = require('../helpers')

const router = Router()

router.post('/', loadFile)
router.put('/:collection/:id', [
    check('id', 'Syntax error, it must be a valid Mongo ID').isMongoId(),
    check('collection').custom(c => allowedCollections(c, ['users', 'products'])),
    validateFields
], updateImage)

module.exports = router