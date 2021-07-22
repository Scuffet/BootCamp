'user strict';
var dbConn = require('./../../config/db.config');

//Article object create
var ReferenceMagazine = function(referenceMagazine){
    this.id                    = referenceMagazine.id;
    this.nom_magazine          = referenceMagazine.nom_magazine;
};

ReferenceMagazine.create = function (newRef, result) {    
    dbConn.query("INSERT INTO reference_magazine SET ?", newRef, function (err, res) {
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
ReferenceMagazine.findById = function (id, result) {
    dbConn.query("Select * from reference_magazine where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
ReferenceMagazine.findAll = function (result) {
    dbConn.query("Select * from reference_magazine", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('reference_magazine : ', res);  
            result(null, res);
        }
    });   
};
ReferenceMagazine.update = function(id, referenceMagazine, result){
    dbConn.query("UPDATE reference_magazine SET id=?,nom_magazine=? WHERE id = ?", [referenceMagazine.id, referenceMagazine.nom_magazine, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
              result(null, err);
          }else{   
              result(null, res);
          }
      }); 
  };
  ReferenceMagazine.delete = function(id, result){
     dbConn.query("DELETE FROM reference_magazine WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= ReferenceMagazine;