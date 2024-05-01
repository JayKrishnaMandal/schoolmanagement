import React from "react";

interface Props {
  student: {
    name: string;
    gender: string;
    joined: string;
    image: string;
    class: string;
  };
  onCancel: () => void;
}

const StudentDetails: React.FC<Props> = ({ student, onCancel }) => {
  return (
    <div className="student-details-container">
      <div className="student-details-content">
        <img
          className="profile-pic"
          src={student.image}
          alt="Profile Picture"
        />
        <div className="student-details">
          <h2>{student.name}</h2>
          <p>Gender: {student.gender}</p>
          <p>Class: {student.class}</p>
          <p>Joined: {student.joined}</p>
        </div>
      </div>
      <button className="close-button" onClick={onCancel}>
        Close
      </button>
    </div>
  );
};

export default StudentDetails;
