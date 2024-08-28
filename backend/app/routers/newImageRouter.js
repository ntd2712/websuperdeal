const express = require("express");
const newImageController=require("../controllers/newImageController");
const multer = require("multer");
const fsExtra = require("fs-extra");
const path=require("path");
const storage=multer.diskStorage({
    destination:"./uploads/newimage",
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage });

var route = express.Router();
route.use(express.json());

route.get("/admin/newimage/getall",newImageController.get_all);
route.get("/admin/newimage/getid/:newID",newImageController.get_id);
route.post("/admin/newimage/add",upload.single('newImageUrl'),newImageController.add);
route.put("/admin/newimage/update", upload.single('newImageUrl'), newImageController.update);
route.delete("/admin/newimage/delete/:newID",newImageController.remove);

module.exports = route;