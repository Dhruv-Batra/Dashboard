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
        // axios.delete('http://localhost:8080/dhruv/delete-event',{
        //     params:{
        //         eventId: 'DjDgi0rNcnQ4wLTqaHTn',
        //     }
        // }).then(function (resp) {
        //     console.log(resp.data) //should log status message, can delete this
        // })

        // axios.post('http://localhost:8080/dhruv/move',{
        //     params:{
        //         student:'Kuwwog0wBvsshMoDl84a', //change to state
        //         currentTeacher: 'cOcSMVKGi4KDSQLYZ4wq',
        //         targetTeacher:'ZFGmQGWbyka60D1Dn91Y', //change to state
        //     },
        // })
        // .then(function (resp){
        //     console.log(resp.data);
        // })

        const moveData = {
            studentId: "ukB4XkWMx6Bvndd8tuSY",
            currentTeacherId: "0oG3nsOBuo6UnVYSo4Fc",
            targetTeacherId: "iR8tDX6igwp9632a7XtK",
          };
          fetch("http://localhost:8080/dhruv/move", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(moveData),
          });

    })

    return(
        <div>

        </div>
    )

}

