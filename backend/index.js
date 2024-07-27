const express=require("express");
const cors=require("cors");
const cookieParser=require("cookie-parser");
const userRouter=require("./app/routers/userRouter");

//const authRouter=require("./app/routers/auth");
const roleRouter=require("./app/routers/roleRouter");
const companyRouter=require("./app/routers/companyRouter");
const voucherCategoryRouter=require("./app/routers/voucherCategoryRouter");
const sliderRouter=require("./app/routers/sliderRouter");
const logoRouter=require("./app/routers/logoRouter");
const voucherImageRouter=require("./app/routers/voucherImageRouter");
const newRouter=require("./app/routers/newRouter");
const voucherRouter=require("./app/routers/voucherRouter");
const newImageRouter=require("./app/routers/newImageRouter");
const itemCartRouter=require("./app/routers/itemCartRouter");
const cartRouter=require("./app/routers/cartRouter");
const orderRouter=require("./app/routers/orderRouter");
require("dotenv").config();
// const multer = require('multer');
// const fsExtra=require('fs-extra');
// //set storage
// var storage=multer.diskStorage({
//     destination:function(req,file,cb){
//         let path='uploads';
//         if(!fsExtra.existsSync(path)){
//             fsExtra.mkdirpSync(path);
//         }
//         cb(null,path);
//     },
//     filename:function(req,file,cb){
//         cb(null, Date.now() + '-' + file.originalname)
//     }
// });
// var upload=multer({storage:storage});
const app=express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
//cấu hình body-parser
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './app/uploads/'); // Thư mục lưu trữ hình ảnh
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.random().toString(36).substr(2, 9);
//       cb(null, file.originalname + uniqueSuffix); // Tên tệp mới
//     }
//   });
//   const upload = multer({ storage: storage });
//   app.post('/upload', upload.single('avatar'), (req, res) => {
//     if (req.file) {
//       res.json({ message: 'File uploaded successfully!', filename: req.file.filename });
//     } else {
//       res.status(400).json({ message: 'No file uploaded!' });
//     }
//   });
//routers
app.use("/",roleRouter);
app.use("/",userRouter);
app.use("/",companyRouter);
app.use("/",voucherCategoryRouter);
app.use("/",sliderRouter);
app.use("/",logoRouter);
app.use("/",voucherImageRouter);
app.use("/",newRouter);
app.use("/",voucherRouter);
app.use("/",newImageRouter);
app.use("/",itemCartRouter);
app.use("/",cartRouter);
app.use("/",orderRouter)
//app.use("/xdhotdeal/user",userRouter);
app.listen(3000,()=>{
    console.log("sever is running");
});