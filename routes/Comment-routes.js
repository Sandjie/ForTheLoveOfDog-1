var db = require("../models");
module.exports = function(app) {

    app.post("/addComment", function(req, res) {
        db.Comment.create(req.body).then(function(result) {
        res.json(result);
        });
    });

//   app.get("/burgers", function(req, res) {
//       db.SecondBurger.findAll({}).then(function(result) {
//           res.json(result);
//     });
//   });

  app.delete("/delete/:id", function(req, res) {
    db.Comment.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
        res.json(result);
    });
  });


  app.put("/update/", function(req, res) {
    db.Comment.update(
      {CommentText:req.body.text},
      {where: 
          {  id: req.body.id    }
      }
      ).then(function(dbPost) {
        res.json(dbPost);
      });
  });

}