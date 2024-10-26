import React from 'react'

export default function Experience(props) {
  const commonStyle = {
    backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',
    color: props.mode === 'light' ? 'black' : 'white',
    fontWeight: 600,
    fontFamily: '"Lora", serif'
  }
  return (
    <div className="container my-3 table-responsive table-bordered text-center">
      <h2 style={{fontFamily: '"Lora", serif',fontWeight: 500}} className="text-start">Experience</h2>
    <table className="table table-hover my-4" style={{borderColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',backgroundColor: props.mode === 'light' ? '#fef9f7' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>
  <thead >
    <tr style={{backgroundColor: props.mode === 'light' ? '#fef9f7' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>
      <th scope="col" style={commonStyle}>S. No.</th>
      <th scope="col" style={commonStyle}>Designation</th>
      <th scope="col" style={commonStyle}>Institute</th>
      <th scope="col" style={commonStyle}>Duration</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <th style={commonStyle} scope="row">1</th>
      <td style={commonStyle}>Assistant Professor (Gr-I)</td>
      <td style={commonStyle}>Indian Institute of Information Technology Kottayam</td>
      <td style={commonStyle}>Nov 2023 - Present</td>
    </tr>
    <tr>
      <th style={commonStyle} scope="row">2</th>
      <td style={commonStyle}>Assistant Professor (Gr-II)</td>
      <td style={commonStyle}>Indian Institute of Information Technology Kottayam</td>
      <td style={commonStyle}>July 2019 - Oct 2023</td>
    </tr>

    <tr>
      <th style={commonStyle} scope="row">3</th>
      <td style={commonStyle}>Associate Professor</td>
      <td style={commonStyle}>Vignan FSTR (Deemed to be University)</td>
      <td style={commonStyle}>Jun 2017 - May 2019</td>
    </tr>
    <tr>
      <th style={commonStyle} scope="row">4</th>
      <td style={commonStyle}>Associate Professor</td>
      <td style={commonStyle}>Sri Manakula Vinayagar Engg. College (An Autonomous Institute), Puducherry</td>
      <td style={commonStyle}>Jan 2014 - May 2017</td>
    </tr>
    <tr>
      <th style={commonStyle} scope="row">5</th>
      <td style={commonStyle}>Software Engineer</td>
      <td style={commonStyle}>Keane India (now NTTData), Hyderabad</td>
      <td style={commonStyle}>Feb 2008 - Feb 2009</td>
    </tr>
  </tbody>
</table>
    
    
    
    
    
    

    </div>
  )
}
