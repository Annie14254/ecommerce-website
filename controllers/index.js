const router = require('express').Router();
const homeRoutes = require('./homeroutes');
const userProfileroutes = require('./userProfileroutes')
const apiRoutes = require('./api');


router.use('/api', apiRoutes)
router.use('/', homeRoutes);
//router.use('/profile', userProfileroutes)

module.exports = router;
