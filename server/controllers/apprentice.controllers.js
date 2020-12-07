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

       

        // get file name
        const fileName = req.files.photo.name

        // time stamp
        const timeStamp = Date.now()
        console.log("time stamp:",timeStamp);

        // concatenate name and time stamp before saving to db
        const saveName = timeStamp + fileName;
        console.log("this is the name I want to save",saveName);

        // change default name to new name
        req.body.photo = saveName;
        console.log("new file name:",saveName);
        
        
        // add file name to the db
        Apprentice.create(req.body)
        .then(newApprentice => res.json({Apprentice: newApprentice}))
        .catch((err) => {res.status(400).json(err);})

        const fileData = req.files.photo
        const path = 'uploads/' + saveName
        // Use the mv() method to place the file on your server
        fileData.mv(path, function(err) {
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