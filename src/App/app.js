import React from "react";
import ReactDOM from "react-dom";
import {Header} from './components/Header';
import {Home} from './components/Home';
class App extends React.Component  {
  render() {
    var user ={
      name:"alfu",
      hobbies:["Badminton","Movies","TT","Cricket"]
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10">
            <Home name={"alfu"} age={30} user={user}/>
          </div>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));