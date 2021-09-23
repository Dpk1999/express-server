import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from './libs/routes';
import Database from './libs/Database';
export default class Server {
    app: express.Express;
    constructor(private config) {
        this.app = express();
    }
    /**
     * This method use to set health-check route
     */
    setupRoutes() {
        this.app.get('/health-check', (req, res) => {
            res.send("I am OK")
        })
        // use notFoundRoute middleware
        this.app.use(routes.notFoundRoute);
        // use errorHandler middleware
        this.app.use(routes.errorHandler);

        // parse application/json
        this.app.use(bodyParser.json());




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

    public async run() {
        const { port, env, mongoURL } = this.config;
        try {
            await Database.open(mongoURL);
            this.app.listen(port, () => {
                const message = `app running on '${port}' of '${env}' successfully`;
                console.log(message);
            });
        }
        catch (error) {
            console.log('inside catch', error);

        }
        return this;
    }




}




