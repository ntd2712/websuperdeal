const db=require('../connect/connectDB');
const Role=function(role){
    this.roleID=role.roleID;
    this.nameRole=role.nameRole;
}
Role.getAll=function(result){
    db.query("SELECT*From role",function(err,role){
        if(err){
            result(err);
        }
        else {
            result(role);
        }
    });
};
Role.getById=function(roleID,result){
    db.query("SELECT*FROM role WHERE roleID=?",roleID,function(err,role){
        if(err){
            result(null);
        }else{
            result(role[0]);
        }
    });
};
Role.create=function(data, result){
    db.query("INSERT INTO role SET ?",data,function(err,role){
        if(err){
            result(null);
        }else{
            result({id: role.insertId, ...data});
        }
    });
};
Role.delete=function(id, result){
    db.query("DELETE FROM role WHERE roleID=?",id,function(err,role){
        if(err){
            result(null);
        }else{
            result("Xóa dữ liệu role có id "+id+" thành công!!!")
        }
    });
};
Role.update=function(data,result){
    db.query("UPDATE role SET nameRole=? WHERE roleID=?",[data.nameRole,data.roleID],function(err,role){
        if(err){
            result(null);
        }else{
            result(data);
        }
    })
}
module.exports=Role;