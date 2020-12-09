import React, {useState, useEffect} from 'react'
import axios from 'axios'
import fileUpload from 'express-fileupload';


const CreateNewApprentice = props => {

    const [name, setName] = useState("");
    const [question, setQuestion] = useState("");
    const [photo, setPhoto] = useState("")
    const [file, setFile] = useState("")
    const [data, getFile] = useState({ name: "", path: "" });

    const onChange = e => {
        setFile(e.target.files[0]);
        setPhoto(e.target.files[0].name);
        console.log("file:",file);
        console.log("photo:",photo);


      };


    const submitHandler = (e)=>{      
        e.preventDefault();
        const fd = new FormData();
        fd.append('file', file);
     
        
        console.log("submit button was click");
    
    
  
        
   
        // console.log("name:",name);
        // console.log("question:",question);
        // console.log("photo:",photo);
        

        axios
            .post("http://localhost:8000/api/apprentice", fd)
            .then((res)=> {
                getFile({
                    path:'http://localhost:8000/api/apprentice'+ res.data.path
                });

                console.log("the results", res)
                console.log("res data here",res.data);
            })
            .catch((err)=>{
                console.log("Errors", err);
            })
        
        }
    
    return (
        <div className="form-container">
            <h1>add new photo</h1>
            <form encType="multipart/form-data" onSubmit= {e => {submitHandler(e)}}>
                <input 
                type="text"
                onChange={e => {setName(e.target.value)}}
                placeholder="name"/>

                <input 
                type="text" 
                onChange={e => {setQuestion(e.target.value)}}
                placeholder="why do you want to learn to code?"/>
                

                {/* <input 
                type="file" 
                name="photo"
                // value={photo}
                onChange={e => {setPhoto(imageHandler(e))}}/> */}

                <input 
                type="file" 
                onChange={onChange}/>

               <input 
               type="submit" 
               value="Upload"/>
            </form>


            
            
        </div>
    )
}



export default CreateNewApprentice
