const express = require("express");
var route = express.Router();
route.use(express.json());
const orderController = require("../controllers/orderController");
route.post("/order/add",orderController.add);
route.get("/order/id/:userID",orderController.get_id);
module.exports=route;