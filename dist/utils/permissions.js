"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const permissions = require("../constants");
const hasPermission = (modulename, role, permissionType) => {
    const permission = permissions[modulename];
    if (!permission || !permission[permissionType]) {
        console.log(`${role} do not have permission to ${permissionType} permissions for the module ${modulename}`);
        return false;
    }
    if (!permission[permissionType].includes(role)) {
        console.log(`${role} do not have permission to ${permissionType} permissions for the module ${modulename}`);
        return false;
    }
    console.log(`${role} have permission to ${permissionType} permissions for the module ${modulename}`);
    return true;
};
exports.default = hasPermission;
//# sourceMappingURL=permissions.js.map