import { Router } from "express";
import { Category, Product } from "../../db/index.js";
const router = Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Category.findAndCountAll({
        include: { model: Product, as: "products" },
      });
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Category.bulkCreate([
        { name: "books" },
        { name: "phones" },
        { name: "laptops" },
      ]);
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

export default router;
