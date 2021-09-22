import { permissions } from "../constants"
import { GetUsers } from "../interface";

const hasPermission = (moduleName: string, role: string, permissionType: string): boolean => {


  const obj: GetUsers = permissions[moduleName];
  const permission: string[] = obj[permissionType];
  if (!obj || !permission) {
    console.log(`${role} do not have permission to ${permissionType} permissions for the module ${moduleName}`);
    return false;
  }

  if (permission.includes(role)) {
    console.log(`${role} do not have permission to ${permissionType} permissions for the module ${moduleName}`);
    return false;
  }
  console.log(`${role} have permission to ${permissionType} permissions for the module ${moduleName}`);
  return true;
}

export default hasPermission;