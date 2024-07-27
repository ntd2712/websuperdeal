const express = require("express");
const newController=require("../controllers/newController");
// const multer = require("multer");
// const fsExtra = require("fs-extra");
// const path=require("path");
// const storage=multer.diskStorage({
//     destination:"./uploads/new",
//     filename:(req,file,cb)=>{
//         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })

// const upload = multer({storage:storage });

var route = express.Router();
route.use(express.json());

route.get("/admin/new/getall",newController.get_all);
route.get("/admin/new/getid/:voucherID",newController.get_id);
route.get("/admin/new/getiddetail/:newID",newController.get_id_details);
route.post("/admin/new/add",newController.add);
route.put("/admin/new/update",newController.update);
route.delete("/admin/new/delete/:newID",newController.remove);

module.exports = route;