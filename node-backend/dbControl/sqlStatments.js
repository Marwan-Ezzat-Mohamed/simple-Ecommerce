const SQL = require("sql-template-strings");

//products
insertProduct = (product) => {
  if (product.description)
    return SQL`INSERT INTO products VALUES (${product.sku},${product.description},${product.stock},${product.name},${product.price})`;

  return SQL`INSERT INTO products (sku,stock,name,price) VALUES (${product.sku},${product.stock},${product.name},${product.price})`;
};

getAllProducts = () => {
  return SQL`select * from products`;
};

getProduct = (sku) => {
  return SQL`select * from products where sku =${sku}`;
};

editProduct = (product) => {
  if (product.description)
    return SQL` update products set description=${product.description},stock=${product.stock},name=${product.name},price=${product.price} where sku=${product.sku} ;`;
  return SQL` update products set stock=${product.stock},name=${product.name},price=${product.price} where sku=${product.sku} ;`;
};

deleteProduct = (sku) => {
  return SQL`delete from products where sku=${sku} ;`;
};

//product_images

getAllImages = () => {
  return SQL`select * from products_images`;
};

getProductImages = (sku) => {
  return SQL`select image from products_images where sku=${sku}`;
};

addImageToProduct = (image, sku) => {
  return SQL`insert ignore into products_images (sku,image)values(${sku},${image.image}) `;
};

editImage = (id, imageUrl) => {
  return SQL`update products_images set image=${imageUrl} where id=${id} ;`;
};

deleteImage = (id) => {
  return SQL`delete from products_images where id=${id} ;`;
};

// customers

getAllCustomers = () => {
  return SQL`SELECT * from customers;`;
};

getCustomer = (customer_id) => {
  return SQL`SELECT * from customers where id = ${customer_id};`;
};

addCustomer = (email, password, address, phone) => {
  return SQL`insert into customers (email, password, address, phone) values(${email}, ${password}, ${address}, ${phone});`;
};

editCustomer = (email, password, address, phone, customer_id) => {
  return SQL`update customers set email = ${email}, password = ${password}, address = ${address}, phone = ${phone}) where id = ${customer_id};`;
};

deleteCustomer = (customer_id) => {
  return SQL`delete from customers WHERE id = ${customer_id}`;
};

// cart

getCustomerCart = (id) => {
  return SQL`SELECT product_sku,quantity from cart where customer_id= ${id} ;`;
};

addItemToCart = (customer_id, item) => {
  return SQL`insert into cart (product_sku,quantity,customer_id) values(${item.sku},${item.quantity},${customer_id}) ;`;
};

editItemQuantityInCart = (customer_id, item) => {
  console.log(customer_id);
  console.log(item);
  return SQL`UPDATE cart SET quantity=${item.quantity} WHERE customer_id = ${customer_id} and product_sku=${item.sku}`;
};
resetCart = (customer_id) => {
  return SQL`delete from cart WHERE customer_id = ${customer_id}`;
};
deleteItemInCart = (customer_id, itemSku) => {
  return SQL`delete from cart WHERE customer_id = ${customer_id} and product_sku=${itemSku}`;
};

//products
module.exports.getAllProducts = getAllProducts;
module.exports.insertProduct = insertProduct;
module.exports.getProduct = getProduct;
module.exports.editProduct = editProduct;
module.exports.deleteProduct = deleteProduct;

//product_images
module.exports.getAllImages = getAllImages;
module.exports.getProductImages = getProductImages;
module.exports.addImageToProduct = addImageToProduct;
module.exports.editImage = editImage;
module.exports.deleteImage = deleteImage;

//customers
module.exports.getAllCustomers = getAllCustomers;
module.exports.getCustomer = getCustomer;
module.exports.addCustomer = addCustomer;
module.exports.editCustomer = editCustomer;
module.exports.deleteCustomer = deleteCustomer;

//cart
module.exports.getCustomerCart = getCustomerCart;
module.exports.addItemToCart = addItemToCart;
module.exports.editItemQuantityInCart = editItemQuantityInCart;
module.exports.resetCart = resetCart;
module.exports.deleteItemInCart = deleteItemInCart;
