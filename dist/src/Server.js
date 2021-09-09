"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./libs/routes");
const routes_2 = require("./routes");
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
        const { port, env } = this.config;
        this.app.listen(port, (err) => {
            if (err)
                console.log('Error in server setup');
            console.log(`app running on ${port} of ${env} successfully`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map