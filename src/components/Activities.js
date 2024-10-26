import React from 'react'
import Talks from './Talks'

export default function Activities({mode}) {
  console.log("The value of props in activities is",mode);
  return (
    <div className="container my-4">
      <h2 style={{fontFamily: '"Lora", serif',fontWeight: 500}}>Professional Activities</h2>
      <h4 className="my-3" style={{fontFamily: '"Old Standard TT", serif',fontWeight: 700}}>Editorial Board Member
      </h4>
      <ul style={{fontFamily: '"Lora", serif',fontWeight: 600}}>
        <li>Editor-in-chief (Computer Science), International Journal of Communication and Computer Technologies, ISSN - 2278-9723  </li>
        <li>Associate Editorial Board Member in the Journal Recent Advances in Computer Science and Communications [SCOPUS indexed, ISSN: 2666-2566] </li>
        <li>Special Issue Editor: Journal Recent Advances in Computer Science and Communications, ISSN: 2666-2566.  </li>
      </ul>
      <br></br>
      <h4 style={{fontFamily: '"Old Standard TT", serif',fontWeight: 700}} className="my-3">Reviewer  </h4>
      <ul style={{fontFamily: '"Lora", serif',fontWeight: 600}}>
        <li>Applied Soft Computing, Elsevier. [SCI, Scopus Indexed, Impact Factor: 3.541]
        </li>
        <li>Concurrency and Computation: Practice and Experience, John Wiley & Sons Ltd. ISSN: 1532-0634. [SCI indexed, Impact Factor: 1.1]
        </li>
        <li>The Journal of Engineering Technology, American Society for Engineering Education (ASEE). ISSN 0747-9664 [SCI indexed]
        </li>
        <li>International Journal of Swarm Intelligence, Inderscience. ISSN: 2049-4041. [Scopus]
        </li>
      </ul>
      <br></br>
      <h4 style={{fontFamily: '"Old Standard TT", serif',fontWeight: 700}} className="my-3">Additional Responsibilities
      </h4>
      <ul style={{fontFamily: '"Lora", serif',fontWeight: 600}}>
        <li>Warden (Aug’2019 – Till date)
        </li>
        <li>Head, Data Analytics and Business Decisions Research Group, IIITK
        </li>
        <li>Faculty In-charge, Technical Club IIITK (Jan’2020 – Till date)
        </li>
        <li>Member, Disciplinary Action Committee (Jan’2020 – Till date)
        </li>
        <li>Member, Research and Development Committee (May’2023 – Till date)
        </li>
        <li>Publication Co-chair at the International Conference ICITIIT’20, 22 and 23 organized by IIIT Kottayam</li>
        <li>Faculty In-charge, Coders Club IIITK, GDSC, IIITK and Game Dev Club, IIITK</li>
        <li>SPoC IIITK, Kavach 2023, MoE Innovation Cell, Govt. of India</li>
        <li>SPoC IIITK, MANTHAN 2021, Bureau of Police Research and MIC-AICTE, Govt. of India
        </li>
        <li>SPoC IIITK, Smart India Hackathon 2020 and 2022 organized by the Ministry of Education's Innovation Cell, AICTE
        </li>
        <li>SPoC Infosys Springboard IIITK
        </li>
        <li>Program Coordinator, Coursera - Campus Response Program for IIITK
        </li>
      </ul>
      <br></br>
      <h3 style={{fontFamily: '"Old Standard TT", serif',fontWeight: 700}} className="my-2">External Responsibities</h3>
      <ul style={{fontFamily: '"Lora", serif',fontWeight: 600}}>
        <li>Member of the Board of Studies - Department of Information Technology and Computer Science and Business Systems, SMVEC (An Autonomous Institute), Puducherry.
        </li>
        <li>Member of the Board of Studies - Department of Computer Science and Technology, Madanapalle Institute of Technology & Science, Madanapalle, Andhra Pradesh
        </li>
        <li>Member of Academic Expert for Industry Alumni Advisory Board (IAAB) - Department of Computer Science and Technology, Madanapalle Institute of Technology & Science, Madanapalle, Andhra Pradesh
        </li>
        <li>Acted as an Indian examiner for PhD thesis evaluation and Oral Examination Board member for the Public Viva Voce Examination organized at Pondicherry Central University, Anna University, Chennai, VIT, Chennai and Satyabhama Institute of Science & Technology, Chennai.
        </li>
        <li>Acted as an External DC member for scholars - VIT Vellore, SRM Institute of Science and Technology, Chennai</li>
        <li>External Expert member – Faculty Recruitment Panel at VIT Vellore.
        </li>
      </ul>
      <br></br>
      <h3 style={{fontFamily: '"Old Standard TT", serif',fontWeight: 700}} className="my-1">Students Achievements
      </h3>
      <ul style={{fontFamily: '"Lora", serif',fontWeight: 600}}>
        <li>Mentored/supported students team to achieve prestigious feats (selected few),<ul>
            <li>Two teams of students bagged 1st prize in the prestigious Smart India Hackathon 2022 with a cash award of Rs. 1 Lakh for each team.
            </li>
            <li>A team of students stood 2nd all over India in the prestigious Smart India Hackathon 2020 with a cash award of Rs. 75,000.
            </li>
            </ul></li>
            <li>Coordinating Coursera Campus Response Program for IIIT Kottayam to leverage the online learning facility.
            <ul>
                <li>Students/Learners Joined 	- 323</li>
                <li>Certification Completions	- 468</li>
            </ul>
            </li>
            <li>Coordinated the certification course from Google Cloud Career Readiness Program under the stream of Data Analytics to onboard the students of IIITK to the program under Google Inc.
            </li>
      </ul>
      <br></br>
      <Talks mode={mode}/>
    </div>
  )
}

