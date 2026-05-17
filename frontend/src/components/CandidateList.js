import React, { useEffect, useState } from "react";
import axios from "axios";

function CandidateList() {

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {

    const res = await axios.get(
      "https://candidate-shortlisting-a7ro.onrender.com/api/candidates"
    );

    setCandidates(res.data);
  };

  return (
    <div className="card">

      <h2>Candidate Profiles</h2>

      {
        candidates.map((candidate,index)=>(

          <div className="candidate-card" key={index}>

            <h3>{candidate.name}</h3>

            <p>
              <strong>Email:</strong>
              {" "}
              {candidate.email}
            </p>

            <p>
              <strong>Experience:</strong>
              {" "}
              {candidate.experience} years
            </p>

            <div className="skills">

              {
                candidate.skills.map((skill,i)=>(

                  <span className="skill" key={i}>
                    {skill}
                  </span>

                ))
              }

            </div>

            <p style={{marginTop:"15px"}}>
              <strong>Bio:</strong>
              {" "}
              {candidate.bio}
            </p>

          </div>

        ))
      }

    </div>
  );
}

export default CandidateList;