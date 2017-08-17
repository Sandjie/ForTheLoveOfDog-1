// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
      console.log("get in html-routes");
      let file = path.join(__dirname, "../public/slideOne.html");
      console.log(file);
    res.sendFile(file);
  });
 app.get("/newsfeed", function(req, res) {
      console.log("get in html-routes");
    res.sendFile(path.join(__dirname, "../public/test.html"));
  });

  app.get("/signup", function(req, res) {
      console.log("get in html-routes");
    res.sendFile(path.join(__dirname, "../code/slideOne.html"));
  });

  app.get("/slideThree", function(req, res) {
      console.log("get in html-routes");
    res.sendFile(path.join(__dirname, "../code/slideThree.html"));
  });
//   // cms route loads cms.html
//   app.get("/cms", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/cms.html"));
//   });

//   // blog route loads blog.html
//   app.get("/blog", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/blog.html"));
//   });

//   // authors route loads author-manager.html
//   app.get("/authors", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/author-manager.html"));
//   });

};