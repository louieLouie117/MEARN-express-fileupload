const port = 8000;
const cors = require("cors");
const express = require("express");
const dbName = "file-uploader-db";
const fileUpload = require('express-fileupload');
const path = require('path');

require("./config/mongoose.config")(dbName);

const app = express();


app.use(express.json());
app.use(cors());
app.use(fileUpload());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


require("./router/apprentice.routers")(app);

app.listen(port), ()=>(
    console.log(`Listening on port ${port} for REQuest to RESpond to.`)
);