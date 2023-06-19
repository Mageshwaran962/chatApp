const express = require("express");
const cors = require("cors");
const moongose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/auth", userRoutes);

moongose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log("DB error message", err.message);
  });
const server = app.listen(process.env.PORT, () => {
  console.log("port started ", process.env.PORT);
});
