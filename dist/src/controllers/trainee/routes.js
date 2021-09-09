"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const validationHandler_1 = require("../../libs/routes/validationHandler");
const validation_1 = require("./validation");
const router = (0, express_1.Router)();
router.get('/', (0, validationHandler_1.default)(validation_1.default.get), controller_1.default.get);
router.post('/', (0, validationHandler_1.default)(validation_1.default.create), controller_1.default.post);
router.put('/:name', (0, validationHandler_1.default)(validation_1.default.update), controller_1.default.put);
router.delete('/:name', (0, validationHandler_1.default)(validation_1.default.delete), controller_1.default.delete);
exports.default = router;
//# sourceMappingURL=routes.js.map