const {request}=require("express");
const ItemCart=require("../models/ItemCart");
exports.get_id=function(req,res){
    ItemCart.getByIdCart(req.params.cartID,function(response){
        res.send(response);
    });
};
exports.add=function(req,res){
    var data=req.body;

    ItemCart.create(data, function(response){
        res.send(response);
    });
};