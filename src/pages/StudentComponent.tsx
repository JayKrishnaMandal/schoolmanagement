import React, { useState } from "react";

// Define the Student interface
interface Student {
  name: string;
  gender: string;
  joined: string;
  image: string;
  class: string;
}

const students: Student[] = [
  {
    name: "John Doe",
    gender: "Male",
    joined: "January 1, 2024",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3VlIHqJmoDG-I8ml40GACuxG2dn671rKfw&s",
    class: "Grade 10",
  },
  {
    name: "Jane Smith",
    gender: "Female",
    joined: "February 15, 2024",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3VlIHqJmoDG-I8ml40GACuxG2dn671rKfw&s",
    class: "Grade 11",
  },
  {
    name: "James Brown",
    gender: "Male",
    joined: "March 10, 2024",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3VlIHqJmoDG-I8ml40GACuxG2dn671rKfw&s",
    class: "Grade 10",
  },
  {
    name: "Emily Johnson",
    gender: "Female",
    joined: "April 5, 2024",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3VlIHqJmoDG-I8ml40GACuxG2dn671rKfw&s",
    class: "Grade 12",
  },
  {
    name: "Michael Wilson",
    gender: "Male",
    joined: "May 20, 2024",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3VlIHqJmoDG-I8ml40GACuxG2dn671rKfw&s",
    class: "Grade 11",
  },
  {
    name: "Emma Davis",
    gender: "Female",
    joined: "June 12, 2024",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3VlIHqJmoDG-I8ml40GACuxG2dn671rKfw&s",
    class: "Grade 10",
  },
  {
    name: "Daniel Wilson",
    gender: "Male",
    joined: "July 3, 2024",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3VlIHqJmoDG-I8ml40GACuxG2dn671rKfw&s",
    class: "Grade 12",
  },
  {
    name: "Olivia Johnson",
    gender: "Female",
    joined: "August 18, 2024",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3VlIHqJmoDG-I8ml40GACuxG2dn671rKfw&s",
    class: "Grade 11",
  },
  {
    name: "William Brown",
    gender: "Male",
    joined: "September 9, 2024",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3VlIHqJmoDG-I8ml40GACuxG2dn671rKfw&s",
    class: "Grade 12",
  },
  {
    name: "Sophia Davis",
    gender: "Female",
    joined: "October 24, 2024",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3VlIHqJmoDG-I8ml40GACuxG2dn671rKfw&s",
    class: "Grade 10",
  },
  // Add more students here
];

const StudentComponent: React.FC = () => {
  const [filteredStudents, setFilteredStudents] = useState<Student[]>(students);
  const [searchInput, setSearchInput] = useState<string>("");

  // Function to filter students based on gender
  const filterStudents = (gender: string) => {
    if (gender === "all") {
      setFilteredStudents(students);
    } else if (gender === "boys") {
      const filtered = students.filter(
        (student) => student.gender.toLowerCase() === "male"
      );
      setFilteredStudents(filtered);
    } else if (gender === "girls") {
      const filtered = students.filter(
        (student) => student.gender.toLowerCase() === "female"
      );
      setFilteredStudents(filtered);
    }
  };
  const editStudent = (name: string) => {
    // Implement edit functionality here, e.g., opening a modal or redirecting to an edit page
    console.log("Edit student: " + name);
  };

  // Function to remove a student from the list
  const removeStudent = (name: string) => {
    const updatedStudents = students.filter((student) => student.name !== name);
    setFilteredStudents(updatedStudents);
  };

  // Function to render student list
  const renderStudents = () => {
    return filteredStudents.map((student, index) => (
      <div key={index} className="student">
        <img
          className="profile-pic"
          src={student.image}
          alt="Profile Picture"
        />
        <div className="student-details">
          <h3>{student.name}</h3>
          <p className="student-info">Gender: {student.gender}</p>
          <p className="student-info">Joined: {student.joined}</p>
        </div>
        <div className="actions">
          <button
            className="action-button"
            onClick={() => editStudent(student.name)}
          >
            <i className="fas fa-edit"></i> Edit
          </button>
          <button
            className="action-button remove-button"
            onClick={() => removeStudent(student.name)}
          >
            <i className="fas fa-trash-alt"></i> Remove
          </button>
        </div>
      </div>
    ));
  };

  // Function to handle search input
  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    const filter = event.target.value.toLowerCase();
    const filtered = students.filter(
      (student) =>
        student.name.toLowerCase().includes(filter) ||
        student.class.toLowerCase().includes(filter)
    );
    setFilteredStudents(filtered);
  };

  return (
    <div className="content">
      <h1>Welcome to the School Management System!</h1>
      <p>
        This is the main content area where you can manage various aspects of
        your school.
      </p>
      <div className="student-info">
        <button className="add-button">+ Add Students</button>
        <span className="student-count total">
          Total Students: {students.length}
        </span>
        <span className="student-count boys">
          Boys: {students.filter((student) => student.gender === "Male").length}
        </span>
        <span className="student-count girls">
          Girls:{" "}
          {students.filter((student) => student.gender === "Female").length}
        </span>
      </div>
      {/* Filter buttons */}
      <div className="filter-buttons">
        <button className="filter-button" onClick={() => filterStudents("all")}>
          Show All Students
        </button>
        <button
          className="filter-button"
          onClick={() => filterStudents("boys")}
        >
          Show Boys
        </button>
        <button
          className="filter-button"
          onClick={() => filterStudents("girls")}
        >
          Show Girls
        </button>
      </div>
      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          id="searchInput"
          value={searchInput}
          onChange={handleSearchInput}
          placeholder="Search for students..."
        />
        <div id="searchDropdown" className="search-dropdown-content"></div>
      </div>
      {/* Student list */}
      <div id="student-list">{renderStudents()}</div>
    </div>
  );
};

export default StudentComponent;
