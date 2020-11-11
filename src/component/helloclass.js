import React from 'react';


class HelloClass extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            counter: 2
        }
        
        this.increment = this.increment.bind(this)

    }

    increment = function(){
        this.setState({
            counter: this.state.counter + 2
        })
    }

/*     increment=()=>{
        this.setState({
            counter: this.state.counter + 2
        })
    } */

    render() { 
        return ( 
            <div>
                <button onClick={this.increment}>Count {this.state.counter}</button>
            </div>
         )
    }
}
 
export default HelloClass;