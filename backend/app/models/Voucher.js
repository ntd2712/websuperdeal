const db=require('../connect/connectDB');
const Voucher=function(voucher){
    this.voucherID=voucher.voucherID;
    this.userID=voucher.userID;
    this.voucherCategoryID=voucher.voucherCategoryID;
    this.nameVoucher=voucher.nameVoucher;
    this.price=voucher.price;
    this.percent=voucher.percent;
    this.promotionalPrice=voucher.promotionalPrice;
    this.quantity=voucher.quantity;
    this.rating=voucher.rating;
    this.description=voucher.description;
    this.startDate=voucher.startDate;
    this.endDate=voucher.endDate;
    this.statusvoucher=voucher.statusvoucher;
   
}
Voucher.getAll=function(result){
    db.query("SELECT*From voucher join user on voucher.userID=user.userID join voucher_category on voucher.voucherCategoryID=voucher_category.voucherCategoryID",function(err,voucher){
        if(err){
            result(err);
        }
        else {
            result(voucher);
        }
    });
};
Voucher.getAllLimit8=function(result){
    db.query("SELECT*From voucher join user on voucher.userID=user.userID join voucher_category on voucher.voucherCategoryID=voucher_category.voucherCategoryID limit 8",function(err,voucher){
        if(err){
            result(err);
        }
        else {
            result(voucher);
        }
    });
};
Voucher.create=function(data, result){
    db.query("INSERT INTO voucher SET ?",data,function(err,voucher){
        if(err){
            result(err);
        }else{
            result({id: voucher.insertId, ...data});
        }
    });
};
Voucher.getById=function(voucherID,result){
    db.query("SELECT * FROM voucher join user on voucher.userID=user.userID join voucher_category on voucher.voucherCategoryID=voucher_category.voucherCategoryID WHERE user.userID=?",voucherID,function(err,voucher){
        if(err){
            result(err);
        }else{
            result(voucher);
        }
    })
}
Voucher.getByIdDetails=function(voucherID,result){
    db.query("SELECT * FROM `voucher` JOIN voucher_image on voucher.voucherID=voucher_image.voucherID JOIN voucher_category on voucher.voucherCategoryID=voucher_category.voucherCategoryID WHERE voucher_image.voucherID=?",voucherID,function(err,voucher){
        if(err){
            result(null);
        }else{
            result(voucher);
        }
    })
}
Voucher.getByIdVoucherDetails=function(voucherID,result){
    db.query("SELECT * FROM `voucher` JOIN voucher_image on voucher.voucherID=voucher_image.voucherID JOIN voucher_category on voucher.voucherCategoryID=voucher_category.voucherCategoryID WHERE voucher_image.voucherID=?",voucherID,function(err,voucher){
        if(err){
            result(null);
        }else{
            result(voucher[0]);
        }
    })
}
Voucher.delete=function(id, result){
    db.query("DELETE FROM voucher join user on user.userID=voucher.userID join voucher_category on voucher_category.voucherCategoryID=voucher.voucherCategoryID WHERE voucher.voucherID=?",id,function(err,voucher){
        if(err){
            result(err);
        }else{
            result("Xóa dữ liệu logo có id "+id+" thành công!!!")
        }
    });
};

Voucher.timTheoTen = function(nameVoucher, result) {
    db.query("SELECT * FROM `voucher` JOIN voucher_category on voucher.voucherCategoryID=voucher_category.voucherCategoryID WHERE voucher.nameVoucher LIKE ?", `%${nameVoucher}%`, function(err, voucher) {
      if (err) {
        result(err);
      } else {
        result(voucher);
      }
    })
  }
Voucher.updateVoucher=function(data,result){
    db.query("UPDATE voucher SET nameVoucher=?,price=?,percent=?,promotionalPrice=?,quantity=?,description=?,startDate=?,endDate=? WHERE voucherID=?",[
        data.nameVoucher,
        data.price,
        data.percent,
        data.promotionalPrice,
        data.quantity,
        data.description,
        data.startDate,
        data.endDate,
        data.voucherID
    ],function(err,voucher){
        if(err){
            result(err);
        }else{
            result(data);
        }
    })
}
Voucher.updateStatusVoucher=function(data,result){
    db.query("UPDATE voucher SET statusvoucher=? WHERE voucherID=?",[data.statusvoucher,data.voucherID],function(err,user){
        if(err){
          result(err);
        }else{
          result(data);
        }
      })
}
Voucher.getAllVoucherTheoDanhmuc=function(voucherCategory,result){
    db.query("SELECT * FROM voucher join voucher_category on voucher.voucherCategoryID=voucher_category.voucherCategoryID where voucher_category.nameVoucherCategory=?",voucherCategory,function(err,voucher){
        if(err){
            result(err);
        }else{
            result(voucher);
        }
    })
}
module.exports=Voucher;