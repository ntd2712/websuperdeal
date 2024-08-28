const { default: axios } = require("axios");
const { request } = require("express");
const crypto=require("crypto");
const paypal=require("paypal-rest-sdk");
const Order=require("../models/Order");
const OrderDetails=require("../models/OrderDetails");

require("dotenv").config();

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AfMVlp696kE92gb7SbiPxciX1KXTfGMqq4qWT5ot7h_ILn-oyu0UoFGsQ4s1zpd7xJX73BRIWz9O9xHb',
  'client_secret': 'EIwH94n8g3lbzsPk87BOsXkXZLdDINbnZQtqlBt052GWpBPkOQhcnTUtGhk6Y9-3K9M2sWqrUFhXYOIr'
});

exports.pay=async function(req,res){
    try {
      const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/success",
            "cancel_url": "http://localhost:3000/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "item",
                    "sku": "001",
                    "price":"10.00",
                    "currency": "USD",
                    "quantity": 1
                }] 
            },
            "amount": {
                "currency": "USD",
                "total": "10.00"
            },
            "description": "This is the payment description."
        }]
    };
    paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
          throw error;
      } else {
         for(let i=0;i<payment.links.length;i++){
          if(payment.links[i].rel==='approval_url'){
            res.json({forwardLink: payment.links[i].href});
          }
         }
       
      }
    });
    } catch (error) {
      console.log(error)
    }
 
  
};
exports.success=async function(req,res){
  const payerID=req.query.PayerID;
  const paymentId=req.query.paymentId;
  const execute_payment_json = {
    "payer_id": payerID,
    "transactions": [{
        "amount": {
            "currency": "USD",
            "total": "10.00"
        }
    }]
};
paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
  if (error) {
      console.log(error.response);
      throw error;
  } else {
      console.log(JSON.stringify(payment));
      res.send("Success");
  }
});
};
exports.cancel=async function(req,res){
  res.send("Payment cancelled");
}
