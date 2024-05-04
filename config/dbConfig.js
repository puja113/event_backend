import mongoose from 'mongoose';

const mongoURI = "mongodb://localhost:27017/"


export const connectMongoDB = async () => {
    try {
      await mongoose.connect(mongoURI);
      const connection = mongoose.connection;
      console.log("Connected to MongoDB");
    } catch (error) {
      console.log("Error connecting to MongoDB: ", error);
    }
  
};