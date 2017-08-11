var db = require("../models");
module.exports = function(app) {

    app.post("/newUser", function(req, res) {
    db.User.create(req.body).then(function(result) {
      res.json(result);
    });
  });


    app.get("/logIn", function(req, res) {
        var userName=req.body.userName;
        var password=req.body.password;
        db.User.findOne({
            where:{
                UserName:userName,
                Password: password
            }
        }).then(function(result) {
            res.json(result);
        });
    });

    app.put("/update", function(req, res) {
        var what=req.body.what;
        db.User.update(
        {what:req.body.value}, // may throw an error
        {where: 
            {  id: req.body.UserId    }
        }
        ).then(function(dbPost) {
            res.json(dbPost);
        });
    });

//   app.delete("/delete/:id", function(req, res) {
//     db.SecondBurger.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(result) {
//         //res.redirect("/");
//         res.json(result);
//     });
//   });


//   app.put("/update/:id", function(req, res) {
//     db.SecondBurger.update(
//       {eaten:true},
//       {where: 
//           {  id: req.params.id    }
//       }
//       ).then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });


}