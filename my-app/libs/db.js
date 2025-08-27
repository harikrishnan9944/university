import mongoose from "mongoose"

const db=async()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
}


export default db

