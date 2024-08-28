const db=require('../connect/connectDB');
const VoucherImage=function(voucherimage){
    this.voucherImageID=voucherimage.voucherImageID;
    this.voucherID=voucherimage.voucherID;
    this.voucherImageUrl=voucherimage.voucherImageUrl;
}
VoucherImage.create=function(data, result){
    db.query("INSERT INTO voucher_image SET ?",data,function(err,voucherimage){
        if(err){
            result(null);
        }else{
            result({id: voucherimage.insertId, ...data});
        }
    });
};
VoucherImage.getAll=function(result){
    db.query("SELECT*From voucher_image",function(err,voucherimage){
        if(err){
            result(err);
        }
        else {
            result(voucherimage);
        }
    });
};
VoucherImage.getById=function(voucherID,result){
    db.query("SELECT*FROM voucher_image  WHERE voucherID=?",voucherID,function(err,voucherimage){
        if(err){
            result(err);
        }else{
            result(voucherimage[0]);
        }
    });
};
VoucherImage.getAllById=function(voucherID,result){
    db.query("SELECT*FROM voucher_image  WHERE voucherID=?",voucherID,function(err,voucherimage){
        if(err){
            result(err);
        }else{
            result(voucherimage);
        }
    });
};
VoucherImage.delete=function(id, result){
    db.query("DELETE FROM voucher_image WHERE voucherID=?",id,function(err,voucherimage){
        if(err){
            result(null);
        }else{
            result("Xóa dữ liệu hinh voucher có id "+id+" thành công!!!")
        }
    });
};
VoucherImage.update = function(data, result) {
    db.query("UPDATE voucher_image SET voucherImageUrl=? WHERE voucherImageID=?", [data.voucherImageUrl, data.voucherImageID], function(err, voucherimage) {
      if (err) {
        result(null);
      } else {
        result(data);
      }
    });
  };
module.exports=VoucherImage