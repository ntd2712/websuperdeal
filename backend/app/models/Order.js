const db=require('../connect/connectDB');
const Order=function(order){
    this.orderID=order.orderID;
    this.userID=order.userID;
    this.dateOrder=order.dateOrder;
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

Order.getById=function(userID,result){
    db.query("SELECT*FROM orders join user on orders.userID=user.userID where orders.userID=?",userID,function(err,orders){
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