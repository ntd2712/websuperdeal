const express = require("express");
var route = express.Router();
route.use(express.json());
const companyController = require("../controllers/companyController");

route.get("/company/all",companyController.get_all);
route.post("/company/add",companyController.add);
route.get("/company/id/:companyID",companyController.get_id);
module.exports=route;