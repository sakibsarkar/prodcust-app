import mongoose from "mongoose";

export async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("DB is connected");
    } catch (error) {
        console.log(error);
    }
}