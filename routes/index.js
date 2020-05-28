const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res) {
  res.sendFile('button.html', {root: path.join(__dirname, '../public')});
});

module.exports = router;
