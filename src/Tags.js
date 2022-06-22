import React from "react";
import data from './data.json';
// import './App.css';

class Tags extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            activeCategory: "",
        }
    }
handleClick = (menu) => {
    this.setState({
        activeCategory: menu,
    })
}

render(){
    let categoryName = data.map((menu) => menu.category);
    
    return (
    <div >
        {
            categoryName.map((menu) => (                
            <button 
            key ={menu}
            className={menu === this.activeCategory ? "active":"button"} 
            onClick={() => this.handleClick(menu)}
            >
                {menu}
            </button>            
        ))}
    </div>
    )
    
}
}

export default Tags;