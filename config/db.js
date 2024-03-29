const mongoose=require('mongoose')

const connectDB=async()=>{
    //mongodb;//127.0.0.1:27017/greengrid
    try {
        await mongoose.connect('mongodb+srv://apj42211:DUzDSY3RMsaJ9EBT@cluster0.4s0rfpc.mongodb.net/')
        console.log('connected to mongodb')
        
    } catch (error) {
        console.log('error')
        
    }
   
}
module.exports=connectDB