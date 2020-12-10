import React from 'react'
import CreateNewApprentice from '../components/CreateNewApprentice'
import DisplayApprentice from '../components/DisplayApprentice'


const HomePage = props => {
    return (
        <div>   
            <h1>Hello, File Uploader</h1>  
            <CreateNewApprentice/>    
            <DisplayApprentice/>
        </div>
    )
}



export default HomePage
