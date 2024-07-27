const {request}=require("express");
const VoucherCategory=require("../models/voucherCategory");
exports.get_all=function(req,res){
    VoucherCategory.getAll(function(data){
        res.send(data);
        // console.log(data);
    });
    
};
exports.get_id=function(req,res){
    VoucherCategory.getById(req.params.voucherCategoryID,function(response){
        res.send(response);
    });
};

exports.add=function(req,res){
    var data=req.body;
    VoucherCategory.create(data, function(response){
        res.send(response);
    });
};
exports.remove=function(req,res){
    var id=req.params.voucherCategoryID;
    VoucherCategory.delete(id, function(response){
        res.send(response);
    });
};
exports.update=function(req,res){
    var data=req.body;
    VoucherCategory.update(data, function(response){
        res.send(response);
    });
};
