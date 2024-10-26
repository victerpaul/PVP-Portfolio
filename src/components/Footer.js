import React from 'react'
import VisitorCountEmbed from './VisitorCountEmbed';
import WorldMap from './WorldMap';
export default function Footer(props) {
  console.log("The props for footer is", props.mode);
  return (
    <div className="container-fluid" style={{ backgroundColor: "#000000" }}>
      <div className="container footer-row d-flex flex-column flex-md-row align-items-center">
        <div className="col-md-6 mb-2 d-flex justify-content-center align-items-center w-1">
       
          <VisitorCountEmbed />
        
        </div>
        <div className="col-md-6 mb-2 d-flex justify-content-center align-items-center ">
        
          <WorldMap />
          
        </div>
      </div>
    </div>
  );
}