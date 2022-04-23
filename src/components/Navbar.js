import React from "react";
import {Link} from 'react-scroll'
import {useSelector} from "react-redux"

import "./Navbar.css";


const Navbar = ()=> {

    const  services = useSelector((state) => state.allServices.services)

  return (
    <header>
      <nav className="navbar">
         
       {
        services && services.sort((a, b) => (a.service_order > b.service_order) ? 1 : -1).map((service => (
            <Link 
            to={service.id.toString()} 
            spy={true} 
            smooth={true} 
            duration={500} 
            className='some-class' 
            activeClass='some-active-class'
            key={service.id}
          >
           {service.title}
          </Link>      
            )
        ))
       }
        
          
      </nav>
    </header>
  );
}

export default Navbar;
