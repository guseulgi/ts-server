const express = require('express');
const router = express.Router();

const {
  getAllFoodInfo,
} = require('../controllers/foodController');

router.get('/', getAllFoodInfo);

module.exports = router;