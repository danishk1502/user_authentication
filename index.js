const express = require("express");
const app = express();
const port = 3030;
const routes = require("./routes/userRoutes")


app.use(express.json());


app.use("/", routes);

app.listen(port , ()=>{
    console.log("app listen at port :"+ port);
})
