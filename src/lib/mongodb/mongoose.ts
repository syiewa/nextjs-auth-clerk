import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);
  if (initialized) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: "nextjs-auth-app",
    });
    console.log("MongoDB is connected");
    initialized = true;
  } catch (error) {
    console.log(error);
  }
};

export const disconnect = async () => {
  await mongoose.disconnect();
};
