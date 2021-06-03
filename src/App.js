import logo from "./logo.svg";
//import "./App.css";
import { BrowserRouter } from "react-router-dom";
//import Main from "./components/Main";

import { Route, Switch } from "react-router-dom";

import Calendar from "./components/Calendar/Calendar";
import Classes from "./components/Classes/Classes";
import Home from "./components/Home/Home";
import Student from "./components/Student/Student";
import Teacher from "./components/Teacher/Teacher";

import Dhruv from "./components/Dhruv";
import Abby from "./components/Abby";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// nolan changed this
function App() {
  return (
    <div
      className="App"
      style={{
        height: "1000px",
        alignItems: "center",
        backgroundColor: "lightgray",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(https://cdn.discordapp.com/attachments/849373816395661343/849633543768244244/unknown.png)`,
      }}
    >
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
              <Route path="/dhruv" component={Dhruv} />
              <Route path="/abby" component={Abby} />
            </div>
          </Switch>
        </div>
      </BrowserRouter>
      <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
