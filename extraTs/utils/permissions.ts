import { permissions } from "../constants"
import { IGetUsers } from "../interface";

const hasPermission = (moduleName: string, role: string, permissionType: string): boolean => {
  const obj: IGetUsers = permissions[moduleName];
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