const express = require('express');
const router = express.Router();

const birds = require('./birds');
const member = require('./member');

router.use('/birds', birds);
router.use('/member', member);

module.exports = router; // 모듈로 만드는 부분