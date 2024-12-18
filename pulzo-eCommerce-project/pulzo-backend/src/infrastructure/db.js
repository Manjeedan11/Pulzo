import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionString =
      "mongodb+srv://dbPulzo:it4sB2PT2zUORKoU@pulzo-cluster0.tnwg3.mongodb.net/dev?retryWrites=true&w=majority&appName=pulzo-Cluster0";
    await mongoose.connect(connectionString);
    console.log("Connected to the database");
  } catch (error) {
    console.log(error);
    console.log("Error connecting to the database");
  }
};
