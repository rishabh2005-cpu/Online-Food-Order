import mongoose, { connect } from "mongoose";

export const connectDB = async()=> {
    await mongoose.connect('mongodb+srv://rishabh123:rishabh123@cluster0.e1tnc.mongodb.net/fool-del').then(()=>console.log("DB connected"));
    
}