const {request}=require("express");
const Voucher=require("../models/voucher");
exports.get_all=function(req,res){
    Voucher.getAll(function(data){
        res.send(data);
        // console.log(data);
    });
    
};
exports.add=function(req,res){
    var data=req.body;
    Voucher.create(data, function(response){
        res.send(response);
        console.log(response);
    });
};
exports.get_id=function(req,res){
    Voucher.getById(req.params.userID,function(response){
        res.send(response);
    })
};
exports.get_id_details=function(req,res){
    Voucher.getByIdDetails(req.params.voucherID,function(response){
        res.send(response);
    })
}
exports.get_id_voucher_details=function(req,res){
    Voucher.getByIdVoucherDetails(req.params.voucherID,function(response){
        res.send(response);
    })
}
exports.remove=function(req,res){
    var id=req.params.voucherID;
    Voucher.delete(id, function(response){
        res.send(response);
        console.log(response)
    });
};
exports.timTheoTenVoucher=function(req,res){
    Voucher.timTheoTen(req.params.nameVoucher,function(response){
        res.send(response);
    })
}