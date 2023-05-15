const food = require('../data/food');

const getFoodDetailsController = (req,res) =>{
    try{
        res.status(200).json({
            message : "success",
            details : food
        })
    }catch(err){
        res.status(500).json({
            message : err,
            details : []
        })
    }
};

module.exports=getFoodDetailsController