"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./libs/routes");
const routes_2 = require("./routes");
const Database_1 = require("./libs/Database");
class Server {
    constructor(config) {
        this.config = config;
        this.app = express();
    }
    /**
     * This method use to set health-check route
     */
    setupRoutes() {
        this.app.get('/health-check', (req, res, next) => {
            res.send("'I am OK");
        });
        this.app.use('/api', routes_2.default);
        this.app.use(routes_1.default.notFoundRoute);
        this.app.use(routes_1.default.errorHandler);
    }
    initBodyParser() {
        // parse application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // parse application/json
        this.app.use(bodyParser.json());
    }
    /**
     * This Method use to set in initial route
     * @returns
     */
    bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }
    /**
     * This method use to listen port
     */
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const { port, env, mongoURL } = this.config;
            try {
                yield Database_1.default.open(mongoURL);
                this.app.listen(port, () => {
                    const message = `app running on '${port}' of '${env}' successfully`;
                    console.log(message);
                });
            }
            catch (error) {
                console.log('inside catch', error);
            }
            return this;
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map