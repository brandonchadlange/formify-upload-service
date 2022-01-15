const errors = {
  not_implemented: "Method Not Implemented",
};

class StorageProvider {
  async getFolders() {
    throw errors.not_implemented;
  }
  async getFolder() {
    throw errors.not_implemented;
  }
  async createFolder() {
    throw errors.not_implemented;
  }
}

module.exports = StorageProvider;
