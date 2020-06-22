const { app, BrowserWindow } = require("electron");
const { getConnection } = require("./database");

async function createProduct(product) {
  const conn = getConnection();
  product.price = parseFloat(product.price);
  parseFloat(product.price);
  const result = await conn.query("INSERT INTO produto SET ?", product);
  console.log(result);
}

let window;

function createWindow() {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  window.loadFile("src/ui/index.html");
}

module.exports = {
  createWindow,
  createProduct,
};
