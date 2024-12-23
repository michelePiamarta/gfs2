const express = require("express");
const config = require("./config")

const app = express();
//così servo il sito web, al posto di fare 40 righe di app.get come nel vecchio server
app.use(express.static(path.join(config.baseUrl, 'public')));

// INIT DATABASE
app.post(config.baseUrl + "/init", (req, res) => {
    //prendo la password criptata dal body
    let secret = req.body.secret;
    if(secret == config.dbParamsInit.initSecret){
        //creo il db
        res.send("Database initialized");
    } else {
        res.status(401).send("Non sei autorizzato a inizializzare il database");
    }
});
app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});

