
# Table of Content

- [Table of Content](#table-of-content)
- [Products, Cart and Orders - Tailbuds](#products-cart-and-orders---tailbuds)
  - [setup](#setup)
    - [1. Clone this repository](#1-clone-this-repository)
    - [2. Install with dev dependencies](#2-install-with-dev-dependencies)
    - [3. start node server](#3-start-node-server)
  - [APIs and content](#apis-and-content)
    - [Admin APIs](#admin-apis)
      - [POST: Add Product](#post-add-product)
      - [PUT: Edit Product](#put-edit-product)
      - [DELETE: Delete Product](#delete-delete-product)
    - [User APIs](#user-apis)
      - [GET: Get all products](#get-get-all-products)
      - [GET: Get a Product](#get-get-a-product)
      - [PUT: Add to cart](#put-add-to-cart)
      - [GET: Cart](#get-cart)
      - [DELETE: Delete Cart Item](#delete-delete-cart-item)
      - [POST: Create Order](#post-create-order)
      - [GET: Orders](#get-orders)

# Products, Cart and Orders - Tailbuds

## setup

### 1. Clone this repository

```{sh}
git clone https://github.com/tailbuds/products-cart-orders.git
```

### 2. Install with dev dependencies

```{sh}
npm install
```

Get linting and formatter dependencies

```{sh}
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node
npx install-peerdeps --dev eslint-config-airbnb
```

### 3. start node server

```{sh}
npm start
```

## APIs and content

> TODO: Much better Documentation

### Admin APIs

#### POST: Add Product

```-X POST http://localhost:3000/admin/product```

```-H "Accept: application/json" -H "Content-Type: application/json"```

Request

```{json}
{
    "title": "Goat Milk",
    "price": 29.99,
    "imageUrl": "https://img.icons8.com/plasticine/550/000000/milk-bottle.png",
    "description": "Goat milk for everyday health"
}
```

#### PUT: Edit Product

```-X PUT http://localhost:3000/admin/product```

```-H "Accept: application/json" -H "Content-Type: application/json"```

Request

```{json}
{
    "productId": 11,
    "title": "Goat Milk",
    "price": 29.99,
    "imageUrl": "https://img.icons8.com/plasticine/550/000000/milk-bottle.png",
    "description": "Goat milk for everyday health !!!"
}
```

#### DELETE: Delete Product

```-X DELETE http://localhost:3000/admin/product```

```-H "Accept: application/json" -H "Content-Type: application/json"```

Request

```{json}
{
    "productId": 11
}
```

### User APIs

#### GET: Get all products

```-X GET http://localhost:3000/products```

```-H "Accept: application/json"```

#### GET: Get a Product

```-X GET http://localhost:3000/products/{productId}```

```-H "Accept: application/json"```

#### PUT: Add to cart

```-X PUT localhost:3000/cart```

```-H "Accept: application/json" -H "Content-Type: application/json"```

Request

```{json}
{
    "productId": 11
}
```

#### GET: Cart

```-X GET http://localhost:3000/cart```

```-H "Accept: application/json"```

#### DELETE: Delete Cart Item

```-X DELETE localhost:3000/cart-item```

```-H "Accept: application/json" -H "Content-Type: application/json"```

Request

```{json}
{
    "productId": 3
}
```

#### POST: Create Order

```-X POST localhost:3000/orders```

```-H "Accept: application/json" -H```

#### GET: Orders

```-X GET localhost:3000/orders```

```-H "Accept: application/json" -H```
