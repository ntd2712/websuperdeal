const express = require("express");
var route = express.Router();
route.use(express.json());
const itemCartController=require("../controllers/itemCartController");

route.get("/itemvoucher/id/:cartID",itemCartController.get_id);
route.post("/itemvoucher/add",itemCartController.add);
module.exports=route;