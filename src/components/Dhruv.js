import { useEffect } from "react"
import axios from 'axios'

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
        // axios.get('http://localhost:8080/dhruv/roster',{
        //     params:{
        //         teachId:'0oG3nsOBuo6UnVYSo4Fc'
        //     }
        // })
        // .then(function (resp){
        //     console.log(resp.data);
        // })

        //DELETE event on calendar
        axios.delete('http://localhost:8080/dhruv/delete-event',{
            params:{
                eventId: 'DjDgi0rNcnQ4wLTqaHTn',
            }
        }).then(function (resp) {
            console.log(resp.data) //should log status message, can delete this
        })
    })

    return(
        <div>

        </div>
    )

}
