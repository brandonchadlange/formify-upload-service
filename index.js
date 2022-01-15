const GoogleCloud = require("./providers/google-cloud");

const providers = {
  GoogleCloud: new GoogleCloud(),
};

try {
  providers.GoogleCloud.getFolders();
} catch (err) {
  console.log(err);
}
