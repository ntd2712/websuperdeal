const db=require('../connect/connectDB');
const Logo=function(logo){
    this.logoID=logo.logoID;
    this.companyID=logo.companyID;
    this.logoImageUrl=logo.logoImageUrl;
}
Logo.create=function(data, result){
    db.query("INSERT INTO logo SET ?",data,function(err,logo){
        if(err){
            result(err);
        }else{
            result({id: logo.insertId, ...data});
        }
    });
};
Logo.getAll=function(result){
    db.query("SELECT*From logo",function(err,slider){
        if(err){
            result(err);
        }
        else {
            result(slider);
        }
    });
};
Logo.getById=function(logoID,result){
    db.query("SELECT*FROM logo join company on logo.companyID=company.companyID WHERE companyID=?",logoID,function(err,logo){
        if(err){
            result(null);
        }else{
            result(logo[0]);
        }
    });
};
Logo.delete=function(id, result){
    db.query("DELETE FROM logo WHERE logoID=?",id,function(err,logo){
        if(err){
            result(null);
        }else{
            result("Xóa dữ liệu logo có id "+id+" thành công!!!")
        }
    });
};
Logo.update = function(data, result) {
    db.query("UPDATE logo SET logoImageUrl=? WHERE logoID=?", [data.logoImageUrl, data.logoID], function(err, logo) {
      if (err) {
        result(null);
      } else {
        result(data);
      }
    });
  };
module.exports=Logo