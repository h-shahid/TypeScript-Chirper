import * as express from "express"
//Import path 
import  path from "path"
//Import the entire routes folder-will search for index.js(home page)
import apiRouter from "./routes"

//created express application 
const app = express() 

//Middleware 
app.use(express.static("public"));
app.use(express.json()) //body-parser equivalent 

//Middleware for our routers 
app.use("/api", apiRouter)  //Allows us to use localhost:3000/api/ 

//allows react router to work without interference from express's GET attempts
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')))

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));


