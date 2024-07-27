const {request}=require("express");
const Slider=require("../models/Slider");
exports.get_all=function(req,res){
    Slider.getAll(function(data){
        res.send(data);
    });
};
exports.get_id=function(req,res){
    Slider.getById(req.params.sliderID,function(response){
        res.send(response);
    });
};

exports.add=function(req,res){
    var data={
        companyID:req.body.companyID,
        sliderImageUrl:req.file.filename
    }

    Slider.create(data, function(response){
        res.send(response);
    });
};
exports.remove=function(req,res){
    var id=req.params.sliderID;
    Slider.delete(id, function(response){
        res.send(response);
    });
};
exports.update = function(req, res) {
    var data={
        sliderID:req.body.sliderID,
        sliderImageUrl:req.file.filename
    }
    Slider.update(data, function(response) {
      res.send(response);
    });
  };
