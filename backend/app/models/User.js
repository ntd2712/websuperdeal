const db=require("../connect/connectDB");
const user=function(user){
    this.userID=user.userID;
    this.phone=user.phone;
    this.password=user.password;
    this.email=user.email;
    this.name=user.name;
    this.birthday=user.birthday;
    this.address=user.address;
    this.gender=user.gender;
    this.rewardPoint=user.rewardPoint;
    this.memberName=user.memberName;
    this.status=user.status;
    this.roleID=user.roleID;
    this.companyID=user.companyID;
}
user.getByPhone = function(data, result) {
    db.query("SELECT * FROM user join cart on user.userID=cart.userID WHERE phone = ? AND password = ?", [data.phone, data.password], function(err, rows) {
      if (err || rows.length == 0) {
        result(null);
      } else {
        result(rows[0]);
      }
    });
  };
  user.getByPhoneAdmin = function(data, result) {
    db.query("SELECT * FROM user WHERE phone = ? AND password = ?", [data.phone, data.password], function(err, rows) {
      if (err || rows.length == 0) {
        result(null);
      } else {
        result(rows[0]);
      }
    });
  };
user.searchPhone=function(data,result){
  db.query("SELECT * FROM user WHERE phone = ?", data, function(err, rows) {
    if (err || rows.length == 0) {
      result(null);
    } else {
      result(rows);
    }
  });
}
user.getAll=function(result){
    db.query("SELECT * From `user` join company on user.companyID=company.companyID join role on role.roleID=user.roleID",function(err,user){
        if(err){
            result(err);
        }
        else {
            result(user);
        }
    });
};
user.getAllUser=function(result){
  db.query("SELECT * From `user` JOIN role ON user.roleID=role.roleID",function(err,user){
      if(err){
          result(err);
      }
      else {
          result(user);
      }
  });
};
user.create=function(data,result){
  db.query("INSERT INTO user SET ?",data,function(err,user){
    if(err){
      console.log(err);
        result(null);
    }else{
        result({id: user.insertId, ...data});
    }
});
};
user.addAdKH=function(data,result){
  db.query("INSERT INTO `user`(`phone`, `password`, `email`, `name`, `birthday`, `address`, `gender`, `rewardPoint`, `memberName`, `status`, `roleID`,`companyID`) VALUES (?,?,?,?,?,?,?,?,?,?,?,NULL)",
    [
    data.phone,
    data.password,
    data.email,
    data.name,
    data.birthday,
    data.address,
    data.gender,
    data.rewardPoint,
    data.memberName,
    data.status,
    data.roleID,
    data.companyID
    ],function(err,user){
      if(err){
        result(err);
      }else{
        result({id: user.insertId, ...data});
      }
    }
  )
}
user.update=function(data,result){
  console.log(data);
  db.query("UPDATE user SET phone=?,password=?,email=?,name=?,birthday=?,roleID=?,status=?,companyID=? WHERE userID=?",[
    data.phone,
    data.password,
    data.email,
    data.name,
    data.birthday,
    data.roleID,
    data.status,
    data.companyID,
    data.userID
  ],function(err,user){
    console.log(err);
      if(err){
          result(null);
      }else{
          result(data);
      }
  })
}
user.updateToCompany=function(data,result){
  db.query("UPDATE user SET roleID=?,companyID=? WHERE userID=?",[
    data.roleID,
    data.companyID,
    data.userID
  ],function(err,user){
      if(err){
          result(null);
      }else{
          result(data);
      }
  })
}
user.updateDN = function(data, result) {
  db.query("UPDATE user SET name=?, address=? WHERE userID=?",[ 
    data.name, 
    data.address, 
    data.userID 
  ], function(err, user) {
    if (err) {
      result(err);
    } else{
      result(data);
    }
  });
}
user.updateUStatus=function(data,result){
  db.query("UPDATE user SET status=? WHERE userID=?",[data.status,data.userID],function(err,user){
    if(err){
      result(null);
    }else{
      result(data);
    }
  })
}
user.getByIdDN = function(data, result) {
  db.query("SELECT * FROM `user` JOIN role ON user.roleID=role.roleID JOIN company ON user.companyID=company.companyID WHERE user.userID=?", data, function(err, rows) {
    if (err || rows.length == 0) {
      result(null);
    } else {
      result(rows);
    }
  });
};
user.getByIdKH = function(data, result) {
  db.query("SELECT * FROM `user` JOIN role ON user.roleID=role.roleID WHERE user.userID=?", data, function(err, rows) {
    if (err || rows.length == 0) {
      result(null);
    } else {
      result(rows);
    }
  });
};
user.getByIdRole = function(data, result) {
  db.query("SELECT * FROM `user` JOIN role ON user.roleID=role.roleID WHERE user.userID=?", data, function(err, rows) {
    if (err || rows.length == 0) {
      result(null);
    } else {
      result(rows[0]);
    }
  });
};

