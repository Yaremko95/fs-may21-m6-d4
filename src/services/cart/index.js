import { Router } from "express";
import db from "../../db/models/index.js";
import sequelize from "sequelize";
const { Cart } = db;
const router = Router();

router.route("/:userId").get(async (req, res, next) => {
  try {
    const data = await Cart.findAll({
      where: { userId: req.params.userId },
      include: [db.Product],
    });
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router
  .route("/:userId/:productId")
  .post(async (req, res, next) => {
    try {
      const { userId, productId } = req.params;
      const data = await Cart.create({ userId, productId });
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const { userId, productId } = req.params;
      const rows = await Cart.destroy({ where: { userId, productId } });
      res.send({ rows });
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

export default router;
