const express = require("express");
const voucherCategoryController=require("../controllers/voucherCategoryController");
var route = express.Router();
route.use(express.json());

route.get("/admin/vouchercategory/getall",voucherCategoryController.get_all);
route.get("/admin/vouchercategory/getid/:voucherCategoryID",voucherCategoryController.get_id);
route.post("/admin/vouchercategory/add",voucherCategoryController.add);
route.put("/admin/vouchercategory/update",voucherCategoryController.update);
route.delete("/admin/vouchercategory/delete/:voucherCategoryID",voucherCategoryController.remove);
module.exports=route;