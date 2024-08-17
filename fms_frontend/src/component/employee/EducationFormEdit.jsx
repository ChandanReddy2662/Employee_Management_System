import React, { useState } from "react";

const EducationFormEdit = ({ editData, onEducationEditUpdate, onFormEditClose }) => {
  const [schoolUniversity, setSchoolUniversity] = useState(editData["SchoolUniversity"]);
  const [degree, setDegree] = useState(editData["Degree"]);
  const [grade, setGrade] = useState(editData["Grade"]);
  const [passingOfYear, setPassingOfYear] = useState(editData["PassingOfYear"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEducationEditUpdate(editData, e);
  };

  return (
    <div>
      <h2>Edit Education Details</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="schoolUniversity">School / University</label>
          <input
            id="schoolUniversity"
            type="text"
            placeholder="School / University"
            required
            value={schoolUniversity}
            onChange={(e) => setSchoolUniversity(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="degree">Degree</label>
          <input
            id="degree"
            type="text"
            placeholder="Degree"
            required
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="grade">Grade</label>
          <input
            id="grade"
            type="text"
            placeholder="Grade"
            required
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="passingOfYear">Passing Of Year</label>
          <input
            id="passingOfYear"
            type="text"
            placeholder="Passing Of Year"
            required
            value={passingOfYear}
            onChange={(e) => setPassingOfYear(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">Update</button>
          <button type="button" onClick={onFormEditClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EducationFormEdit;
