import app from ".";
import connectDatabase from "./config";

app.listen(process.env.PORT || 3000, () => {
  //connectDatabase();
  console.log("Server Listening...");
});
