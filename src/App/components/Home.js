import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            age : props.age,
            homeLink : props.initialLinkName
        };
        //this.age = props.age;
        console.log("constructor");
    }
    componentWillMount(){
        console.log("component will mount");
    }
    componentDidMount(){
        console.log("component did mount");
    }
    componentWillReceiveProps(nextProps){
        console.log("component will recieve props",nextProps);
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("should component update",nextProps,nextState);
        return true;
    }
    componentWillUpdate(nextProps, nextState){
        console.log("component will update",nextProps,nextState);
    }
    componentDidUpdate(prevProps,prevState){
        console.log("component did update",prevProps,prevState);
    }
    componentWillUnmount(){
        console.log("component will unMount");
    }
    makeOlder(){
        this.setState({
            age: this.state.age + 3
        });
        //this.age += 3;
        //console.log(this.age);
    }
    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }
    HandleChange(event){
        this.setState({
            homeLink: event.target.value
        })
    }
    render(){
        return(
            <div>
                <p> In Home Component!</p>
                <p> my name is {this.props.name}</p>
                <p> my age is {this.state.age}</p>
                <button onClick={this.makeOlder.bind(this)} className="btn btn-primary">Make me Older!</button>
               {/*<button onClick={() => this.makeOlder()} className="btn btn-primary">Make me Older!</button> */}
               <br/><hr/>
               <button onClick={this.props.greet} className="btn btn-primary">Greet!</button>
               <hr/>
               <input type="text" 
                      value={this.state.homeLink}
                      onChange={(event) => {this.HandleChange(event)}}/>
               <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div> 
              
        );
    }
}

Home.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    initialLinkName : PropTypes.string
}