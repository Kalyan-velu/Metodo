"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const User = (req, res) => {
    try {
        res.status(200).json({
            message: "OK"
        });
    }
    catch (error) {
        res.status(500).json({
            message: `Something went wrong (in Server/user) ${error}`
        });
    }
};
exports.User = User;
//# sourceMappingURL=User.controller.js.map