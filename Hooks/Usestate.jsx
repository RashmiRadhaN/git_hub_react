import React,{useState} from "react"

const Usestate=()=>{
    let[userName, setuserName]=useState("SAM")
    let[password,setPassword]=useState(123456)
    let[phone,setPhone]=useState(1234567895)

let handleChange=()=>{
    setuserName("PRIYAAAAAA")
}

let changePassword=()=>{
    setPassword(12549)
}

let changeNumber=()=>{
    setPhone(74598526541)
}


return(
    <>
<div>
    <h1>{userName}</h1>
    <h2>{password}</h2>
    <h3>{phone}</h3>
    <button onClick={handleChange}>Change Name</button>
    <button onClick={changePassword}>Change Name</button>
    <button onClick={changeNumber}>Change Name</button>
</div>
    </>
)
}

export default Usestate;