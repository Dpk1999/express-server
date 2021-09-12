import * as mangoose from "mongoose";

export default class Database{
    public static open(mongoURI) {
        return new Promise((resolve, reject) => {
            mangoose.connect(mongoURI,(err) =>{
                if(err){
                    console.log("error",err);
                    return reject(err);
                }
                console.log("Succesfully connected to Database",mongoURI);
                return resolve("Success");
            });

        })
    }
}
const openResopnse = Database.open("www.google.com");