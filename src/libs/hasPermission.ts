import { permissions } from './constant';
/**
 * This function check whether users has permission to action [read,write,delete,all]
 * for module
 * @param {string} moduleName
 * @param {string} role
 * @param {string} permissionType
 * @returns
 */
const hasPermission = (
  moduleName: string,
  role: string,
  permissionType: string
): boolean => {
  try {
      // Check wheather role has permission for specific module
      if (permissions[moduleName][permissionType].includes(role)) {
        console.log(
          `${role} has permission to ${permissionType}  ${moduleName}`
        );
        return true;
      } else {
        console.log(
          `${role} not has permission to ${permissionType}  ${moduleName}`
        );
      }
  } catch (err) {
    console.log('Error', err );
  }
};
export default hasPermission;