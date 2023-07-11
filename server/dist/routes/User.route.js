"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthMiddleWare_1 = require("./../middleware/AuthMiddleWare");
const User_controller_1 = require("./../controller/User.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", AuthMiddleWare_1.AuthMiddleWare, User_controller_1.User);
exports.default = router;
//# sourceMappingURL=User.route.js.map