import { useEffect } from "react"

export default function Dhruv(){

    useEffect(() => {
        fetch('http://localhost:8080/dhruv')
        .then(function(resp){
            console.log(resp);
        })
    })

    console.log('hello');

    return(
        <div>
        
        </div>
    )
}