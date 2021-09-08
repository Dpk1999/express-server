import * as express from "express";

export default class Server{
     app: express.Express;
    
    /**
     * This is Constructor
     * @param config 
     */
    constructor(private config:any){ 
        this.app = express();

    }

    get application() {
		return this.app;
	}
    /**
     * To setupRoutes
     */
    setuproutes(){
        this.app.get('/health-check',(req,res)=>{
            res.send("I am OK")
        })

    }
    /**
     * To bootstrap your app
     * @returns 
     */
    bootstrap(){
        this.setuproutes
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




