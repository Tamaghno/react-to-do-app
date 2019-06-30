import React, { Component } from 'react';
class Todoinput extends Component{
 
    render(){
     return(
         <div>
         <input type="text" value={this.props.value} onChange={this.props.change}></input>
         <button onClick={this.props.click}>Add to List</button>

        </div> 
     );
 }   
}
export default Todoinput;