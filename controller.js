const Service = require("./service");

async function getFolders(req, res) {
  const folders = await Service.getFolders();
  res.send(folders);
}

async function getFolder(req, res) {
  const folders = await Service.getFolders();
  res.send(folders);
}

module.exports = {
  getFolders,
  getFolder,
};
