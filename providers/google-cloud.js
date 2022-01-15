const StorageProvider = require("./storage-provider");
const { Storage } = require("@google-cloud/storage");
const storage = new Storage({ keyFilename: "key.json" });

class GoogleCloud extends StorageProvider {
  constructor() {
    super();
  }

  async getFolders() {
    const response = await storage.getBuckets();
    return response;
  }

  async getFolder(name) {
    const response = await storage.bucket(name).get();
    return response;
  }

  async createFolder(name) {
    const response = await storage.createBucket(name);
    return response;
  }
}

module.exports = GoogleCloud;
