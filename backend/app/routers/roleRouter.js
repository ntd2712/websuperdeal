const express = require("express");
const roleController = require("../controllers/roleController");
var route = express.Router();
route.use(express.json());

route.get("/role/all", roleController.get_all);
route.get("/role/id/:roleID", roleController.get_id);
route.post("/role/add", roleController.add);
route.delete("/role/delete/:id", roleController.remove);
route.put("/role/update", roleController.update);
module.exports = route;
