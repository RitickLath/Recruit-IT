import mongoose from "mongoose";

const connectDatabase = () => {
  mongoose
    .connect(process.env.DATABASEURI || "")
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((e) => {
      console.log("Problem with database connection: ", e);
    });
};

export default connectDatabase;
