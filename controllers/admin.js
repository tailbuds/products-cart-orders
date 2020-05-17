const Product = require('../models/product');

exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, price, description } = req.body;
  console.log(req.body);
  req.user
    .createProduct({
      title: title,
      price: price,
      imageUrl: imageUrl,
      description: description,
    })
    .then(() => {
      console.log('Created a Product');
      res.json({ productCreated: 1 }).status(201);
    })
    .catch((err) => {
      console.log(err);
      res.json({ productCreated: 0, reason: err }).status(400);
    });
};

exports.putEditProduct = (req, res, next) => {
  const { productId, title, imageUrl, price, description } = req.body;
  Product.findByPk(productId)
    .then((product) => {
      product.title = title;
      product.price = price;
      product.description = description;
      product.imageUrl = imageUrl;
      return product.save();
    })
    .then(() => {
      console.log('Updated Product');
      res.json({ updatedProduct: 1 }).status(201);
    })
    .catch((err) => {
      console.log(err);
      res.json({ updatedProduct: 0, reason: err }).status(400);
    });
};

exports.deleteProduct = (req, res, next) => {
  const { productId } = req.body;
  Product.findByPk(productId)
    .then((product) => {
      return product.destroy();
    })
    .then(() => {
      console.log('Destroyed Product');
      res.json({ deletedProduct: 1 }).status(200);
    })
    .catch((err) => {
      console.log(err);
      res.json({ deletedProduct: 0, reason: err }).status(400);
    });
};
