const express = require('express');
const router = express.Router();
const { submitContact } = require('../Controllers/ContactControllers');

router.post('/contact', submitContact);

module.exports = router;