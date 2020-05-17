const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.json(products).status(200);
    })
    .catch((err) => {
      console.log(err);
      res.json({ reason: err }).status(400);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findByPk(prodId)
    .then((product) => {
      res.json(product).status(200);
    })
    .catch((err) => {
      console.log(err);
      res.json({ reason: err }).status(400);
    });
};

exports.getCart = (req, res, next) => {
  console.log(req.user.cart);
  req.user
    .getCart()
    .then((cart) => {
      console.log(cart);
      return cart.getProducts();
    })
    .then((products) => {
      console.log(products);
      res.json(products).status(200);
    })
    .catch((err) => {
      console.log(err);
      res.json({ reason: err }).status(400);
    });
};

// TODO: Need to add Cart total price to response
exports.putCart = (req, res, next) => {
  const { productId } = req.body;
  let fetchedCart;
  let newQuantity = 1;
  req.user
    .getCart()
    .then((cart) => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: productId } });
    })
    .then((products) => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }
      if (product) {
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        return product;
      }
      return Product.findByPk(productId);
    })
    .then((product) => {
      return fetchedCart.addProduct(product, {
        through: { quantity: newQuantity },
      });
    })
    .then(() => {
      res.json({ updatedCart: 1 }).status(200);
    })
    .catch((err) => {
      console.log(err);
      res.json({ updatedCart: 0, reason: err }).status(400);
    });
};

exports.deleteCartProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .getCart()
    .then((cart) => {
      return cart.getProducts({ where: { id: prodId } });
    })
    .then((products) => {
      const product = products[0];
      return product.cartItem.destroy();
    })
    .then((result) => {
      res.json({ deletedCartItem: 1 }).status(200);
    })
    .catch((err) => {
      console.log(err);
      res.json({ deletedCartItem: 0, reason: err }).status(400);
    });
};

exports.postOrder = (req, res, next) => {
  let fetchedCart;
  req.user
    .getCart()
    .then((cart) => {
      fetchedCart = cart;
      return cart.getProducts();
    })
    .then((products) => {
      req.user
        .createOrder()
        .then((order) => {
          return order.addProducts(
            products.map((product) => {
              product.orderItem = { quantity: product.cartItem.quantity };
              return product;
            }),
          );
        })
        .catch((err) => console.log(err));
    })
    .then((result) => {
      return fetchedCart.setProducts(null);
    })
    .then((result) => {
      res.json({ orderCreated: 1 }).status(201);
    })
    .catch((err) => {
      console.log(err);
      res.json({ orderCreated: 0, reason: err }).status(400);
    });
};

exports.getOrders = (req, res, next) => {
  req.user
    .getOrders({ include: ['products'] })
    .then((orders) => {
      res.json(orders).status(200);
    })
    .catch((err) => {
      console.log(err);
      res.json({ reason: err }).status(400);
    });
};
