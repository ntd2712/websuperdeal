const express = require("express");
const logoController=require("../controllers/logoControntroller");
const multer = require("multer");
const fsExtra = require("fs-extra");
const path=require("path");
const storage=multer.diskStorage({
    destination:"./uploads/logo",
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage });

var route = express.Router();
route.use(express.json());

route.get("/admin/logo/getall",logoController.get_all);
route.get("/admin/logo/getid/:companyName",logoController.get_id);
route.post("/admin/logo/add",upload.single('logoImageUrl'),logoController.add);
route.put("/admin/logo/update", upload.single('logoImageUrl'), logoController.update);
route.delete("/admin/logo/delete/:logoID",logoController.remove);

module.exports = route;