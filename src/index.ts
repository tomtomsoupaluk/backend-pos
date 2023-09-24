import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./configs/database";
import bodyParser from "body-parser";
import { errorHandler } from "./middlewares/errorMiddleware";
import cors from "cors";

// Routes
import productRoutes from "./routes/productRoute";
import userRoutes from "./routes/userRoute";
import authRoutes from "./routes/authRoute";

dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(productRoutes);
app.use(userRoutes);
app.use(authRoutes);

app.use(errorHandler);

connectDB()
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});
