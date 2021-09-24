const express = require("express");
const app = express();
require("./db/conn");
const studentRouter = require("./routers/student");
const Student = require("./models/Students"); 
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(studentRouter);


app.listen(port, () => {
    console.log(`Connection is setup at ${port}`);
})