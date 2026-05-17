import React, { useState } from "react";
import axios from "axios";

function CandidateForm() {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    skills:"",
    experience:"",
    bio:""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      "https://candidate-shortlisting-a7ro.onrender.com/api/candidates",
      {
        ...formData,
        skills: formData.skills.split(",")
      }
    );

    alert("Candidate Added");
  };

  return (
    <div className="card">

      <h2>Add Candidate</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="text"
          name="skills"
          placeholder="React, Node.js"
          onChange={handleChange}
        />

        <input
          type="number"
          name="experience"
          placeholder="Experience"
          onChange={handleChange}
        />

        <textarea
          rows="4"
          name="bio"
          placeholder="Candidate Bio"
          onChange={handleChange}
        />

        <button type="submit">
          Add Candidate
        </button>

      </form>

    </div>
  );
}

export default CandidateForm;