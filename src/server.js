import express from "express";
import { syncSequelize } from "./db/index.js";
import cors from "cors";
import productsRouter from "./services/products/index.js";
import categoriesRouter from "./services/categories/index.js";
import usersRouter from "./services/users/index.js";
import cartRouter from "./services/cart/index.js";
const app = express();

const port = process.env.PORT || 5001;

app.use(cors());

app.use(express.json());
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);
app.use("/users", usersRouter);
app.use("/cart", cartRouter);

app.listen(port, async () => {
  console.log("🚀 Server is running on port ", port);
  await syncSequelize();
});

app.on("error", (error) => console.log("🚀 Server is crashed due to ", error));
