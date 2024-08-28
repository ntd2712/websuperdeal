const express = require("express");
var route = express.Router();
route.use(express.json());
const orderDetailsController=require("../controllers/orderDetailsCotroller");
route.get("/user/getall/chitietdonhang/:orderID",orderDetailsController.getAll);
route.post("/user/add/chitietdonhang",orderDetailsController.add);
module.exports=route;