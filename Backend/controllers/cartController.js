import userModel from "../models/userModel.js"

// add item to user cart
const addToCart = async (req,res) => {
try {
    let userData = await userModel.findOne({_id:req.body.userID});
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemID]) 
    {
        cartData[req.body.itemID] = 1
    }
    else{
        cartData[req.body.itemID] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userID,{cartData});
    res.json({success:true,message:"Added to Cart"});
} catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})   
}
}
//remove items from user cart 
const removeFromCart = async (req,res) =>{

}

//fetch user cart data
const getCart = async(req,res)=> {

}

export {addToCart,removeFromCart,getCart}