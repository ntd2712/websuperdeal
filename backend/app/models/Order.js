const db=require('../connect/connectDB');
const Order=function(order){
    this.orderID=order.orderID;
    this.userID=order.userID;
    this.dateOrder=order.dateOrder;
    this.amount=order.amount;
    this.statusOrder=order.statusOrder;
}
Order.create=function(data,result){
    db.query("INSERT INTO orders SET ?",data,function(err,order){
        if(err){
            result(err);
        }else{
            result({id: order.insertId, ...data});
        }
    });
}
Order.getAll=function(result){
    db.query("SELECT*FROM orders",function(order,err){
        if(err){
            result(err);
        }else{
            result(order);
        }
    })
}
Order.getalluserbought=function(roleID,result){
    db.query("SELECT u.name, v.voucherID, v.voucherCategoryID, v.nameVoucher, od.price, od.quantity, od.total, v.startDate, v.endDate, v.statusvoucher, o.orderID, o.dateOrder FROM user u JOIN role r ON u.roleID = r.roleID JOIN orders o ON u.userID = o.userID JOIN order_details od ON o.orderID = od.orderID JOIN voucher v ON od.voucherID = v.voucherID WHERE  r.roleID = 2 ORDER BY o.dateOrder ASC",roleID,function(err,orders){
        if(err){
            result(err);
        }else{
            result(orders);
        }
    });
};
Order.getById=function(userID,result){
    db.query("SELECT*FROM orders join user on orders.userID=user.userID where orders.userID=? ORDER BY orders.dateOrder DESC",userID,function(err,orders){
        if(err){
            result(err);
        }else{
            result(orders);
        }
    });
};
Order.delete=function(id, result){
    db.query("DELETE FROM orders WHERE orderID=?",id,function(err,orders){
        if(err){
            result(err);
        }else{
            result("Xóa dữ liệu don hang có id "+id+" thành công!!!")
        }
    });
};
module.exports=Order;