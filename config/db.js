import mongoose from "mongoose";
import colors from "colors";

const connectDB = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      `DataBase Connect hogaya bhai partyyy HOST: ${conn.connection.host}`.bgGreen
        .white
    );
  } catch (error) {
    console.log(`Error in MongoDB ${error}`.bgRed.white);
  }
};

export default connectDB;
