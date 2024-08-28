const db=require("../connect/connectDB");
const voucherCategory=function(voucherCategory){
    this.voucherCategoryID=voucherCategory.voucherCategoryID;
    this.nameVoucherCategory=voucherCategory.nameVoucherCategory;
}
voucherCategory.getAll=function(result){
    db.query("SELECT*From voucher_category",function(err,category){
        if(err){
            result(err);
        }
        else {
            result(category);
        }
    });
};
voucherCategory.getById=function(data,result){
    db.query("SELECT*FROM voucher_category WHERE voucherCategoryID=?",data,function(err,voucherCategory){
        if(err||voucherCategory.length==0){
            result(null);
        }else{
            result(voucherCategory[0]);
        }
    })
};
voucherCategory.create=function(data,result){
    db.query("INSERT INTO voucher_category SET ?",data, function(err,voucherCategory){
        if(err){
            result(null);
        }else{
            result({id: voucherCategory.inserId, ...data});
        }
    });
};
voucherCategory.update=function(data,result){
    db.query("UPDATE voucher_category SET nameVoucherCategory=? WHERE voucherCategoryID=?",
        [data.nameVoucherCategory, data.voucherCategoryID], function(err,voucherCategory){
            if(err){
                result(null);
            }else{
                result(data);
            }
        }
    )
};
voucherCategory.delete=function(id,result){
    db.query("DELETE FROM voucher_category WHERE voucherCategoryID=?",id,function(err){
        if(err){
            result(err);
        }else{
            result("Xóa dữ liệu thành công");
        }
    })
};
module.exports=voucherCategory;