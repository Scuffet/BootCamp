'user strict';
var dbConn = require('./../../config/db.config');

//Article object create
var Article = function(article){
    this.auteur         = article.auteur;
    this.titre          = article.titre;
    this.texte          = article.texte;
};

Article.create = function (newArt, result) {    
    dbConn.query("INSERT INTO article SET ?", newArt, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Article.findById = function (id, result) {
    dbConn.query("Select * from article where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Article.findAll = function (result) {
    dbConn.query("Select * from article", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('article : ', res);  
            result(null, res);
        }
    });   
};
Article.update = function(id, article, result){
    dbConn.query("UPDATE article SET auteur=?,titre=?,texte=?  WHERE id = ?", [article.auteur,article.titre,article.texte, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
              result(null, err);
          }else{   
              result(null, res);
          }
      }); 
  };
Article.delete = function(id, result){
     dbConn.query("DELETE FROM article WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Article;