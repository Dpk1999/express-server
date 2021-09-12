import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from './libs/routes';
import router from './routes';
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
        this.app.get('/health-check', (req, res, next) => {
            res.send("'I am OK");
        });
        this.app.use('/api', router);
        this.app.use(routes.notFoundRoute);
        this.app.use(routes.errorHandler);

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
    public async run() {
        const { port, env, mongoURI } = this.config;
        try {
            await Database.open(mongoURI);
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