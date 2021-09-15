"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("./controllers");
const router = (0, express_1.Router)();
router.use('/trainee', controllers_1.TraineeRoutes);
router.use('/user', controllers_1.UserRoutes);
exports.default = router;
//# sourceMappingURL=routes.js.map