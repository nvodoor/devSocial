const express = require('express');
const router = express.Router()

// get request to api/users/test 
///@desc Tests users route
// @access Public
router.get('/test', (req, res) => res.json({msg: "Users Works"}));

module.exports = router;