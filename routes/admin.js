const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => POST
router.post('/product', adminController.postAddProduct);

// /admin/edit-product => POST
router.put('/product', adminController.putEditProduct);

// /admin/delete-product => POST
router.delete('/product', adminController.deleteProduct);

module.exports = router;
