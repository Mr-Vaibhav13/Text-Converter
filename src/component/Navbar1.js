import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function Navbar1(props) {
  
  
  return (
    <div>
      <nav className={`navbar bg-${props.mode} data-bs-theme=${props.mode}`}>
      <div className="container-fluid">
    <a className="navbar-brand" href="#" style ={props.style}>{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style ={props.style}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style ={props.style}>Link</a>
        </li>
       
        
      </ul>
      
      <div className={`form-check form-switch text-${props.mode==='light'?'dark' : 'light'}`}>
      <input className="form-check-input"  onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode} Mode is on</label>
      </div>

    </div>
  </div>
</nav>


    </div>
  )
}

Navbar1.propTypes = {
    title: PropTypes.string,
};

Navbar1.defaultProps = {
    title: 'hello',
  }
