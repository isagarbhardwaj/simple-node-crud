import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://isagardeveloper:33QNqUmgVqTmOBVF@cluster0.4q6ljdf.mongodb.net/node_api?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Connected to database!!");
    } catch (error) {
        console.log("Error" + error.message );
    }
}