import { permissions } from "../constants"
import { GetUsers } from "../interface";



const hasPermission = (moduleName: string, role: string, permissionType: string): boolean => {

    let found: boolean;
    found = false;
    const obj: GetUsers = permissions[moduleName];         // fetching the module from name
    const permission: string[] = obj[permissionType];      // fetching type of permission
    permission.forEach((element: string) => {     // iterating to check permission
        if (element === role) {
            found = true;        // if role is found in 
            return found;
        }
    });

    return found; // if not found, automatically return false
};

export default hasPermission;