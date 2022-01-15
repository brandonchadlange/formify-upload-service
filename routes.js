const express = require("express");
const router = express.Router();
const Controller = require("./controller");

router.get("/folder", Controller.getFolders);
router.get("/folder/:folder", Controller.getFolder);

module.exports = router;
