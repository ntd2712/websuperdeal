const {request}=require("express");
const VoucherImage=require("../models/VoucherImage");
exports.get_all=function(req,res){
    VoucherImage.getAll(function(data){
        res.send(data);
    });
};
exports.get_id=function(req,res){
    VoucherImage.getById(req.params.voucherID,function(response){
        res.send(response);
    });
};
exports.get_all_id=function(req,res){
    VoucherImage.getAllById(req.params.voucherID,function(response){
        res.send(response);
    });
};
exports.add=function(req,res){
    var data={
        voucherID:req.body.voucherID,
        voucherImageUrl:req.file.filename
    }
    VoucherImage.create(data, function(response){
        res.send(response);
    });
};
exports.remove=function(req,res){
    var id=req.params.voucherID;
    VoucherImage.delete(id, function(response){
        res.send(response);
    });
};
exports.update = function(req, res) {
    var data={
        voucherImageID:req.body.voucherImageID,
        voucherImageUrl:req.file.filename
    }
    VoucherImage.update(data, function(response) {
      res.send(response);
    });
  };
