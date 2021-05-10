const router = require('express').Router();

const usersRoute = require('./users.route')
const messagesRoute = require('./messages.route')
const controller = require('../controllers/home.controller')
const conversationRoute = require('./conversation.route')
const imagesRoute = require('./images.route')


router.get('/', controller.index)
router.use('/users', usersRoute)
router.use('/messages', messagesRoute)
router.use('/conversation', conversationRoute)
router.use('/images', imagesRoute)

module.exports = router