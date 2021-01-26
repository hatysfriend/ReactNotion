import {mongoose} from 'mongoose';

export const database = (function () {
    
    let dbInstance = null;

    let _getDbInstance = () =>{
        let connectionString = "mongodb://localhost:37017/MyDB";
        console.log(`Database Connection: ${connectionString}`);

        if (!dbInstance) {
            console.log("Creating New Instance");
            mongoose.connect(connectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
                .then(() => {
                    console.log("connected");
                })
                .catch((err) => {
                    console.error("connection failed" + err);
                });
            return dbInstance = mongoose;
        }
        else {
            console.log("Instance Already Exists");
            return dbInstance;
        }
    };

    return {
        GetDbInstance() {
            return _getDbInstance();
        },
    };
})();

  // module.exports = database;
