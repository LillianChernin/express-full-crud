const express = require('express');
const router = express.Router();
const instruments = require('../models/instruments');

router.get('/', (request, response) => {
  response.render('./instruments/index', {
    instrumentsData: instruments,
    documentTitle: "List of Instruments"
  })
})

module.exports = router;
