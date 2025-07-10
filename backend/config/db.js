import mongoose from "mongoose";


export const connectDB = async () =>{
  mongoose.connect('mongodb+srv://shalininath279:ShaliniNath123@cluster0.viwfaxq.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("DB connected");
    
  })

}

