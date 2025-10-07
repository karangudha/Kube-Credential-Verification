import mongoose from "mongoose";

const verificationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        workerId: {
            type: String,
            required: true
        }
    },
    { 
        timestamps: true 
    }
)

export const User = mongoose.model("User", verificationSchema);