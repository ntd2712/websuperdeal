const express = require("express");
var route = express.Router();
route.use(express.json());
const companyController = require("../controllers/companyController");

route.get("/company/all",companyController.get_all);
route.post("/company/add",companyController.add);
route.get("/company/id/:companyID",companyController.get_id);
route.get("/company/iduser/:userID",companyController.get_idcompany_user);
route.put("/company/update",companyController.updateCompany);
module.exports=route;