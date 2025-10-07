import { app } from "./app.js";
import connectDB from "./src/db.js";
import dotenv from "dotenv";

dotenv.config();

connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.PORT || 3000}` );
    })
})
.catch((error) => {
    console.log("Failed to connect to DB", error);
})