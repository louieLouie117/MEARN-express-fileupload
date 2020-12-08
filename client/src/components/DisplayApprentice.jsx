import React, {useEffect, useState} from 'react'
import axios from 'axios'

const DisplayApprentice = props => {

    const [apprentice, setApprentice] = useState(null)

    const apiGetAllApprentice = 'http://localhost:8000/api/apprentice'

    useEffect(()=>{
        axios
        .get(apiGetAllApprentice)
        .then((res) =>{
            setApprentice(res.data.Apprentice)
            console.log(res.data.Apprentice);
        })
        .catch((err)=> {
            console.log(err);
        })
    }, [])



    const deleteHandler = (deleteId)=> {
        console.log("delete button was click");
        axios.delete("http://localhost:8000/api/apprentice/delete/" + deleteId)
        .then((res)=>{
            const filterApprentice = apprentice.filter((apprentice)=> {
                return apprentice._id !== deleteId
            });

            setApprentice(filterApprentice);
        })
  
        
    }

    if(apprentice === null){return(<h2>Loading...</h2>)}


    return (
        <div className="main-container">
            <h1>All apprentice from db</h1>

            {apprentice.map((apprentice)=>{
            return(
            
             <ul key={apprentice._id}>
                <li>
                    <p>{apprentice.name}</p>
                    <p>{apprentice.question}</p>
                    {/* <p>{apprentice.photo}</p> */}
                    <img src={"/uploads/" + apprentice.photo}/>
                    <div className="options-container">
                        <button onClick={()=>{deleteHandler(apprentice._id)}}>Delete</button>
                        <button>Edit</button>
                    </div>

                </li>

            </ul>
            
            );
        })}
        </div>
    )
}



export default DisplayApprentice
