const {request, response}=require("express");
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