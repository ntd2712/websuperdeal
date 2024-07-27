const {request}=require("express");
const New=require("../models/New");
exports.get_all=function(req,res){
    New.getAll(function(data){
        res.send(data);
    });
};
exports.get_id=function(req,res){
    New.getById(req.params.voucherID,function(response){
        res.send(response);
    });
};
exports.get_id_details=function(req,res){
    New.getByIdDetails(req.params.newID,function(response){
        res.send(response);
    })
};
exports.add=async function(req,res){
    var data=req.body;
    New.create(data, function(response){
        res.send(response);
        //console.log(response);
    });
};
exports.remove=function(req,res){
    var id=req.params.newID;
    New.delete(id, function(response){
        res.send(response);
    });
};
exports.update = function(req, res) {
    var data=req.body
    New.update(data, function(response) {
      res.send(response);
    });
  };
