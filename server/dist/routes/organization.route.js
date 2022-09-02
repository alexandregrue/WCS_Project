"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const organization_controller_1 = __importDefault(require("./../controllers/organization.controller"));
const router = (0, express_1.Router)();
router.post(":userId/create/", organization_controller_1.default.create);
router.put("/update/:id", organization_controller_1.default.update);
router.delete("/delete/:id", organization_controller_1.default.delete);
router.get("/findAll", organization_controller_1.default.findAll);
router.get("/findOne/:id", organization_controller_1.default.findOne);
exports.default = router;
//# sourceMappingURL=organization.route.js.map