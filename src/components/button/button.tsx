'use client'

import { useEffect, useState } from "react"

interface ButtonProps {
    name?: string,
    type: "add" | "delete" | "edit",
    className?: string
}

const Button:React.FC <ButtonProps>= (props) => {
    
    const pickColor = () => {
        
        if(props.type === "delete"){
            return "bg-red-500"
        }
        if(props.type === "edit") {
            return "bg-blue-500"
        }

        return "bg-green-500"
    }
    
    return <button className={`${pickColor()} ${props.className} text-white py-1 px-5 rounded-lg align-middle shadow-md`}>
        {props.name? props.name : "Button"}
    </button>
}

export default Button