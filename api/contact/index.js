const router = require('koa-router')();
const controller = require('./controller.js');

router.post('/login', controller.Login);
router.get('/getDepts', controller.getDepts);
router.get('/getSubjects', controller.getSubjects);
router.get('/getContactsByDeptID/:deptID', controller.getContactsByDeptID);
router.get('/getContactsBySubjectID/:subjectID', controller.getContactsBySubjectID);
router.get('/searchByKeyword/:keyword', controller.searchByKeyword);
router.get('/getContactByID/:userID', controller.getContactByID);
router.get('/getContactWhenUpdate/:userID', controller.getContactWhenUpdate);
router.post('/updateContact/:userID', controller.updateContact);

module.exports = router;