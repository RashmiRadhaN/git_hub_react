import React from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast=()=>{
    let handleSubmit=()=>{
        toast.success("Logged IN Successfull",{
            position:toast.POSITION.TOP_CENTER
        })
    }

    return(
        <div>
            <ToastContainer/ >
            <button onClick={handleSubmit}>Click Here</button>
        </div>
    )
}

export default Toast;