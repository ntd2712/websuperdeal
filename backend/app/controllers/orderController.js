const {request}=require("express");
const Order=require("../models/Order");

exports.add=function(req,res){
    var data=req.body;
    Order.create(data, function(response){
        res.send(response);
    });
};
exports.get_id=function(req,res){
    Order.getById(req.params.userID,function(response){
        res.send(response);
    });
};
exports.remove=function(req,res){
    var id=req.params.orderID;
    Order.delete(id, function(response){
        res.send(response);
    });
};
exports.getalluserbought=function(req,res){
    Order.getalluserbought(req.params.roleID,function(response){
        res.send(response);
    });
};