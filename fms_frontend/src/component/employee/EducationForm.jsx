import React from "react";

const EducationForm = ({ onEducationSubmit, onFormClose }) => {
  return (
    <div>
      <h2>Add Education Details</h2>
      <div>
        <form onSubmit={onEducationSubmit}>
          <div>
            <label>School / University</label>
            <input type="text" placeholder="School / University" required />
          </div>

          <div>
            <label>Degree</label>
            <input type="text" placeholder="Degree" required />
          </div>

          <div>
            <label>Grade</label>
            <input type="text" placeholder="Grade" required />
          </div>

          <div>
            <label>Passing Year</label>
            <input type="text" placeholder="Passing Year" required />
          </div>

          <div>
            <button type="submit">Submit</button>
            <button type="button" onClick={onFormClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EducationForm;
