const db=require('../connect/connectDB');
const Cart=function(cart){
    this.cartID=cart.cartID;
    this.userID=cart.userID;
    this.quantityTotal=cart.quantityTotal;
    this.total=cart.total;
};
Cart.create=function(data,result){
    db.query("INSERT INTO cart SET ?",data,function(err,cart){
        if(err){
            result(err);
        }else{
            result({id: cart.insertId, ...data});
        }
    });
}
Cart.getById=function(userID,result){
    db.query("SELECT*FROM cart join user on cart.userID=user.userID where cart.userID=?",userID,function(err,cart){
        if(err){
            result(err);
        }else{
            result(cart);
        }
    });
};
Cart.getAllItemCart=function(cartID,result){
db.query("SELECT * FROM `cart` JOIN item_cart on cart.cartID=item_cart.cartID WHERE cart.cartID=?",cartID,function(err,cart){
    if(err){
        result(err);
    }else{
        result(cart);
    }
});
}
module.exports=Cart;