"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_1 = __importDefault(require("./../controllers/task.controller"));
const router = (0, express_1.Router)();
router.post(":organizationId/:userId/create/", task_controller_1.default.create);
router.delete("/delete/:id", task_controller_1.default.delete);
router.get("/findAll", task_controller_1.default.findAll);
router.get("/findOne/:id", task_controller_1.default.findOne);
exports.default = router;
//# sourceMappingURL=activationKey.route.js.map