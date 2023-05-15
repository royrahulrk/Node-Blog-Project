const getAllAPIEndPoints = (req,res) =>{
    try{
        res.status(200).json({
            message : "success",
            endPoints : "List of endpoints are as follows - 1. /Bollywood 2. /Fitness 3. /Food 4. /Hollywood 5./Technology"
        })
    }catch(err){
        res.status(500).json({
            message : err,
            details : []
        })
    }
};

module.exports = getAllAPIEndPoints;