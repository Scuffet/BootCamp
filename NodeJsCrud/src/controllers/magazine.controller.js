'use strict';

const Magazine = require('../models/magazine.model');

exports.findAll = function(req, res) {
    Magazine.findAll(function(err, magazine) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', magazine);
    res.send(magazine);
  });
};


exports.create = function(req, res) {
    const new_magazine = new Magazine(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Magazine.create(new_magazine, function(err, magazine) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Magazine added successfully!",data:magazine});
        });
    }
};


exports.findById = function(req, res) {
    Magazine.findById(req.params.id, function(err, magazine) {
        if (err)
        res.send(err);
        res.json(magazine);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Magazine.update(req.params.id, new magazine(req.body), function(err, magazine) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Magazine successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    Magazine.delete( req.params.id, function(err, magazine) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Magazine successfully deleted' });
  });
};