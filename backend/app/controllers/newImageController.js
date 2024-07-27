const {request}=require("express");
const NewImage=require("../models/newImage");
exports.get_all=function(req,res){
    NewImage.getAll(function(data){
        res.send(data);
    });
};
exports.get_id=function(req,res){
    NewImage.getById(req.params.newID,function(response){
        res.send(response);
    });
};

exports.add=function(req,res){
    var data={
        newID:req.body.newID,
        newImageUrl:req.file.filename
    }
    NewImage.create(data, function(response){
        res.send(response);
    });
};
exports.remove=function(req,res){
    var id=req.params.newImageID;
    NewImage.delete(id, function(response){
        res.send(response);
    });
};
exports.update = function(req, res) {
    var data={
        newID:req.body.newID,
        newImageUrl:req.file.filename
    }
    NewImage.update(data, function(response) {
      res.send(response);
    });
  };
