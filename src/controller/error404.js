import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const staticFile = (file)=> path.join(__dirname, "../../src/public", file);

const Error404 = (req, res)=>{
    res.sendFile( staticFile('404.html') );
}



export{Error404}
