const bollywood = require('../data/bollywood');

const getBollywoodDetailsController = (req,res) =>{
    try{
        res.status(200).json({
            message : "success",
            details : bollywood
        })
    }catch(err){
        res.status(500).json({
            message : err,
            details : []
        })
    }
};

module.exports = getBollywoodDetailsController;