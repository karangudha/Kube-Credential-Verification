import type { Request, Response } from "express";

import type { IUser} from "./model.js";
import { User } from "./model.js";
const verification = async(req: Request, res: Response): Promise<Response> => {
    const username = req.query.username as string | undefined;
    try {
        if(!username) 
            return res.status(400)
                .json({
                    status: false,
                    message: "credentials required",
                })
        
        const isUser: IUser | null = await User.findOne({username})
    
        if(!isUser) 
            return res.status(404)
                .json({
                    status: false,
                    message: "User not found",
                })

        return res.status(200)
            .json({
                success: true,
                message: "User verified",
                data: isUser,
            })
    } catch (error: unknown) {
        console.log("Error: ", error);
        return res.status(500)
            .json({
                success: false,
                message: error instanceof Error ? error.message : "Something went wrong",
            })
    }   
}
export { verification };