const {request}=require("express");
const Cart=require("../models/Cart");

exports.add=function(req,res){
    var data=req.body;
    Cart.create(data, function(response){
        res.send(response);
    });
};
exports.get_id=function(req,res){
    Cart.getById(req.params.userID,function(response){
        res.send(response);
    });
};
exports.getAllItemCart=function(req,res){
    Cart.getAllItemCart(req.params.cartID,function(response){
        res.send(response);
    });
};