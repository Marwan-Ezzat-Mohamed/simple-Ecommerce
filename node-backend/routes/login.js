const express = require("express");
const router = express.Router();
const pool = require("../database");
const Joi = require("joi");
const dbControl = require("../dbControl/dbControlCustomer");

router.get("/:email/:password", async (req, res) => {
  const email = req.params.email;
  const password = req.params.password;
  const result = await dbControl.getCustomerByEmailAndPassword(email, password);
  if (result === -1) {
    return res.status(200).send("No customer found");
  }
  return res.send(result);
});

router.post("/", async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const customer = req.body;

  const result = await dbControl.addCustomer(customer);
  res.send(customer);
});

module.exports = router;
