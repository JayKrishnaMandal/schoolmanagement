import React, { useState } from "react";
import "./AddStudent.css";
interface AddStudentProps {
  onCancel: () => void;
}

const AddStudent: React.FC<AddStudentProps> = ({ onCancel }) => {
  const [profilePic, setProfilePic] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    age: 0,
    gender: "",
    phoneNumber: "",
    address: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const previewProfilePic = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const preview = document.getElementById(
      "profile-preview"
    ) as HTMLImageElement;

    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        if (e.target) {
          preview.src = e.target.result as string;
          preview.style.display = "block";
          setProfilePic(e.target.result as string);
        }
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="admission-form">
        <button onClick={onCancel}>Cancel</button>
        <h2>Admission Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="profile-pic" className="profile-upload">
              <input
                type="file"
                id="profile-pic"
                name="profile-pic"
                accept="image/*"
                onChange={previewProfilePic}
                required
              />
              <span>Upload Profile Picture</span>
            </label>
            <img id="profile-preview" src={profilePic} alt="Profile Preview" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first-name">First Name:</label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="middle-name">Middle Name:</label>
              <input
                type="text"
                id="middle-name"
                name="middleName"
                value={formData.middleName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name:</label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="father-name">Father's Name:</label>
              <input
                type="text"
                id="father-name"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mother-name">Mother's Name:</label>
              <input
                type="text"
                id="mother-name"
                name="motherName"
                value={formData.motherName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleSelectChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <select
                id="address"
                name="address"
                value={formData.address}
                onChange={handleSelectChange}
                required
              >
                <option value="">Select Address</option>
                <option value="address1">Address 1</option>
                <option value="address2">Address 2</option>
                <option value="address3">Address 3</option>
              </select>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddStudent;
