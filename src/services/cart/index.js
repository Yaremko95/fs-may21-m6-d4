import { Router } from "express";

import sequelize from "sequelize";
const router = Router();

router.route("/:userId").get(async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
