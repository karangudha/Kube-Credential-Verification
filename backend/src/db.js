import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
        console.log("mongodb connected successfully");
    }
    catch (error) {
        console.log("mongodb connection failed", error);
        throw error;
    }
}

export default connectDB;