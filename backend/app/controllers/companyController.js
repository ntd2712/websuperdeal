const {request}=require("express");
const Company=require("../models/Company");

exports.get_all=function(req,res){
    Company.getAll(function(data){
        res.send(data);
    });
};
exports.add=function(req,res){
    var data=req.body;
    Company.create(data, function(response){
        res.send(response);
    });
};
exports.get_id=function(req,res){
    Company.getById(req.params.companyID,function(response){
        res.send(response);
    });
};