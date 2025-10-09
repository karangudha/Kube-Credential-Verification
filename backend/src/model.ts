import mongoose, { Schema , Document, Model } from "mongoose";

export interface IUser extends Document {
    name: string;
    username: string;
    workerId: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const verificationSchema: Schema<IUser> = new Schema(
    {
        name: {
            type: String,
            required: true,
            lowercase: true,
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
        },
    },
    { 
        timestamps: true 
    }
)

export const User: Model<IUser> = mongoose.model<IUser>("User", verificationSchema);