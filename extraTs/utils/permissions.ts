import * as  permissions from '../constants';

const hasPermission = (modulename: string, role: string, permissionType: string) => {
    const permission: any = permissions[modulename];
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
  
  export default hasPermission;