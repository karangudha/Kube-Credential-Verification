import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
        const uri: string = `${process.env.MONGODB_URI}/${process.env.DB_NAME}`;
        await mongoose.connect(uri);
        console.log("mongodb connected successfully");
    }
    catch (error: unknown) {
        console.log("mongodb connection failed", error);
        throw error;
    }
}

export default connectDB;