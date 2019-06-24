// const path = require("path");
// const router = require("express").Router();
// // const gameRoutes = require("./games");
// const userRoutes = require("./userRoute");
// const childRoutes = require("./childRoute");

// // router.use("/games", gameRoutes);
// router.use("/api", userRoutes);
// router.use("/api", childRoutes);

// // For anything else, render the html page
// router.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// });

// module.exports = router;

//CODE FROM CONFESSIONS INDEX:
// const path = require('path');
// const router = require('express').Router();
// const apiConfessionRoute = require('./confession-api-routes');
// const apiUserRoute = require('./user-api-routes');

// // ***********************************
// router.use('/api', apiUserRoute);
// router.use('/api', apiConfessionRoute);

// module.exports = router;