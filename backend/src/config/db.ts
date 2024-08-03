import mongoose from "mongoose";
import { loggerService } from "../utils/logger";

const connectDB = async (): Promise<void> => {
  try {
    const connection = await mongoose.connect(process.env?.MONGO_URI as string, {});

    loggerService.info(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    loggerService.info(`Error: ${(error as Error).message}`);
    process.exit(1);
  }
};

export default connectDB;
