"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleWare = void 0;
const AuthMiddleWare = (req, res, next) => {
    try {
        console.log(req);
        next();
    }
    catch (e) {
        console.log(e);
        res.status(401).json({
            message: "user not authenticated"
        });
    }
};
exports.AuthMiddleWare = AuthMiddleWare;
//# sourceMappingURL=AuthMiddleWare.js.map