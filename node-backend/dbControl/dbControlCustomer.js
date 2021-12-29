const queries = require("./sqlStatments");
const dbControl = require("./dbControl");

async function getCustomer(customer_id) {
    const connection = await dbControl.getConnection();
    const query = queries.getCustomer(customer_id);
  
    let done = true,
      error = -1,
      customer;
  
    await connection
      .query(query)
      .then(res => {
        customer = res[0];
        console.log("done getting the customer");
      })
      .catch((err) => {
        error = err.sqlMessage;
        done = false;
      });
    connection.end();
    if (!done) return error;
    console.log(customer);
    return customer;
  }

async function getAllCustomers() {
    const connection = await dbControl.getConnection();
    const query = queries.getAllCustomers();
  
    let done = true,
      error = -1,
      customers;
  
    await connection
      .query(query)
      .then(res => {
        customers = res[0];
        console.log("done getting all the customers");
      })
      .catch((err) => {
        error = err.sqlMessage;
        done = false;
      });
    connection.end();
    if (!done) return error;
    console.log(customers);
    return customers;
  }

  async function addCustomer(newCustomer) {
    const connection = await dbControl.getConnection();
    const query = queries.addCustomer(newCustomer.email, newCustomer.password, newCustomer.address, newCustomer.phone);
  
    let done = true,
      error = -1,
      customer;
  
    await connection
      .query(query)
      .then(res => {
        customer = res[0];
        console.log("done adding the customer");
      })
      .catch((err) => {
        error = err.sqlMessage;
        done = false;
      });
    connection.end();
    if (!done) return error;
    console.log(customer);
    return customer;
  }

  async function editCustomer(customer, customer_id) {
    const connection = await dbControl.getConnection();
    const query = queries.editCustomer(customer.email, customer.password, customer.address, customer.phone, customer_id);
  
    let done = true,
      error = -1,
      result;
  
    await connection
      .query(query)
      .then((res) => {
        result = res[0];
        console.log("done editing customer");
      })
      .catch((err) => {
        error = err.sqlMessage;
        done = false;
      });
    connection.end();
    if (!done) return error;
    return result.affectedRows >= 1 ? 1 : 0;
  }

  async function deleteCustomer(customer_id) {
    const connection = await dbControl.getConnection();
    const query = queries.deleteCustomer(customer_id);
  
    let done = true,
      error = -1,
      result;
  
    await connection
      .query(query)
      .then((res) => {
        result = res[0];
        console.log("done deleting customer");
      })
      .catch((err) => {
        error = err.sqlMessage;
        done = false;
      });
    connection.end();
    if (!done) return error;
    return result.affectedRows >= 1 ? 1 : 0;
  }

  module.exports.getAllCustomers = getAllCustomers;
  module.exports.getCustomer = getCustomer;
  module.exports.addCustomer = addCustomer;
  module.exports.editCustomer = editCustomer;
  module.exports.deleteCustomer = deleteCustomer;
