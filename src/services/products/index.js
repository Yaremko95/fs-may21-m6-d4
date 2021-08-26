import { Router } from "express";
import { Product, Category } from "../../db/index.js";
import s from "sequelize";
const { Op } = s;
const router = Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Product.findAll({
        include: {
          as: "category",
          model: Category,
          where: req.query.category
            ? { name: { [Op.iLike]: `%${req.query.category}%` } }
            : {},
        },
        where: req.query.name
          ? { name: { [Op.iLike]: `%${req.query.name}%` } }
          : {},
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
      res.send(data[1][0]);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const rowCount = await Product.destroy({ where: { id: req.params.id } });
      if (rowCount > 0) {
        res.send("ok");
      } else {
        res.status(404).send("not found");
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

export default router;
