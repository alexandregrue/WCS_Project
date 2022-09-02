import { Router } from "express";
import taskController from "./../controllers/task.controller";

const router = Router();

router.post(":organizationId/:userId/create/", taskController.create);
router.delete("/delete/:id", taskController.delete);
router.get("/findAll", taskController.findAll);
router.get("/findOne/:id", taskController.findOne);

export default router;