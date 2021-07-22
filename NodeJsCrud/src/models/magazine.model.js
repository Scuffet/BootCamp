'user strict';
var dbConn = require('./../../config/db.config');

//Magazine object create
var Magazine = function(magazine){
    this.nom_magazine         = magazine.nom_magazine;
    this.id_article           = magazine.id_article;
};

Magazine.create = function (newMag, result) {    
    dbConn.query("INSERT INTO magazine SET ?", newMag, function (err, res) {
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
Magazine.findById = function (id, result) {
    dbConn.query("Select * from magazine where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Magazine.findAll = function (result) {
    dbConn.query("Select * from magazine", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('magazine : ', res);  
            result(null, res);
        }
    });   
};
Magazine.update = function(id, magazine, result){
    dbConn.query("UPDATE magazine SET nom_magazine=?, id_article=?  WHERE id = ?", [magazine.nom_magazine,magazine.id_article, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
              result(null, err);
          }else{   
              result(null, res);
          }
      }); 
  };
Magazine.delete = function(id, result){
     dbConn.query("DELETE FROM magazine WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};
module.exports= Magazine;