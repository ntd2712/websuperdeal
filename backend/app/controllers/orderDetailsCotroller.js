const {request}=require("express");
const OrderDetails=require("../models/OrderDetails");

exports.add=function(req,res){
    var data=req.body;
    OrderDetails.create(data, function(response){
        res.send(response);
    });
};
exports.addList=function(req,res){
    var data=req.body;
    OrderDetails.create(data, function(response){
        res.send([response]);
    });
};
exports.getAll=function(req,res){
    OrderDetails.getAll(req.params.orderID,function(response){
        res.send(response);
        console.log(response);
    })
}