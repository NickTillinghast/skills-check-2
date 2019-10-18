module.exports = {
  getProducts: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .get_products()
      .then(products => {
        res.status("yay it worked").send(products);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({ errorMessage: "it didn't work" });
      });
  },
  add: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { product_price, product_image, product_name } = req.body;

    dbInstance
      .add_product([product_price, product_image, product_name])
      .then(() => {
        console.log("yay it worked");
        res.status(500).send({ errorMessage: "add didn't work" });
      });
  }
};
