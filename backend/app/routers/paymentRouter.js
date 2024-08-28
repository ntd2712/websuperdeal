const express = require("express");
var route = express.Router();
route.use(express.json());
const paymentController=require("../controllers/paymentController");

route.post("/pay",paymentController.pay);
route.get("/success",paymentController.success);
route.get("/cancel",paymentController.cancel);
module.exports=route;