// user.create=function (data,result) {
//     db.query(
//         "INSERT INTO `user` (`userID`, `email`, `password`, `name`, `phone`, `birthday`, `address`, `gender`, `role`, `rewardPoint`, `memberName`, `status`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
//         [
//             data.email,
//             data.password,
//             data.name,
//             data.phone,
//             data.birthday,
//             data.address,
//             data.gender,
//             data.role,
//             data.rewardPoint,
//             data.memberName,
//             data.status
//         ],
//         function (err, user) {
//             if (err) {
//                 console.log(err);
//                 result(null);
//             }else{
//                 db.query(
//                     "SELECT * FROM user WHERE userID = ?",
//                     user.insertId,
//                     function (err,user) {
//                         if(err){
//                             result(null);
//                         }else{
//                             result(user[0]);
//                         }
//                     }
//                 );
//             }
//         }
//     );
// };
// user.findByPhone=function(phone, result){
//     db.query(
//         "SELECT * FROM user WHERE phone = ?", phone, function (err,  user) {
//             if (err||user.length==0||user.length>9) {
//                 console.log(err);
//                 result(null);
//             }else{
//                 result(user[0]);
//             }     
//         }
//     );
// };
// user.findByEmail=function(email,result){
//     db.query(
//         "SELECT * FROM user WHERE email = ?", email, function (err, user) {
//             if(err||user.length==0){
//                 console.log(err);
//                 result(null);
//             }else{
//                 result(user[0]);
//             }
//         }
//     )
// };
// user.login=function(email,password,result){
//     db.query(
//         "SELECT*FROM user WHERE email=? AND password=?",[email,password],function(err,user){
//             if(err) throw err;
//             result(user);
//         }

//     );
// };
// user.findByEmail2=function (name, result) {
//     db.query(
//         "SELECT * FROM user WHERE email = ?", name, function(err,user){
//             if (err || user.length == 0) {
//                 console.log(err);
//                 result(null);
//               }else{
//                 if(user[0].role=="admin"){
//                     result(user[0]);
//                   }else{
//                     db.query(
//                         "SELECT userID,email,name,phone,role FROM user WHERE email = ?",
//                         name,
//                         function (err, user) {
//                             if (err || user.length == 0) {
//                               console.log(err);
//                               result(null);
//                             } else {
//                               result(user[0]);
//                             }
//                           } 

//                     )
//                   }
//               }
//         }
//     )
// }
// user.getList=function (result) {
//     db.query(
//         "SELECT * FROM user",
//         function (err, user) {
//             if (err) {
//                 result(null);
//             }else{
//                 result(user);
//             }
//         }
//     );
// };



// const db=require("../connect/connectDB");
// exports.login=(calback,email,password)=>{
//     db.query(
//         "SELECT*FROM user WHERE email=? AND password=?",[email,password],
//         (err,result)=>{
//             if(err) throw err;
//             calback(result);
//         }

//     );
// };
// exports.register=(calback,email,password,name,phone,birthday,address,gender,role,rewardPoint,memberName,status)=>{
//     db.query(
//         "INSERT INTO `user` (`userID`, `email`, `password`, `name`, `phone`, `birthday`, `address`, `gender`, `role`, `rewardPoint`, `memberName`, `status`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
//         [
//             email,password,name,phone,birthday,address,gender,role,rewardPoint,memberName,status
//         ],
//         (err,result)=>{
//             if(err) throw err;
//             calback(result);
//         }
//     );
// };

module.exports=user;