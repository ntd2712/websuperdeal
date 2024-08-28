const db=require('../connect/connectDB');
const OrderDetails=function(orderdetails){
    this.orderDetailsID=orderdetails.orderDetailsID;
    this.orderID=orderdetails.orderID;
    this.voucherID=orderdetails.voucherID;
    this.quantity=orderdetails.quantity;
    this.price=orderdetails.price;
    this.total=orderdetails.total;
}
OrderDetails.create=function(data,result){
    db.query("INSERT INTO order_details SET ?",data,function(err,order){
        if(err){
            result(err);
        }else{
            result({id: order.insertId, ...data});
        }
    });
};
OrderDetails.getAll=function(orderID,result){
    db.query("SELECT orders.orderID,voucher.voucherID,nameVoucher, order_details.quantity,order_details.price,order_details.total,startDate,endDate,statusVoucher FROM order_details join orders on order_details.orderID=orders.orderID join voucher on order_details.voucherID=voucher.voucherID where orders.orderID=?",
        orderID,function(order,err){
        if(err){
            result(err);
        }else{
            result(order);
        }
    })
};
module.exports=OrderDetails;
