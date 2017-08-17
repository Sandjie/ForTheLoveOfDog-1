var db = require("../models");
var fs = require('fs');
module.exports = function(app) {

     app.post("/newPost", function(req, res) {
      //console.log("newpost:"+req.body.user);
      db.Post.create(req.body).then(function(result) {
        res.json(result);
      });
  });

  app.get("/allPosts", function(req, res) {
      db.Post.findAll({
           include:[db.User],
          order: [
            ['createdAt', 'DESC']
          ]
      }).then(function(result) {
          res.json(result);
    });
  });

  app.delete("/delete/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
        res.json(result);
    });
  });


  app.put("/update", function(req, res) {
    db.Post.update(
      {PostText:req.body.PostText},
      {where: 
          {  id: req.body.id    }
      }
      ).then(function(result) {
        res.json(result);
      });
  });

}