
import { diamond } from "./patterns/index.js";
import { equilateral } from "./patterns/index.js";
import { hasPermission, validateUsers } from "./utils/index.js";
<<<<<<< HEAD
import { users } from "../extraTs/constants";
=======
import  { USERS } from "./constants";
>>>>>>> a38b3b1f69df5436779b9e99903ec3a8e6045dfe


console.log("It is a diamond pattern")
diamond(5);
console.log("It is a equilateral pattern")
equilateral(10);
console.log("It is a boolean value True and False")
console.log(hasPermission('getUsers', 'trainer', 'read'));
console.log("To check the email is valid or not and it's count");
validateUsers(USERS);
