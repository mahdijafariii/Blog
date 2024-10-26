const db = require('./db');
const config = require('../Blog/configs');
const app = require('./app');

async function startServer(){
    try {
        await db.getConnection();
        app.listen(config.port, ()=>{
            console.log("SERVER IS RUNNING SUCCESSFULLY");
        })
    }
    catch (error) {
        console.log(error);
        db.end();
    }
}
startServer();