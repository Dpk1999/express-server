import * as mangoose from "mongoose";

export default class Database{
    public static open(mongoURL) {
        return new Promise((resolve, reject) => {
            mangoose.connect(mongoURL,(err) =>{
                if(err){
                    console.log("error",err);
                    return reject(err);
                }
                console.log("Succesfully connected to Database",mongoURL);
                return resolve("Success");
            });

        })
    }
}
