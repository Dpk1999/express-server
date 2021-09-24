import * as mangoose from "mongoose";
import seedData from "./seedData";
export default class Database{
    public static open(mongoURL) {
        return new Promise((resolve, reject) => {
            mangoose.connect(mongoURL,(err) =>{
                if(err){
                    console.log("error",err);
                    return reject(err);
                }
                console.log("Succesfully connected to Database",mongoURL);
                seedData();
                
                return resolve("Success");
            });

        })
    }
    public static disconnect() {
        mangoose.disconnect((err) => {
          if (!err) console.log('Disconnected from MongoDB.');
        });
      
    }
}
