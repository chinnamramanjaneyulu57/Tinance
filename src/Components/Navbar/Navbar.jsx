import React, { Component } from 'react'
import "./Navbar.css"
import { NavMenuItems } from "./NavMenuItems"
import { Link } from 'react-router-dom'


class Navbar extends Component{
    state={clicked:false}
    changeHandler=()=>{
        this.setState({clicked : !this.state.clicked})
    }
    render(){
       return(
        <nav className="Navbar-items">
            <a href='/'>
                <h1 className="navbar-logo">Tinance</h1>
            </a>
           <div className="menu-icon" onClick={this.changeHandler}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
           </div>
           
           <ul className={this.state.clicked ? "navbar-menu active" : "navbar-menu"}>
                {NavMenuItems.map((item, index)=>{
                    return(
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i>
                                {item.title}
                                
                            </Link>
                        </li>

                    )
                })}
                <a href='/signup'><button>Sign Up</button></a>
            </ul>
        </nav>
       )
    }
}
export default Navbar