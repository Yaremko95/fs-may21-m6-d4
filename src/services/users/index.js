import { Router } from "express";
import { User } from "../../db/index.js";
const router = Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await User.create(req.body);
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
