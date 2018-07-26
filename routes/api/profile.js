const express = require('express');
const router = express.Router()

// get request to api/profile/test 
///@desc Tests profile route
// @access Public

router.get('/test', (req, res) => res.json({ msg: "Profiles Works" }));

module.exports = router;