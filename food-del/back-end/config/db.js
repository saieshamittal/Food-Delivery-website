import mongoose from "mongoose";
export const connectDB= async ()=> {
    await mongoose.connect('mongodb+srv://saieshamittal17:theSaiesha17@cluster0.jcgeb.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}