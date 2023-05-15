const hollywood = require('../data/hollywood');

const getHollywoodDetailsController = (req,res) =>{
    try{
        res.status(200).json({
            message : "success",
            details : hollywood
        })
    }catch(err){
        res.status(500).json({
            message : err,
            details : []
        })
    }
};

module.exports=getHollywoodDetailsController