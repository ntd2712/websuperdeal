const express = require("express");
var route = express.Router();
route.use(express.json());
const orderController = require("../controllers/orderController");
route.post("/order/add",orderController.add);
route.get("/order/id/:userID",orderController.get_id);
route.delete("/order/huydon/:orderID",orderController.remove);
route.get("/order/getalluserbought/:roleID",orderController.getalluserbought);
module.exports=route;