const router = require('koa-router')();
const controller = require('./controller.js');

router.post('/login', controller.Login);
router.get('/getDepts', controller.getDepts);
router.get('/getSubjects', controller.getSubjects);
router.get('/getContactsByDeptID/:deptID', controller.getContactsByDeptID);
router.get('/getContactsBySubjectID/:subjectID', controller.getContactsBySubjectID);
router.get('/getContactByPhone/:userID', controller.getContactByPhone);

module.exports = router;