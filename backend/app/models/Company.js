const db=require('../connect/connectDB');
const Company=function(company){
    this.companyID=company.companyID;
    this.userID=company.userID;
    this.companyName=company.companyName;
    this.companyAddress=company.companyAddress;
};
Company.getAll=function(result){
    db.query("SELECT*From company join user on company.userID=user.userID",function(err,company){
        if(err){
            result(err);
        }
        else {
            result(company);
        }
    });
};
Company.create=function(data,result){
    db.query("INSERT INTO company SET ?",data,function(err,company){
        if(err){
            result(null);
        }else{
            result({id: company.insertId, ...data});
        }
    });
}
Company.getById=function(companyID,result){
    db.query("SELECT companyName FROM company join user on company.userID=user.userID WHERE companyID=?",companyID,function(err,company){
        if(err){
            result(null);
        }else{
            result(company[0]);
        }
    });
};
Company.getByCompanyForUser=function(userID,result){
    db.query("SELECT * FROM company join user on company.userID=user.userID WHERE user.userID=?",userID,function(err,company){
        if(err){
            result(err);
        }else{
            result(company[0]);
        }
    });
};
Company.updateCompany=function(data,result){
    db.query("UPDATE company SET companyName=?,companyAddress=? WHERE userID=?",[
        data.companyName,
        data.companyAddress,
        data.userID
    ], function(err,company){
        if(err){
            result(err);
        }else{
            result(data);
        }
    })
}
module.exports=Company;