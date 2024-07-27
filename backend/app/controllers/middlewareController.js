const jwt=require("jsonwebtoken");
require('dotenv').config();
const middlewareController={
    //xac nhan tk co dung ko
    verifiToken:(req,res,next)=>{
        const token=req.headers.token;
        if(token){
            const accessToken=token.split(" ")[1];
            jwt.verify(accessToken,process.env.ACCESS_TOKEN,(err,user)=>{
                console.log(err);
                if(err){
                    res.status(403).json("token khong dung hoac da het han");
                }
                req.user=user;
                next();
            });
        }else{
            res.status(401).json("khong tim thay");
        }
    },
};
module.exports=middlewareController;