const providers = require("./providers");

async function getFolders() {
  const folders = providers.GoogleCloud.getFolders();
  return folders;
}

async function getFolder() {}

module.exports = {
  getFolders,
  getFolder,
};
