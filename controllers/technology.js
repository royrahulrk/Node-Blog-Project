const technology = require('../data/technology');

const getTechnologyDetailsController = (req,res) =>{
    try{
        res.status(200).json({
            message : "success",
            details : technology
        })
    }catch(err){
        res.status(500).json({
            message : err,
            details : []
        })
    }
};

module.exports=getTechnologyDetailsController