export const AuthMiddleWare=(req,res,next)=>{
  try{
   
    next()
  }catch(e){
    console.log(e)
    res.status(401).json({
      message:"user not authenticated"
    })
  }
}