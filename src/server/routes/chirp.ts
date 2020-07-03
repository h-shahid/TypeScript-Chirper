import { Router } from "express";
//import chirpstore in order to use methods in chirps.js

import chirpstore from "../utils/chirpstore";
//Create Router
const routher = Router() 

//Get Route - we can get all our chirps w/ this route 
router.get("/:id", (req, res) => {
let id = req.params.id
})
//Get route for chirps by a specific ID
router.get("/", (req, res) =>{
const data = chirpStore.GetChirps()
const chirps = Object.keys(data).map((key) =>{
    return {
        id: key,
        user: data[key].user,
        text: data[key].text,
    }
})
chirps.pop()
res.json(chirps)
    
} )
router.get("/:id", (req, res) => {
    let id = req.params.id;
  
    //gets one chirp via the id property above
    let oneChirp = chirpStore.GetChirp(id);
  
    res.json({id: id, ...oneChirp});
  });
  

chirpstore.pop()
//Post/Create Route
router.post("/", (req, res) =>{
   chirpStore.CreateChirp({
       user: req.body.user,
       text: req.body.text
   })
    res.status(201).json("Chirp Created")
})
//Put/Update route 
router.put("/:id", (req, res) => {
    chirpStore.UpdateChirp(req.params.id, {
      user: req.body.user,
      text: req.body.text,
    });
    res.status(201).json(`Chirp (ID ${req.params.id}) Updated`);
  });



//Delete Route
router.delete("/:id", (req, res) => {
    chirpStore.DeleteChirp(req.params.id);
    res.status(201).json("Chirp Deleted");
  });


  //want to be able export(pass) all the routes to index.js
export default router //handles all api routes for chirps resource
