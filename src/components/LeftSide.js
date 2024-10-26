import React from 'react'
import ImgSir from '../images/victer_sir.webp';
export default function LeftSide() {
  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
  <img src={ImgSir} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Dr P. Victer Paul
    </h5>
    <p className="card-text">Assistant Professor, Department of Computer Science and Engg.</p>
    <p className="card-text">Head, Data Analytics and Business Decisions Research Group, IIITK</p>
    <p className="card-text">Indian Institute of Information Technology Kottayam </p>
    <p className="card-text">Valavoor P.O, Pala 
    </p>
    <p className="card-text">Kottayam - 686635, Kerala, India.
    </p>
    <p className="card-text">Email: victerpaul at iiitkottayam dot ac.in / victerpaul at gmail dot com
    </p>
    <p className="card-text">Hello @: 00 91 04822202165 (or) +91 9944913170
    </p>
  </div>
</div>
    </div>
  )
}
