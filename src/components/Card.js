import React from "react";
import { Element } from 'react-scroll'
import {useSelector} from "react-redux"
import "./Card.css";

import "bootstrap/dist/css/bootstrap.css";


const Card = () => { 
    const  services = useSelector((state) => state.allServices.services)
  

  return (
    <div>
        {
            services && services.sort((a, b) => (a.service_order > b.service_order) ? 1 : -1).map((service => {

                var isEven = service.service_order % 2 === 0
                return (
                   <Element id={service.id.toString()} key={service.id}>
                    <div className="container">
                    <div className="row">
                   <div className= {`col ${ isEven ? "order-2" : "order-1"}`}>
                   <img className="rounded mx-auto d-block" src = { service.photo} alt="GIS" width="260px" />   
                   </div>
   
                   <div className= {`col ${ isEven ? "order-1" : "order-2"}`}>
                   <img src= {service.icon} alt="" />
                   <h3>{service.title}</h3>    
                   <p className="description1" dangerouslySetInnerHTML={{__html: service.description1}}></p>
                   <div className="description2" dangerouslySetInnerHTML={{__html: service.description2}}>
                   </div>
                           </div> 
                           </div>
   
                </div>
                   </Element>
                )
            }))
        }
    </div>
  );
}

export default Card;
