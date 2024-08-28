const express = require("express");
const voucherController=require("../controllers/voucherController");
// const multer = require("multer");
// const fsExtra = require("fs-extra");
// const path=require("path");
// const storage=multer.diskStorage({
//     destination:"./uploads/voucher",
//     filename:(req,file,cb)=>{
//         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })

// const upload = multer({storage:storage });

var route = express.Router();
route.use(express.json());

route.get("/admin/voucher/getall",voucherController.get_all);
route.get("/admin/voucher/getall8",voucherController.get_all8);
route.post("/admin/voucher/add",voucherController.add);
route.get("/admin/voucher/getid/:userID",voucherController.get_id);
route.get("/admin/voucher/getiddetails/:voucherID",voucherController.get_id_details);
route.get("/admin/voucher/getidvoucherdetails/:voucherID",voucherController.get_id_voucher_details);
route.delete("/admin/voucher/delete/:voucherID",voucherController.remove);
route.get("/user/voucher/searchName/:nameVoucher",voucherController.timTheoTenVoucher);
route.get("/user/voucher/getallvouchertheodanhmuc/:nameVoucherCategory",voucherController.getAllVoucherTheoDanhmuc);
route.put("/user/voucher/updateStatusVoucher",voucherController.updateStatusVoucher);
route.put("/user/voucher/updateVoucher",voucherController.updateVoucher);
module.exports=route;