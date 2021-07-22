'use strict';

const ReferenceMagazine = require('../models/referenceMagazine.model');

exports.findAll = function(req, res) {
    ReferenceMagazine.findAll(function(err, referenceMagazine) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', referenceMagazine);
    res.send(referenceMagazine);
  });
};


exports.create = function(req, res) {
    const new_referenceMagazine = new ReferenceMagazine(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        ReferenceMagazine.create(new_referenceMagazine, function(err, referenceMagazine) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Reference Magazine added successfully!",data:referenceMagazine});
        });
    }
};


exports.findById = function(req, res) {
    ReferenceMagazine.findById(req.params.id, function(err, referenceMagazine) {
        if (err)
        res.send(err);
        res.json(referenceMagazine);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        ReferenceMagazine.update(req.params.id, new referenceMagazine(req.body), function(err, referenceMagazine) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Reference Magazine successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    ReferenceMagazine.delete( req.params.id, function(err, referenceMagazine) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Reference Magazine successfully deleted' });
  });
};