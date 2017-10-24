const router =  require('koa-router')();
const contact = require('../contact/index.js');


router.use('/contact', contact.routes(), contact.allowedMethods());

module.exports = router;