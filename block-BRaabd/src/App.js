import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active:'basketball',

    }
  }
 render(){
  let label = ['Basketball', 'pubg' ,'Tiger','Phone','Laptop'];
  return(
     <>
  <div>
    {
      label.map((label)=>(
        <button 
        key = {label}
        className ={ this.state.active === label ? 'active' :'' }
        onClick ={()=>{
          this.setState({
            active: label,
          })
        }}
         >
          {label}</button>
      ) ) }

     

  </div>

  <img src={`./assets/${this.state.active}.jpg`} alt={this.state.active}  />
  </>
  );
 }
}

export default App;
