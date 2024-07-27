const express = require("express");
const sliderController=require("../controllers/sliderController");
const multer = require("multer");
const fsExtra = require("fs-extra");
const path=require("path");
const storage=multer.diskStorage({
    destination:"./uploads/slider",
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage });

var route = express.Router();
route.use(express.json());

route.get("/admin/slider/getall",sliderController.get_all);
route.get("/admin/slider/getid/:sliderID",sliderController.get_id);
route.post("/admin/slider/add",upload.single('sliderImageUrl'),sliderController.add);
route.put("/admin/slider/update", upload.single('sliderImageUrl'), sliderController.update);
route.delete("/admin/slider/delete/:sliderID",sliderController.remove);

module.exports = route;