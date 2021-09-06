"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./libs/routes");
class Server {
    /**
     * This is Constructor
     * @param config
     */
    constructor(config) {
        this.config = config;
        this.app = express();
    }
    get application() {
        return this.app;
    }
    /**
     * To setupRoutes
     */
    setupRoutes() {
        this.app.get('/health-check', (req, res) => {
            res.send("I am OK");
        });
        // use notFoundRoute middleware
        this.app.use(routes_1.default.notFoundRoute);
        // use errorHandler middleware
        this.app.use(routes_1.default.errorHandler);
    }
    initBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
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
    run() {
        const { port, env } = this.config;
        this.app.listen(port, () => {
            const message = `|| App is running at port '${port}' in '${env}' mode ||`;
            console.log(message);
        });
        return this;
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map