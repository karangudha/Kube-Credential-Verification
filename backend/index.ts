import { app } from "./app.js";
import connectDB from "./src/db.js";
import dotenv from "dotenv";

dotenv.config();

const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${process.env.PORT || 3000}` );
    })
})
.catch((error: unknown) => {
    console.log("Failed to connect to DB", error);
})