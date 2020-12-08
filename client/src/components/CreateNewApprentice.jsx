import React, {useState, useEffect} from 'react'
import axios from 'axios'


const CreateNewApprentice = props => {

    const [name, setName] = useState("");
    const [question, setQuestion] = useState("");
    const [photo, setPhoto] = useState("")
    // const [image, setImage] = useState("");



    
    const imageHandler = e => {
        let file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = e => {
            // setPhoto(e.target.result)
            let fileName = file.name
            setPhoto(fileName)

            console.log("need to get the file name",file.name);
            console.log("need to get the file name",fileName);

        }
    }

    const submitHandler = (e)=>{
        
        // let photoName = e.target.files[0]
      
        e.preventDefault();

        // console.log(photoName);

        console.log("submit button was click");
    

        const newApprentice = {
            name: name,
            question: question,
            photo: photo,

        }

        console.log("name:",name);
        console.log("question:",question);
        console.log("photo:",photo);

        axios
            .post("http://localhost:8000/api/apprentice", newApprentice)
            .then((res)=> {
                console.log("the results", res)
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
                

                <input 
                type="file" 
                name="photo"
                // value={photo}
                onChange={e => {setPhoto(imageHandler(e))}}/>

                <button>Save</button>
            </form>


            
            
        </div>
    )
}



export default CreateNewApprentice
