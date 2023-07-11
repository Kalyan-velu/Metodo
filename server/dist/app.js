"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const User_route_1 = __importDefault(require("./routes/User.route"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/user', User_route_1.default);
const PORT = process.env.PORT;
app.listen(PORT, () => {
    return console.log(`Server is listening at http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map