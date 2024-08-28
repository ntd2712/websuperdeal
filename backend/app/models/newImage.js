const db=require('../connect/connectDB');
const NewImage=function(newimage){
    this.newImageID=newimage.newImageID;
    this.newID=newimage.newID;
    this.newImageUrl=newimage.newImageUrl;
}
NewImage.create=function(data, result){
    db.query("INSERT INTO new_image SET ?",data,function(err,newimage){
        if(err){
            result(err);
        }else{
            result({id: newimage.insertId, ...data});
        }
    });
};
NewImage.getAll=function(result){
    db.query("SELECT*From new_image",function(err,newimage){
        if(err){
            result(err);
        }
        else {
            result(newimage);
        }
    });
};
NewImage.getById=function(newID,result){
    db.query("SELECT*FROM new_image WHERE newID=?",newID,function(err,news){
        if(err){
            result(err);
        }else{
            result(news);
        }
    });
};
NewImage.delete=function(id, result){
    db.query("DELETE FROM new_image WHERE newID=?",id,function(err,newimage){
        if(err){
            result(null);
        }else{
            result("Xóa dữ liệu hinh voucher có id "+id+" thành công!!!")
        }
    });
};
NewImage.update = function(data, result) {
    db.query("UPDATE new_image SET newImageUrl=? WHERE voucherImageID=?", [data.newImageUrl], function(err, newimage) {
      if (err) {
        result(null);
      } else {
        result(data);
      }
    });
  };
module.exports=NewImage