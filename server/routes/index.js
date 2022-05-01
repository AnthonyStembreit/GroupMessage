const router = require('express').Router();

const userRoutes = require('./user-routes');
const authRoutes = require('./auth-routes');
const messageRoutes = require('./message-routes')


router.use('/user', userRoutes);
router.use('/auth', authRoutes);
router.use('/message', messageRoutes);

module.exports = router;