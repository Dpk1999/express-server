import { permissions } from "../constants"


const hasPermission = (moduleName: string, role: string, permissionType: string)=> {


  const obj: any  = permissions[moduleName];
  if (!obj || !obj[permissionType]) {
    console.log(`${role} do not have permission to ${permissionType} permissions for the module ${moduleName}`);
    return false;
  }

  if (obj[permissionType].includes(role)) {
    console.log(`${role} do not have permission to ${permissionType} permissions for the module ${moduleName}`);
    return false;
  }
  console.log(`${role} have permission to ${permissionType} permissions for the module ${moduleName}`);
  return true;
}

export default hasPermission;