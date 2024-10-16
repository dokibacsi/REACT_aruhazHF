import React from "react"
import KosarSor from "./KosarSor"

export default function Kosar(props) {
    return (
        <>
            {   
                props.lista.map((elem, index) => {
                    return(<KosarSor elem = {elem} key = {index} index = {index}/>)
                })
            }
        </>
    )
}