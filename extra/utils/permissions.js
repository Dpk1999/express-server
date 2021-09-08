
const permissions =

{
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }
}

const hasPermission = (moduleName, role, permissionType) => {

    let found = false
    const permission = permissions[moduleName][permissionType] // fetching the module from name and type of permission
    permission.forEach(element => {     // iterating to check permission
        if (element == role) {
            found = true        // if role is found in permission the return true
            return found
        }
    });

    return found            // if not found, automatically return false
}


// console.log(hasPermission('getUsers', 'trainer', 'read'))

export default hasPermission;

console.log(hasPermission('getUsers', 'trainer', 'read'))


/*

    Sample o/p:

    hasPermission('getUsers','trainer','read')

    true

 */