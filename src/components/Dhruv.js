import { useEffect } from "react"

export default function Dhruv(){

    useEffect(() => {
        fetch('http://localhost:8080/dhruv/events')
        .then(response => response.json())
        .then((resp) => {
            console.log(resp)
        });
    })

    return(
        <div>
        
        </div>
    )
}