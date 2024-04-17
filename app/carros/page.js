"use client"
import {useState} from "react"




export default function carros(){
    let carros = ["mazda","astra", "Up! TSI", "civic"]  
    let [toggle,setToggle] = useState()
    function toggleLista(){
        
    }
    return(
        <div>
            Olá Mundo!
            <button onClick={toggleLista()} className="" id="toggle">Toggle Lista</button>
            <ul>
                {
                    carros.map((value, index ) => {
                        return <li key={index}>{value}</li>
                    })
                }
            </ul>
        </div>
    )
}