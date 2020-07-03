import express from "express";
//Import all the routes from Chirp.js (Chirps Router)
import chirpsRouter from './chirps.ts';

//set up router 
let router = express.Router();

//Middleware 
router.use("/chirps", chirpsRouter);

//Export Router - packs up routes and gives the files connectivity
module.exports = router;


//index.js is the root of the routes folde


///barebones routes.ts
// import express from 'express';

// const router = express.Router();

// router.get('/api/hello', (req, res, next) => {
//     res.json('World');
// });

// export default router;