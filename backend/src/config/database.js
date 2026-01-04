import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`\n MONGODB Connected Successfully', ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('MONGODB Connection Failed', error);
        process.exit(1)
    }
}

export default connectDB;