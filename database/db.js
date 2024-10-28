import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "ChatBot",
    });

    console.log("Conectado a MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
