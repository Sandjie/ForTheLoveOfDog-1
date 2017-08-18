var db = require("../models");
var fileUpload = require('express-fileupload');


module.exports = function(app) {

app.use(fileUpload());
app.post('/upload/:type', function(req, res) {
    
    var saveas=""
    if (!req.files.addFile)
    {   console.log('No files were uploaded.');
}
//         console.log(req.files.addFile);
//         { name: '6.JPG',
//           data: <Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 01 00 00 01 00 01 00 00 ff e1 2e 1a 45 78 69 66 00 00 49 49 2a 00 08 00 00 00 0b 00 0f 01 02 00 06 00 00 00 92 00 ... >,
//           encoding: '7bit',
//           mimetype: 'image/jpeg',
//           mv: [Function: mv] }
    else
    {
        console.log(req.files.addFile);
        var mime=req.files.addFile.mimetype
        
        if(req.params.type==="profile")
        {   saveas="./public/images/ProfileImages/"+req.body.Name+".jpg";
            dbImg="images/ProfileImages/"+req.body.Name+".jpg";
        }
        if(req.params.type==="post")
        {   saveas="./public/images/PostImages/"+req.files.addFile.name+".jpg";
            dbImg="images/PostImages/"+req.files.addFile.name+".jpg";
        }

        if(mime ==='image/jpeg' || mime ==='image/jpg' ||mime ==='image/png' || mime ==='image/gif')
        {
            let sampleFile = req.files.addFile;
            sampleFile.mv(saveas, function(err) {
                if (err)
                    return res.status(500).send(err);
                    });
        }
        else
         {  res.send("Upload only image files "); }
    }
        var post
        if(req.params.type==="post")
        {
            
            var returnVar=
            {
                PostText:req.body.txt,
                PostImage:dbImg,
                UserId: req.body.user
            }
            db.Post.create(returnVar).then(function(result) {
                res.json(result);
            });
        } 
        if(req.params.type==="profile")
        {
            console.log(req.body);
            db.User.update(
                {
                    Name:req.body.Name,
                    ProfileImage:dbImg,
                }, 
                {where: 
                    {  id: req.body.user    }
                }
            ).then(function(dbPost) {
                // db.User.update(
                // {
                //     Name:req.body.Name,
                // }, 
                // {where: 
                //     {  id: req.body.user    }
                // }
                // ).then(function(dbPost) {
                    res.redirect("/slideThree.html");
                //});
            });
        }
    }); 



    app.post("/newUser", function(req, res) {
        console.log(req.body);
        db.User.create(req.body).then(function(result) {
        res.json(result);
        });
    });

    app.post("/newUser/step3", function(req, res) {
        console.log("signup part 3: " +req.body);
        db.User.update(
                {
                    Zip:req.body.Zip,
                    Pack:req.body.Pack,
                    Age:req.body.Age
                },
                {where: 
                    {  id: req.body.user    }
                }
            ).then(function(dbPost) {
                res.json(dbPost);
              });
    });

    app.get("/UserLogin", function(req, res) {
        var userName=req.query.userName;
        var password=req.query.password;
        console.log(req);
        db.User.findOne({
            where:{
                Email:userName,
                Password: password
            }
        }).then(function(result) {
            console.log(result);
            res.json(result);
        });
    });

    app.get("/profile/:id", function(req, res) {
        var id= req.params.id /1234;
        console.log("profile id:"+id);
        var userName=req.query.userName;
        var password=req.query.password;
        console.log(req);
        db.User.findOne({
            where:{
                id:id,
               
            }
        }).then(function(result) {
            // var q=result.User.dataValues.id
            // console.log(result.User[0].dataValues.id);
            console.log("result:  "+result.id);
            var user="?Name="+result.Name;
            user+="&Age="+result.Age;
            user+="&Breed="+result.Breed;
            user+="&Interests=to be implemented";
            user+="&ProfileImage="+result.ProfileImage;
            
            res.redirect("/profile.html"+user);
        });
    });

    app.get("/myprofile/:id", function(req, res) {
        var id= req.params.id /1234;
        console.log("profile id:"+id);
        var userName=req.query.userName;
        var password=req.query.password;
        console.log(req);
        db.User.findOne({
            where:{
                id:id,
               
            }
        }).then(function(result) {
            console.log(result);
            res.json(result);
        });
    });

    app.put("/update", function(req, res) {
        console.log(req.body);
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

    app.get("/getBreed/:breed", function(req, res) {
        var breed=req.params.breed;
        console.log(req);
        db.User.findAll({
            where:{
                Pack:breed,
            }
        }).then(function(result) {
            res.json(result);
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