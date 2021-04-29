const express = require('express'),
router = express.Router(),
docController = require('../controllers/docController')

router.get('/', docController.doc_index_get)

module.exports = router;