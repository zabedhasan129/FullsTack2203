const secureApi = (req,res,next) => {
    console.log(req.headers.authorization);

    if(req.headers.authorization == "hasan al zabed"){
        next();
    }
    else{
        res.send({ error:""})
    }

}
module.exports = secureApi;