const {request}=require("express");
const Role= require('../models/Role');
exports.get_all=function(req,res){
    Role.getAll(function(data){
        res.send(data);
    });
};
exports.get_id=function(req,res){
    Role.getById(req.params.roleID,function(response){
        res.send(response);
    });
};

exports.add=function(req,res){
    var data=req.body;
    Role.create(data, function(response){
        res.send(response);
    });
};
exports.remove=function(req,res){
    var id=req.params.roleID;
    Role.delete(id, function(response){
        res.send(response);
    });
};
exports.update=function(req,res){
    var data=req.body;
    Role.update(data, function(response){
        res.send(response);
    });
};
