const ProductController = require("../controllers/products.controller");

module.exports = function (app) {
  app.get("/api/products", ProductController.index);
  app.post("/api/products", ProductController.createProduct);
  app.get('/api/products/:id', ProductController.findProduct);
  app.patch('/api/products/:id', ProductController.updateProduct);
  app.delete('/api/products/:id', ProductController.deleteProduct);
};
