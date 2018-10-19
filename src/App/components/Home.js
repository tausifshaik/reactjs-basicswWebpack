import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <p> In Home Component!</p>
                <p> my name is {this.props.name}</p>
                <p> my age is {this.props.age}</p>
                <div>
                    <h4>My Hobbies are(using for loop of JS .map(value,key))</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby,key) => <li key={key}>{hobby}</li>)}
                    </ul>
                </div> 
            </div> 
              
        );
    }
}

Home.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    user : PropTypes.object 
}