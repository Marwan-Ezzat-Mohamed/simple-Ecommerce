const queries = require("./sqlStatments");
const dbControl = require("./dbControl");

async function getAllImages() {
  const connection = await dbControl.getConnection();
  const query = queries.getAllImages();

  console.log(query);

  let done = true,
    error = -1,
    images;

  await connection
    .query(query)
    .then((res) => {
      images = res[0];
      console.log("done getting all images");
    })
    .catch((err) => {
      error = err.sqlMessage;
      done = false;
    });
  connection.end();
  if (!done) return error;
  console.log(images);
  return images;
}

async function getProductImages(sku) {
  const connection = await dbControl.getConnection();
  const query = queries.getProductImages(sku);
  let done = true,
    error = -1,
    images;

  await connection
    .query(query)
    .then((res) => {
      images = res[0];
      console.log("done getting all images");
    })
    .catch((err) => {
      error = err.sqlMessage;
      done = false;
    });
  connection.end();

  if (!done || images.length === 0) return error;

  return images;
}

async function addImageToProduct(image, sku) {
  const connection = await dbControl.getConnection();
  const query = queries.addImageToProduct(image, sku);

  let done = true;
  let error = -1,
    result;
  await connection
    .query(query)
    .then((res) => {
      result = res[0];
      console.log("done inserting image");
    })
    .catch((err) => {
      error = err.sqlMessage;
      done = false;
    });
  connection.end();

  if (!done) return error;
  return result;
}

async function editImage(id, imageUrl) {
  const connection = await dbControl.getConnection();
  const query = queries.editImage(id, imageUrl);

  let done = true,
    error = -1,
    result;

  await connection
    .query(query)
    .then((res) => {
      result = res[0];

      console.log("done editing image with id " + id);
    })
    .catch((err) => {
      error = err.sqlMessage;
      done = false;
    });
  connection.end();
  if (!done) return error;

   return result;
}

async function deleteImage(id) {
  const connection = await dbControl.getConnection();
  const query = queries.deleteImage(id);

  let done = true,
    error = -1,result;

  await connection
    .query(query)
    .then((res) => {
        result=res[0];
      console.log("done deleting image with id " + id);
    })
    .catch((err) => {
      error = err.sqlMessage;
      done = false;
    });
  connection.end();
  if (!done) return error;

  console.log(result);
  return result;
}

module.exports.getAllImages = getAllImages;
module.exports.getProductImages = getProductImages;
module.exports.addImageToProduct = addImageToProduct;
module.exports.editImage = editImage;
module.exports.deleteImage = deleteImage;
