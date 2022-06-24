import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
  super(props)
  this.state={
    inputText:"",
    fontSize: 45,

  }
  };
  handleChange = (event) => {
    this.setState({ inputText: event.target.value });
  };
  handleSlider = (event) =>{
    this.setState({fontSize: event.target.value})

  }

  

  render(){
    let styles = [
      "hurricane",
      "inspiration",
      "lato",
      "montserrat",
      "opensans",
      "oswald",
      "palette",
      "poppins",
      "red",
      "roboto",
      "condensed",
      "source",
    ];

    return(
      <>
      <div className="container">
        <h1>Font Tester</h1>
        <div className="header">
      <input
        onChange={this.handleChange}
        type="text"
        placeholder="Type something"
      />
      <input 
         type="range" 
         min="2" max="100" 
         value={this.state.fontSize} 
         onChange={this.handleSlider}
         class="slider" 
         id="myRange"
       />

      
       </div>

       <div className="grid">{
         styles.map((style,i)=> ( 
           <div
           key ={i} className = 'box'>
             <h2>{style.toUpperCase()}</h2>
             <p className={style} style={{fontSize:this.state.fontSize}}>
               {this.state.inputText}
              </p>
           </div>  
         ))}
      </div>
      </div>

      </>
      
    );
  }

}

export default App;
