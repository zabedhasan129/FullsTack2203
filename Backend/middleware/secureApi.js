const secureApi = (req,res,next) => {
    console.log(process.env.SECUREAPI);

    if(req.headers.authorization == process.env.SECUREAPI){
        next();
    }
    else{
        res.send({ error:"Not Valid Way"})
    }

}
module.exports = secureApi;