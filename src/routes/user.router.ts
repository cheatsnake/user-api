import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();
const userController = new UserController();

router.post("/user", userController.create);
router.get("/user/:id", userController.getById);
router.get("/users", userController.getAll);
router.put("/user/:id", userController.updateById);
router.delete("/user/:id", userController.deleteById);

export default router;
