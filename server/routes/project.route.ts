import { Router } from "express";
import userController from "./../controllers/user.controller";

const router = Router();

router.post("/:organizationId/create", userController.create);
router.put("/update/:id", userController.update);
router.delete("/delete/:id", userController.delete);
router.get("/findAll", userController.findAll);
router.get("/findOne/:id", userController.findOne);

export default router;