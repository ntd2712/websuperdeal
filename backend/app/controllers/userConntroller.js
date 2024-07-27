const {request}=require("express");
const User=require('../models/User');

exports.login = function(req, res) {
  var data = {
    phone: req.params.phone,
    password: req.params.password
  };

  User.getByPhone(data, function(response) {
    if (response instanceof Error) {
      res.status(500).send({ error: 'Internal server error' });
    } else {
      res.send(response);
    }
  });
};
exports.loginAdmin = function(req, res) {
  var data = {
    phone: req.params.phone,
    password: req.params.password
  };

  User.getByPhoneAdmin(data, function(response) {
    if (response instanceof Error) {
      res.status(500).send({ error: 'Internal server error' });
    } else {
      res.send(response);
    }
  });
};
exports.get_all=function(req,res){
  User.getAll(function(data){
      res.send(data);
  });
};
exports.get_all_user=function(req,res){
  User.getAllUser(function(data){
      res.send(data);
  });
};
exports.addAdKH=function(req,res){
  const data = {
    phone:req.body.phone,
    password:req.body.password,
    email:req.body.email,
    name:req.body.name,
    birthday:req.body.birthday,
    address:req.body.address,
    gender:req.body.gender,
    rewardPoint:req.body.rewardPoint,
    memberName:req.body.memberName,
    status:req.body.status,
    roleID:req.body.roleID,
    companyID:req.params.companyID
  }
  console.log(data);
  User.addAdKH(data, function(response){
    res.send(response);
    console.log(response);
  });
}
exports.add = function(req, res) {
  const data = req.body;
  User.create(data, function(response) {
      if (response) {
          res.status(200).send({ result: response });
      } else {
          res.status(500).send({ error: "Không thể thêm user" });
      }
  });
};
exports.updateCU=function(req,res){
  var data=req.body;
  User.updateToCompany(data, function(response){
      res.send(response);
  });
};
exports.updateRU=function(req,res){
  var data=req.body;
  User.update(data, function(response){
      res.send({result:response});
  });
};
exports.updateUserStatus=function(req,res){
  var data=req.body;
  User.updateUStatus(data,function(response){
    res.send({result:response});
  })
}
exports.getIDDN = function(req, res) {
  var data = req.params.userID;

  User.getByIdDN(data, function(response) {
    if (response instanceof Error) {
      res.status(500).send({ error: 'Internal server error' });
    } else {
      res.send(response);
    }
  });
};
exports.getIDKH = function(req, res) {
  var data = req.params.userID;

  User.getByIdKH(data, function(response) {
    if (response instanceof Error) {
      res.status(500).send({ error: 'Internal server error' });
    } else {
      res.send(response);
    }
  });
};
exports.getIDRole = function(req, res) {
  var data = req.params.userID;

  User.getByIdRole(data, function(response) {
    if (response instanceof Error) {
      res.status(500).send({ error: 'Internal server error' });
    } else {
      res.send(response);
    }
  });
};
exports.searchPhone=function(req,res){
  var data=req.params.phone;
  User.searchPhone(data, function(response) {
    if (response instanceof Error) {
      res.status(500).send({ error: 'Internal server error' });
    } else {
      res.send(response);
    }
  });
  }

// exports.searchUserByName = async (req, res) => {
//   try {
//     const searchTerm = req.query.search;
//     const users = await User.find({
//       name: { $regex: new RegExp(searchTerm, 'i') }
//     });
//     res.json(users);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };






// const {request}=require("express");
// const User=require("../models/User");
// require('dotenv').config();
// const bcrypt=require("bcryptjs");
// const jwt=require("jsonwebtoken");
// let refresh_tks=[];
// const userController={
//     getAllUser: async(req,res)=>{
//         try {
//             User.getList(function (data) {
//                 res.status(200).json(data);
//             });
//         } catch (error) {
//             res.status(500).json(data);
//         }
//     },
//     //access token
//     accessToken:(user)=>{
//         return jwt.sign({
//           userID: user.userID,
//           role: user.role,
//           },process.env.ACCESS_TOKEN,
//           {expiresIn:"365d"}
//           );
//       },
//       //refresh token
//      refreshToken:(user)=>{
//         return jwt.sign({
//           userID: user.userID,
//           role: user.role,
//           },process.env.REFRESH_TOKEN,
//           {expiresIn:"365d"}
//           );
//       },
//       //login
//     loginUser:(req,res)=>{
//         try {
        
//             User.findByEmail(req.body.email, (user, err) => {
//                 if (err) {
//                   console.log(err);
//                   return res.status(500).json("Lỗi server");
//                 }
          
//                 if (!user) {
//                   return res.status(404).json("Sai Email");
//                 }
          
//                 bcrypt.compare(req.body.password, user.password, (err, valiMK) => {
//                   if (err) {
//                     console.error(err);
//                     return res.status(500).json("Lỗi server");
//                   }
          
//                   if (valiMK==false) {
//                     return res.status(404).json("Sai mật khẩu");
//                   }
//                   else{
//                     const access_tk=authController.accessToken(user);
//                     const refresh_tk=authController.refreshToken(user);
//                     refresh_tks.push(refresh_tk);
//                     res.cookie("refresh_tk",refresh_tk,{
//                       httpOnly:true,
//                       secure:false,
//                       path:"/",
//                       sameSite:"strict",
//                     });
//                     User.findByEmail2(req.body.email, (user2, err) => {
//                       return res.status(200).json({user2,access_tk});
//                     });
                   
//                   }
//                   });
                   
//                 });
            
//         } catch (error) {
//            return res.status(500).json((error));
//         }
//     },
//     login:(req,res)=>{
//         try {
//             User.login((result)=>{
//                 res.send(result);
//             },
//             req.query.email,
//             req.query.password,
//         );
//         } catch (error) {
//             return res.status(500).json((error));
//         }
//     },
// }
// module.exports=userController;