import React, {useState, useEffect} from 'react'
import axios from 'axios'


const CreateNewApprentice = props => {

    const [name, setName] = useState("");
    const [question, setQuestion] = useState("");
    const [photo, setPhoto] = useState("")
    const [file, setFile] = useState("")


    const onChange = e => {
        setFile(e.target.files[0]);
        setPhoto(e.target.files[0].name);
        console.log("file:",file);
        console.log("photo:",photo);


      };


    const submitHandler = (e)=>{      
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', file);
     
        
        console.log("submit button was click");
    
    
  
        
        const newApprentice = {
            name: name,
            question: question,
            photo: file,

        }

        console.log("name:",name);
        console.log("question:",question);
        console.log("photo:",photo);
        

        axios
            .post("http://localhost:8000/api/apprentice", newApprentice)
            .then((res)=> {
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
            <form onSubmit= {e => {submitHandler(e)}}>
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
