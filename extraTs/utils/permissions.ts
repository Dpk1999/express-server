import { permissions } from "../constants"
import { GetUsers } from "../interface";

const hasPermission = (moduleName: string, role: string, permissionType: string): boolean => {
  const obj: GetUsers = permissions[moduleName];
  const permission: string[] = obj[permissionType];
  if (!obj || !permission) {
    return false;
  }
  if (permission.includes(role)) {
    return false;
  }
  return true;
}

export default hasPermission;