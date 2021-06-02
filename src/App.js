import logo from "./logo.svg";
//import "./App.css";
import { BrowserRouter } from "react-router-dom";
//import Main from "./components/Main";

import { Route, Switch } from "react-router-dom";

import Calendar from './components/Calendar/Calendar'
import Classes from './components/Classes/Classes'
import Home from './components/Home/Home'
import Student from './components/Student/Student'
import Teacher from './components/Teacher/Teacher'

import Dhruv from './components/Dhruv'
import Abby from './components/Abby'

import Navbar from './components/Navbar'

// nolan changed this
function App() {
  return (
    <div className="App" style={{height: "753px", alignItems: "center", backgroundColor: "lightgray", backgroundRepeat: "no-repeat", backgroundImage: `url(https://cdn.discordapp.com/attachments/849373816395661343/849633543768244244/unknown.png)`}} >
      {/* style={{ backgroundImage: `url(https://cdn.discordapp.com/attachments/744777234430033920/849370516896350268/wallpaperbetter.com_1920x10802.jpg)` }} */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>This is something I added</h1>
      </header> */}
      <BrowserRouter>
        {/* <Navbar /> */}
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <div>
              <Navbar />
              <Route path="/teacher" component={Teacher} />
              <Route path="/student" component={Student} />
              <Route path="/classes" component={Classes} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/dhruv" component ={Dhruv} />
              <Route path="/abby" component ={Abby} />
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
