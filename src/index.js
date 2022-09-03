import express, { json, urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./models/config";
import tagRoute from "./routes/tag";

const app = express();

//Config
dotenv.config();
const port = process.env.PORT;
const isDev = process.env.NODE_ENV === "development";

//Middlewares
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

//Routes
app.use("/api/tag", tagRoute);

//Root endpoint
app.get("/", (req, res) => {
  res.send("Express Server");
});

(async () => {
  await sequelize
    .sync({ alter: isDev })
    .then(() => console.log("Connected to database..."))
    .catch((error) => console.log(error));
  app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
  });
})();
