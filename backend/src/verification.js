import { User } from "./model.js";
const verification = async(req, res) => {
    const username = req.query.username;
    try {
        if(!username) 
        {
            console.log("Username not found!!")
            throw new Error("credentials required");
        }
        
        const isUser = await User.findOne({
            username: username
        })
    
        if(!isUser) 
        {
            console.log("User not found in DB");
            throw new Error("User not found");
        }
        console.log("User verified successfully!!")
        res.status(200).json({
            success: true,
            message: "User verified",
            data: isUser,
        })
    } catch (error) {
        console.log("Error: ", error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }   
}
export { verification };