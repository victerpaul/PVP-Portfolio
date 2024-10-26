import React from 'react'
export default function Talks(props) {
    console.log("The return type for talks is",props.mode);
  return (
    <div className="my-4">
      <div className="container my-4">
        <h2 style={{fontFamily: '"Lora", serif',fontWeight: 500}}>Invited Talks (last 10 events):
        </h2>
        <div className="table-responsive my-4">
    <table className="table table-bordered text-center " style={{fontFamily: '"Lora", serif',fontWeight: 600,borderColor: props.mode === 'light' ? '#D3D3D3' : '#4d4c4b'}}>
            <thead>
                <tr>
                    <th className="col-1" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>S.no</th>
                    <th className="col-2" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Title</th>
                    <th className="col-3" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Organizer</th>
                    <th className="col-4" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>1</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Statistics of Data Using Numpy, Pandas, Scipy etc. and Hand on</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Training Program on Data Science Using Python, IIIT Kottayam</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>11 July 2024</td>
                </tr>
                <tr>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>2</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Genetic Algorithm: functionality, applications and research perspectives</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>FDP on " Amplifying AI”, IIIT Kottayam</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>31 May 2024</td>
                </tr>
                <tr>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>3</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>a Keynote Address in the International Conference on Computational Intelligence and Digital Technology- 2K24</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Mangalam College Of Engineering
                    </td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>3 May 2024</td>
                </tr>
                <tr>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>4</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Genetic Algorithm Variants – Handson and Research</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>FDP on “Mathematical Computing” at IIIT Kottayam</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>14 December 2023</td>
                </tr>
                <tr>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>5</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>JavaScript All-in-One</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>three-day workshop on Web designing, IIIT Kottayam and Block Resource Centre, Erattupetta</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>1 Sept 2023</td>
                </tr>
                <tr>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>6</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Python for Data Analytics</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>IIIT Kottayam</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>3 July 2023</td>
                </tr>
                <tr>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>7</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Genetic Algorithm Variants - Research Perspective</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>IIIT Kottayam</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>23 May 2023</td>
                </tr>
                <tr>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>8</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Data Analytics and Research Opportunities</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Pondicherry Central University</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>20 October 2022</td>
                </tr>
                <tr>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>9</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Research Publication Types and Literature Survey</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>SERB – Accelerate Vigyan-sponsored Workshop at Indian Institute of Information Technology Kottayam</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>19 July 2022</td>
                </tr>
                <tr>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>10</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Research Paper Publication Process</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Mangalam College of Engineering, Kottayam</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>13 May 2022</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    </div>
  )
}
