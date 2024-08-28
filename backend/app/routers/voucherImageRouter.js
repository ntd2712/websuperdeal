const express = require("express");
const voucherImageController=require("../controllers/voucherImageController");
const multer = require("multer");
const fsExtra = require("fs-extra");
const path=require("path");
const storage=multer.diskStorage({
    destination:"./uploads/voucherimage",
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage });

var route = express.Router();
route.use(express.json());

route.get("/admin/voucherimage/getall",voucherImageController.get_all);
route.get("/admin/voucherimage/getid/:voucherID",voucherImageController.get_id);
route.get("/admin/voucherimage/getallid/:voucherID",voucherImageController.get_all_id);
route.post("/admin/voucherimage/add",upload.single('voucherImageUrl'),voucherImageController.add);
route.put("/admin/voucherimage/update", upload.single('voucherImageUrl'), voucherImageController.update);
route.delete("/admin/voucherimage/delete/:voucherID",voucherImageController.remove);

module.exports = route;