import { Router } from "express";
import organizationController from "./../controllers/organization.controller";

const router = Router();

router.post(":userId/create/", organizationController.create);
router.put("/update/:id", organizationController.update);
router.delete("/delete/:id", organizationController.delete);
router.get("/findAll", organizationController.findAll);
router.get("/findOne/:id", organizationController.findOne);

export default router;