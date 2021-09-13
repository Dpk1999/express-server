"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mangoose = require("mongoose");
const seedData_1 = require("./seedData");
class Database {
    static open(mongoURL) {
        return new Promise((resolve, reject) => {
            mangoose.connect(mongoURL, (err) => {
                if (err) {
                    console.log("error", err);
                    return reject(err);
                }
                console.log("Succesfully connected to Database", mongoURL);
                (0, seedData_1.default)();
                return resolve("Success");
            });
        });
    }
}
exports.default = Database;
//# sourceMappingURL=Database.js.map