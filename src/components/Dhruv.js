import { useEffect } from "react"

export default function Dhruv(){

    useEffect(() => {
        // GET all events
        // fetch('http://localhost:8080/dhruv/events')
        // .then(response => response.json())
        // .then((resp) => {
        //     console.log(resp)
        // });

        // GET all student information
        // fetch('http://localhost:8080/dhruv/students')
        // .then(response => response.json())
        // .then((resp) => {
        //     console.log(resp)
        // });
        
        //GET student roster per teacher
        var url=new URL('http://localhost:8080/dhruv/roster'),
        params=({
                teachId:'0oG3nsOBuo6UnVYSo4Fc',
            })
        url.search = new URLSearchParams(params).toString();
        fetch(url)
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
