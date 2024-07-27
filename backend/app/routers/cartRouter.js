const express = require("express");
var route = express.Router();
route.use(express.json());
const cartController = require("../controllers/cartController");
// const axios = require('axios').default;
// const CryptoJS = require('crypto-js'); 
// const moment = require('moment'); 
// const config = {
//     app_id: "2554",
//     key1: "sdngKKJmqEMzvh5QQcdD2A9XBSKUNaYn",
//     key2: "trMrHtvjo6myautxDUiAcYsVtaeQ8nhf",
//     endpoint: "https://sb-openapi.zalopay.vn/v2/create"
// };
route.post("/cart/add",cartController.add);
route.get("/cart/id/:userID",cartController.get_id);
route.get("/cart/all/id/:cartID",cartController.getAllItemCart);
// route.post("/payment", async(req,res)=>{
    
// })
module.exports=route;