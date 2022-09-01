"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("./../controllers/user.controller"));
const router = (0, express_1.Router)();
router.post("/create", user_controller_1.default.create);
router.put("/update/:id", user_controller_1.default.update);
router.delete("/delete/:id", user_controller_1.default.delete);
router.get("/findAll", user_controller_1.default.findAll);
router.get("/findOne/:id", user_controller_1.default.findOne);
exports.default = router;
//# sourceMappingURL=user.route.js.map