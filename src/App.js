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

import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Navigation/Footer";

import Updater from "./components/Calendar/Updater";
import TeachIdProvider from "./components/Teacher/TeachIdContext";

function App() {
  document.title = "TJ ES Dashboard";

  return (
    <div
      className="App"
      style={{
        fontFamily:
          "Trebuchet MS, Lucida Sans Unicode , Lucida Grande,Lucida Sans, Arial, sans-serif",
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
          <TeachIdProvider>
            <Updater>
              <Switch>
                <Route path="/" exact component={Home} />
                <div>
                  <Navbar />
                  <Route path="/teacher" component={Teacher} />
                  <Route path="/student" component={Student} />
                  <Route path="/classes" component={Classes} />
                  <Route path="/calendar" component={Calendar} />
                </div>
              </Switch>
            </Updater>
          </TeachIdProvider>
        </div>
      </BrowserRouter>
      <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
        <Footer style={{ backgroundColor: "#003c6c" }}></Footer>
      </div>
    </div>
  );
}

export default App;
