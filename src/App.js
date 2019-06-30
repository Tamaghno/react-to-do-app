import React, { Component } from 'react';
import Todoinput from './Todoinput';
import Todolist from './Todolist';

class App extends Component {
  constructor(props){
    super(props);
    this.state={elements:[],item:""};
}
handlechange=(event)=>
{
  this.setState({item:event.target.value});
  
}
addtolist=()=>
{
  this.setState({elements:this.state.elements.concat([this.state.item]),item:""});

}

removing=(index)=>
{
  let left =this.state.elements.slice(0,index);
  let right=this.state.elements.slice(index+1);
  this.setState({elements:left.concat(right)});
}
  render() {
    return (
      <div>
      <Todoinput change={this.handlechange} value={this.state.item} click={this.addtolist}/>
      <Todolist name={this.state.elements} remove={this.removing}/>
      </div>
    );
  }
}

export default App;