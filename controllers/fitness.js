const fitness = require('../data/fitness');

const getFitnessDetailsController = (req,res) =>{
    try{
        res.status(200).json({
            message : "success",
            details : fitness
        })
    }catch(err){
        res.status(500).json({
            message : err,
            details : []
        })
    }
};


module.exports=getFitnessDetailsController