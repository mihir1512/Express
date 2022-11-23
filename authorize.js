const authorize=(req,res,next)=>{
    const {user}=req.query

    if(user==='mihir')
    {
        req.user={name:"mihir",id:45}
        next()
    }
    else
    {
        res.status(401).send("Unauthorized")
    }
}

module.exports=authorize