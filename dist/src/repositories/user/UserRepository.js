"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UserModel_1 = require("./UserModel");
class UserRepository {
    static createObejectId() {
        return String(new mongoose.Types.ObjectId());
    }
    findOne(query) {
        return UserModel_1.userModel.findOne(query).lean();
    }
    find(query, projection, options) {
        return UserModel_1.userModel.find(query, projection, options);
    }
    count() {
        return UserModel_1.userModel.count();
    }
    create(data) {
        console.log('UserRepository::create create', data);
        const id = UserRepository.createObejectId();
        const model = new UserModel_1.userModel(Object.assign({ _id: id }, data));
        return model.save();
    }
    update(data) {
        console.log('userRepository:: update', data);
        return UserModel_1.userModel.updateOne(data);
    }
}
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map