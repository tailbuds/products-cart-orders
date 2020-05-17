const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.put('/cart', shopController.putCart);

router.delete('/cart-item', shopController.deleteCartProduct);

router.post('/orders', shopController.postOrder);

router.get('/orders', shopController.getOrders);

module.exports = router;
