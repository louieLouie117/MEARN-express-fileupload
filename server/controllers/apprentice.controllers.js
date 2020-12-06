const Apprentice = require("../models/apprentice.models");

module.exports = {
// CRUD operations

    // Create 
    create (req, res){
        let photoStringName = req.files;   
        console.log("photo information",photoStringName);

        req.body.photo = photoStringName.photo.name,
        console.log("file upload name",req.body.photo);
    
        Apprentice.create(req.body)
        .then(newApprentice => res.json({Apprentice: newApprentice}))
        .catch((err) => {res.status(400).json(err);})
       
        // if (!req.files || Object.keys(req.files).length === 0) {
        //     return res.status(400).send('No files were uploaded.');
        //   }     


        // console.log("this is the data", res.body);
        // console.log("this is the files", res.files);



    
    },
    
    // delete 
    delete (req, res){
        Apprentice.deleteOne({_id: req.params.id})
        .then(result => res.json({Apprentice: result}))
        .catch((err) => {res.status(400).json(err);})
    },
  
    // render 
    getAll (req, res){
        Apprentice.find()
        .then(result => res.json({Apprentice: result}))
        .catch((err) => {res.status(400).json(err);})
    },


        
    // find one 
    findSingleApprentice (req, res){
        Apprentice.findOne(req.body)
        .then(oneSingleApprentice => res.json({Apprentice: oneSingleApprentice}))
        .catch((err) => {res.status(400).json(err);})
    },
    

    // update 
    update (req, res){
        Apprentice.findOneAndUpdate({_id: req.params.id},req.body, {new: true, runValidators})
        .then(result => res.json({Apprentice: result}))
        .catch((err) => {res.status(400).json(err);})
    },
  
    



}