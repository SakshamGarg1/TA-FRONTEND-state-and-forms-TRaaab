import './App.css';
import React from 'react';
import faqs from './data.json';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      activeIndex:null,
    }
  }

  render(){
  return (
    <>
      <h1>Accordion FAQ</h1>
      <ul>
        {faqs.map((faq,index) =>( 
        <li>
          <h2 onClick = {()=>{
            this.setState({activeIndex : this.state.activeIndex === index ? null : index })
          }} 
          >
            {faq.Q} {this.state.activeIndex === index ? "👆" : "👇"}
            </h2>

          {index === this.state.activeIndex ? <p>{faq.A}</p> : " "}
        </li> 
        ))}
        

      </ul>

    </>
  );
        }
}

export default App;
