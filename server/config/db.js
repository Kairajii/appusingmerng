import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Database Connectedd`)
    }catch(error){
        console.log({
            message:error.message
        })
    }
}

export default connectDB;