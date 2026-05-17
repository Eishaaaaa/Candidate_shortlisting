import React, { useState } from "react";
import axios from "axios";

function JobForm() {

  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "https://candidate-shortlisting-a7ro.onrender.com/api/match",
      {
        requiredSkills: skills.split(","),
        minExperience: experience
      }
    );

    console.log(res.data);

    alert("Check Console");
  };

  return (
    <div className="card">

      <h2>Job Requirements</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Required Skills"
          onChange={(e)=>setSkills(e.target.value)}
        />

        <input
          type="number"
          placeholder="Minimum Experience"
          onChange={(e)=>setExperience(e.target.value)}
        />

        <button type="submit">
          Shortlist Candidates
        </button>

      </form>

    </div>
  );
}

export default JobForm;