const db=require('../connect/connectDB');
const New=function(news){
    this.newID=news.newID;
    this.voucherID=news.voucherID;
    this.title=news.title;
    this.datePost=news.datePost;
    this.content=news.content;
}
New.create=function(data, result){
    db.query("INSERT INTO new SET ?",data,function(err,news){
        if(err){
            result(err);
        }else{
            result({id: news.insertId, ...data});
        }
    });
};
// New.create = function(data, result) {
//     db.query("INSERT INTO `new`(`newID`, `voucherID`, `newImageUrl`, `title`, `datePost`, `content`) VALUES(?,?,?,?,?,?)", [
//         data.newID,
//         data.voucherID,
//         data.newImageUrl,
//         data.title,
//         data.datePost,
//         data.content
//     ],
//     function(err, news) {
//       if (err) {
//         result(err);
//       } else {
//         result({ id: news.insertId, ...data });
//       }
//     });
//   };
New.getAll=function(result){
    db.query("SELECT*From new",function(err,news){
        if(err){
            result(null);
        }
        else {
            result(news);
        }
    });
};
New.getById=function(voucherID,result){
    db.query("SELECT*FROM new join voucher on voucher.voucherID=new.voucherID WHERE voucher.voucherID=?",voucherID,function(err,news){
        if(err){
            result(err);
        }else{
            result(news);
        }
    });
};
New.getByIdNewKH=function(voucherID,result){
    db.query("SELECT*FROM new join voucher on voucher.voucherID=new.voucherID WHERE voucher.voucherID=? ORDER BY datePost DESC",voucherID,function(err,news){
        if(err){
            result(err);
        }else{
            result(news[0]);
        }
    });
};
New.getByIdDetails=function(newID,result){
    db.query("SELECT*FROM new join new_image on new.newID=new_image.newID WHERE new_image.newID=?",newID,function(err,news){
        if(err){
            result(err);
        }else{
            result(news);
        }
    });
};
New.delete=function(id, result){
    db.query("DELETE FROM new WHERE voucherID=?",id,function(err,news){
        if(err){
            result(null);
        }else{
            result("Xóa dữ liệu logo có id "+id+" thành công!!!")
        }
    });
};
New.update = function(data, result) {
    db.query("UPDATE new SET newImageUrl=?,title=?,datePost=?,content=? WHERE newID=?", [
        data.newImageUrl,
        data.title,
        data.datePost,
        data.content,
        data.newID
        ], function(err, news) {
      if (err) {
        result(null);
      } else {
        result(data);
      }
    });
  };
module.exports=New