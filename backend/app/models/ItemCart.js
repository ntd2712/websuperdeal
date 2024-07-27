const db=require('../connect/connectDB');
const ItemCart=function(itemcart){
    this.itemCartID=itemcart.itemCartID;
    this.cartID=itemcart.cartID;
    this.code_voucher=itemcart.code_voucher;
}
ItemCart.getByIdCart=function(cartID,result){
    db.query("SELECT*FROM item_cart join cart on item_cart.cartID=cart.cartID WHERE item_cart.cartID=?",cartID,function(err,itemcart){
        if(err){
            result(err);
        }else{
            result(itemcart);
        }
    })
};
ItemCart.create=function(data,result){
    db.query("INSERT INTO item_cart SET ?",data,function(err,itemcart){
        if(err){
            result(err);
        }else{
            result({id: itemcart.insertId, ...data});
        }
    });
}
module.exports=ItemCart;