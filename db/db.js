import mongoose from "mongoose";

const URI = process.env.MONGO_URI;

const connectDb = async()=>{
    try{
        await mongoose.connect(URI);
        console.log("connected to MongoDB Atlas");
    }
    catch(err){
        console.log("database connection failed");  
    }
}

export default connectDb;