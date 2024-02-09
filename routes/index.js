const express = require('express');
const router = express.Router();
// const skku = require('../utils/skku');

router.get('/', /*async*/ (req, res, next) => {
  try {
    // const id = process.env.STUDENT_ID;
    // const pwd = process.env.STUDENT_PW;
    // const result = await skku.login(id, pwd);
    const result = {
      name: process.env.STUDENT_NAME || '???',
      major: process.env.STUDENT_MAJOR || '???'
    }
    res.render('index', { title: 'SKKU-Login', student: result });
  } catch(err) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
  }
});

module.exports = router;
