<<<<<<< HEAD
import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from './libs/routes';
import router from './routes';
export default class Server {
    app: express.Express;
    constructor(private config) {
=======
import * as express from "express";
import * as bodyParser from 'body-parser';
import routes from "./libs/routes";

export default class Server{
     app: express.Express;
    
    /**
     * This is Constructor
     * @param config 
     */
    constructor(private config:any){ 
>>>>>>> b76bfab5e40262202c7afd61d280b03e499d2a92
        this.app = express();
    }
    /**
     * This method use to set health-check route
     */
<<<<<<< HEAD
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
=======
    setupRoutes(){
        this.app.get('/health-check',(req,res)=>{
            res.send("I am OK")
        })
         // use notFoundRoute middleware
      this.app.use(routes.notFoundRoute);
      // use errorHandler middleware
      this.app.use(routes.errorHandler);
>>>>>>> b76bfab5e40262202c7afd61d280b03e499d2a92

        // parse application/json
        this.app.use(bodyParser.json());
    }
<<<<<<< HEAD

    /**
     * This Method use to set in initial route
     * @returns
     */
    bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }
=======
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



>>>>>>> b76bfab5e40262202c7afd61d280b03e499d2a92

    /**
     * This method use to listen port
     */
    run() {
        const { port, env } = this.config;
        this.app.listen(port, (err) => {
            if (err) console.log('Error in server setup');
            console.log(`app running on ${port} of ${env} successfully`);
        });
    }
}