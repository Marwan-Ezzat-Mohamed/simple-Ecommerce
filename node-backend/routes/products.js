const Joi = require("joi");
const express = require("express");
const router = express.Router();
const dbControl = require("../dbControl/dbControlProducts");

// get all products
router.get("/", async (req, res) => {
  const result = await dbControl.getAllProducts();
  if (result.length === 0 || result == -1) {
    return res.status(404).send("product with the given id is not found");
  }
  res.send(result);
});

//get a product with sku
router.get("/:sku", async (req, res) => {
  const sku = req.params.sku;
  const result = await dbControl.getProduct(sku);

  if (result.length === 0 || result == -1) {
    return res.status(404).send("product with the given id is not found");
  }
  return res.send(result);
});

// add a product
router.post("/", async (req, res) => {
  const { error } = validateProduct(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const result = await dbControl.insertProduct(req.body);
  res.send(result);
});

// edit a product
router.put("/:sku", async (req, res) => {
  const { error } = validateProduct(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const result = await dbControl.editProduct(req.body);
  res.status(200).send(result);
});

//delete a product
router.delete("/:sku", async (req, res) => {
  const sku = req.params.sku;
  const result = await dbControl.deleteProduct(sku);
  if (result == -1)
    return res.status(404).send("product with the given id is not found");
  res.status(200).send(result);
});

function validateProduct(product) {
  const schema = Joi.object({
    sku: Joi.string().required(),
    stock: Joi.number().min(3).required(),
    price: Joi.number().min(0).required(),
    description: Joi.string().min(1).max(4096),
    name: Joi.string().min(1).max(100).required(),
  });

  return schema.validate(product);
}

module.exports = router;
