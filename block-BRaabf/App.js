import './App.css';
import React from "react";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
       count:0,
       step:5,
       max:15,
    };
  }

  handleIncrement = () => {
    let {step , max , count} = this.state
    this.setState({
      
      count:
       count + step 
        > max ?
         count :
          count  + step
    })
   }
   handleDecrement = () => {
    let {step , max , count} = this.state
    this.setState({
      
      count:
       count + step 
        > max ?
         count :
          count  - step
    })
   }
   handleReset = () => {
    this.setState({
      count: 0,
    })
   }
  


    render(){ 
      return(
      <>
      <h1>{this.state.count}</h1>
      <div className="allup">
      <div className="div" >
        <h2>steps</h2>
        {
          [5,10,15].map((step)=> <button onClick={()=>{
            this.setState({step:step})
          }} className = {this.state.step === step ? 'active-state':'btn'} >{step}</button>)
        }

      </div>
       <div>
         <h2>Max Value</h2>
        {
          [15,100,200].map((max)=><button onClick={()=>{
            this.setState({max:max})
          }} className = {this.state.max === max ? 'active-state':'btn'} >{max}</button>)
        }
      </div> 
      </div>

      <div>
        <button onClick ={this.handleIncrement} >Increment </button>
        <button onClick ={this.handleDecrement}>Decrement</button>  
        <button onClick ={this.handleReset}>Reset</button>  

      </div>

      </> 
      );
    }
  }


export default App;
