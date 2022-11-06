import cors from "cors";
import express from "express";
import error404Route from "../routes/error404.js";
import apiRoute from "../routes/api.js";

export default class{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 4500;
        this.apiPath = "/api"
        
        // Middlewares
        this.middlewares();

        // Routes
        this.routes();
    }
    routes(){
        this.app.use(this.apiPath, apiRoute);
        this.app.use(error404Route);
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('src/public'));
    }
    listen(){
        this.app.listen(this.port, ()=> console.log(`Running on port ${this.port}`));
    }
}