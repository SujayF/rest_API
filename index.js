import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = 5002;

app.use(bodyParser.json());
app.use('/users', userRoutes);

app.get('/',(req,res) =>{
    console.log("Hello World");
      
     res.send("Homepage Hello")
})

app.listen(PORT,() => console.log(`server is running on port : http://localhost:${PORT}`))