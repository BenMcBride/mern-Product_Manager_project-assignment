const { Product } = require("../models/products.model");

module.exports.index = (req, res) => {
  Product.find()
    .then((products) => res.status(200).json(products))
    .catch((err) => res.status(400).json(err));
};

module.exports.findProductsAll = (req, res) => {
  Product.find()
    .then((allProducts) => res.status(200).json({ product: allProducts }))
    .catch((err) => res.status(400).json(err));
};

module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((newProduct) => res.status(201).json(newProduct))
    .catch((err) => res.status(400).json(err));
};

module.exports.updateProduct = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then((updatedProduct) => res.status(200).json(updatedProduct))
    .catch((err) => res.status(400).json(err));
};

module.exports.findProduct = (req, res) => {
  Product.findById(req.params.id)
    .then((oneProduct) => res.status(200).json(oneProduct))
    .catch((err) => res.status(400).json(err));
};

module.exports.deleteProduct = (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(400).json(err));
};