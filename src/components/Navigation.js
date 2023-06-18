import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component{
    state = {clicked:false};
    handlerClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            
            <nav>
                <Link to="/" ><img src="Logo.png" alt="Logo" className="logoNav"></img></Link>
                <div >
                    <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li className="active"> <Link to="/" className="text"> Home</Link> </li>
                        <li> <Link to="/about" className="text"> About</Link> </li>
                        <li> <Link to="/login" className="text"> <i className="fa fa-user-circle"></i> Login</Link> </li>
                    </ul>
                </div>
    
                <div id="mobile" onClick={this.handlerClick}>
                    <i id ="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
                    </i>
    
                </div>
    
            </nav>        
           
        )
    }
    
}

export default Navigation;