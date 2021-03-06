import React, {useState, useEffect} from 'react'
import axios from 'axios'


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
        // data from Form/models
        const fd = new FormData();
        fd.append('file', file);
        fd.append('name', name);
        fd.append('question', question);

        // 
        axios.post("http://localhost:8000/api/apprentice",  fd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                  }             
            })
            .then((res)=> {
                getFile({
                    path:'http://localhost:8000/api/apprentice'+ res.data.path
                });
                console.log("res data here",res.data);
            })
            .catch((err)=>{
                console.log("Errors", err);
            }, [])
        
        }
    
    return (
        <div className="form-container">
            <h2>add new photo</h2>
            <form encType="multipart/form-data" onSubmit= {e => {submitHandler(e)}}>
                <input 
                type="text"
                onChange={e => {setName(e.target.value)}}
                placeholder="name"/>

                <input 
                type="text" 
                onChange={e => {setQuestion(e.target.value)}}
                placeholder="why do you want to learn to code?"/>
                

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
