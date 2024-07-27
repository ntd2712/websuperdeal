const db=require('../connect/connectDB');
const Slider=function(slider){
    this.sliderID=slider.sliderID;
    this.companyID=slider.companyID;
    this.sliderImageUrl=slider.sliderImageUrl;
}
Slider.create=function(data, result){
    db.query("INSERT INTO slider SET ?",data,function(err,slider){
        if(err){
            result(err);
        }else{
            result({id: slider.insertId, ...data});
        }
    });
};
Slider.getAll=function(result){
    db.query("SELECT*From slider",function(err,slider){
        if(err){
            result(err);
        }
        else {
            result(slider);
        }
    });
};
Slider.getById=function(sliderID,result){
    db.query("SELECT*FROM slider join company on slider.companyID=company.companyID WHERE companyID=?",sliderID,function(err,slider){
        if(err){
            result(null);
        }else{
            result(slider[0]);
        }
    });
};
Slider.delete=function(id, result){
    db.query("DELETE FROM slider WHERE sliderID=?",id,function(err,slider){
        if(err){
            result(null);
        }else{
            result("Xóa dữ liệu role có id "+id+" thành công!!!")
        }
    });
};
Slider.update = function(data, result) {
    db.query("UPDATE slider SET sliderImageUrl=? WHERE sliderID=?", [data.sliderImageUrl, data.sliderID], function(err, slider) {
      if (err) {
        result(null);
      } else {
        result(data);
      }
    });
  };
module.exports=Slider