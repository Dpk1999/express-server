
import { diamond } from "./patterns/index.js";
import { equilateral } from "./patterns/index.js";
import { hasPermission, validateUsers } from "./utils/index.js";
import { USERS } from "../extraTs/constants";


console.log("It is a diamond pattern")
diamond(5);
console.log("It is a equilateral pattern")
equilateral(10);
console.log("It is a boolean value True and False")
console.log(hasPermission('getUsers', 'trainer', 'read'))
console.log("To check the email is valid or not and it's count")
validateUsers(USERS);
