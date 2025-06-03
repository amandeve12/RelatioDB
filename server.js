import "dotenv/config"
import express from "express";
import routes from "./index.js"
const app = express();

const PORT = process.env.PORT || 3000;
// midlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
/*
All Routes files

*/
app.use(routes)


app.listen(PORT, ()=>console.log(`server is running at ${PORT}`))