import React, { Component } from 'react';
import Todoitem from './Todoitem';
class Todolist extends Component{
    render(){
        return(
            <div>
                {
                    this.props.name.map((element,index)=> <Todoitem remove={this.props.remove} element={element} key={element} index={index}/>)
                }
                </div>
        );
    }
}
export default Todolist;