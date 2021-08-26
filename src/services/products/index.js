import { Router } from "express";

import s from "sequelize";
import db from "../../db/models/index.js";
const Product = db.Product;
const { Op } = s;
const router = Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Product.findAll({
        where: req.query.name
          ? { name: { [Op.iLike]: `%${req.query.name}%` } }
          : {},
        include: {
          model: db.Category,
          where: req.query.category ? { name: req.query.category } : {},
        },
      });
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Product.create(req.body);
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
      const data = await Product.findByPk(req.params.id);
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await Product.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      });
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const data = await Product.destroy({ where: { id: req.params.id } });
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

export default router;
