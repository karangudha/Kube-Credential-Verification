import { User } from "./model.js";
const verification = async(req, res) => {
    const username = req.query.username;
    try {
        if(!username) 
            res.status(400)
                .json({
                    status: false,
                    message: "credentials required",
                })
        
        const isUser = await User.findOne({username})
    
        if(!isUser) 
            res.status(404)
                .json({
                    status: false,
                    message: "User not found",
                })

        res.status(200)
            .json({
                success: true,
                message: "User verified",
                data: isUser,
            })
    } catch (error) {
        console.log("Error: ", error);
        res.status(500)
            .json({
                success: false,
                message: error.message,
            })
    }   
}
export { verification };