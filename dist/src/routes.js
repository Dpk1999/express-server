"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("./controllers");
const router = (0, express_1.Router)();
router.use('/trainee', controllers_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map