import React from "react"
import {faker} from '@faker-js/faker';
import {useState} from 'react'

const Faker=()=>{
 let[img,setImg]=useState(faker.image.avatar()) 
 
 
 let imgChange=()=>{
    setImg(faker.image.avatar())
 }
return(
    <div>
        <img src={img} alt=""/>
        <button onClick={imgChange}>Change</button>
    </div>
)

}

export default Faker;
