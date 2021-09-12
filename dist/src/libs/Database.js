"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mangoose = require("mongoose");
class Database {
    static open(mongoURI) {
        return new Promise((resolve, reject) => {
            mangoose.connect(mongoURI, (err) => {
                if (err) {
                    console.log("error", err);
                    return reject(err);
                }
                console.log("Succesfully connected to Database", mongoURI);
                return resolve("Success");
            });
        });
    }
}
exports.default = Database;
const openResopnse = Database.open("www.google.com");
//# sourceMappingURL=Database.js.map