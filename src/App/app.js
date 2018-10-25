import React from "react";
import ReactDOM from "react-dom";
import {Header} from './components/Header';
import {Home} from './components/Home';
class App extends React.Component  {
  constructor(props){
    super();
    this.state = {
      homeLink : "Home",
      isHomeMounted : true,
    }
  }
  onGreet(){
    alert("HEllO");
}

  onChangeLinkName(newName){
    this.setState({
      homeLink: newName
    });
  }

  onChangeUnmounted(){
    this.setState({
      isHomeMounted : !this.state.isHomeMounted
    });
  }
  render() {
    let homeComp = "";
    if(this.state.isHomeMounted){
      homeComp = (
        <Home 
          name={"alfu"} 
          age={30} 
          greet={this.onGreet}
          changeLink={(newName) => this.onChangeLinkName(newName)}
          initialLinkName ={this.state.homeLink}
          />
        );
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10">
            <Header homeLink={this.state.homeLink} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10">
            {homeComp}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10">
            <button onClick={() =>this.onChangeUnmounted()} className="btn btn-primary">Un-Mount Home Component</button>
          </div>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));