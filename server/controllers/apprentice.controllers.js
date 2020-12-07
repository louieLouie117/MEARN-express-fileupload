const Apprentice = require("../models/apprentice.models");

module.exports = {
// CRUD operations

    // Create 
    create (req, res){

        // Get file information  
        let fileInfo = req.files;
        console.log("File Information", fileInfo);
        console.log("what info is here:", fileInfo.photo);
        

        
        // Check if a file has bee selected by user
        if (!fileInfo || Object.keys(fileInfo).length === 0) {
            return res.status(400).send('please select an image.');
          }    
          
        // Make sure the image is a photo file
        if (!fileInfo.photo.mimetype.startsWith('image')) {
            return res.status(400).send(`Please upload an image file`, 400);
        }

        const fileName = req.files.photo.name

      

        // change file name
        req.body.photo = fileName;
        

        Apprentice.create(req.body)
        .then(newApprentice => res.json({Apprentice: newApprentice}))
        .catch((err) => {res.status(400).json(err);})


        const file = req.files.photo
        const path = 'uploads/' + fileName
        // Use the mv() method to place the file somewhere on your server
        file.mv(path, function(err) {
            if (err)
            return res.status(500).send(err);

            res.send('File uploaded!');
        });
        
        console.log("path here",path);

     

     
        

        // console.log("this is the data", res.body);
        // console.log("this is the files", res.files);
        console.log("can i log at the end will this run");
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