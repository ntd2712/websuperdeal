const {request}=require("express");
const Logo=require("../models/Logo");
exports.get_all=function(req,res){
    Logo.getAll(function(data){
        res.send(data);
    });
};
exports.get_id=function(req,res){
    Logo.getById(req.params.companyID,function(response){
        res.send(response);
    });
};

exports.add=function(req,res){
    var data={
        companyID:req.body.companyID,
        logoImageUrl:req.file.filename
    }

    Logo.create(data, function(response){
        res.send(response);
    });
};
exports.remove=function(req,res){
    var id=req.params.logoID;
    Logo.delete(id, function(response){
        res.send(response);
    });
};
exports.update = function(req, res) {
    var data={
        logoID:req.body.logoID,
        logoImageUrl:req.file.filename
    }
    Logo.update(data, function(response) {
      res.send(response);
    });
  };
