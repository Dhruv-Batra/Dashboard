import { Route, Switch } from "react-router-dom";

import Calendar from './Calendar/Calendar'
import Classes from './Classes/Classes'
import Home from './Home/Home'
import Student from './Student/Student'
import Teacher from './Teacher/Teacher'
import Dhruv from './Dhruv'

export default function Main(){
    return(
        <div>
            <Switch>
                <Route path="Teacher"  component={Teacher} />
                <Route path="Student"  component={Student} />
                <Route path="Classes"  component={Classes} />
                <Route path="/calendar"  component={Calendar} />
                <Route path="/dhruv" component ={Dhruv} />
                <Route path="/" exact component={Home} />  
            </Switch>
        </div>
    )
}