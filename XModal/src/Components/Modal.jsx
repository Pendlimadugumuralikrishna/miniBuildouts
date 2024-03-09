import React, { useState } from "react";

const Modal = ({ setIsModalOpen, setModalOpenBackground }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleBackgroundClick = () => {
    setIsModalOpen(false);
    setModalOpenBackground(false);
    setFormData((prevData) => ({
      ...prevData,
      username: "",
      email: "",
      phone: "",
      dob: "",
    }));
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  };

  return (
    <div className="modalBackground" onClick={handleBackgroundClick}>
      Modal
      <div
        className="modalContainer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modalHeader">
          <h1>Fill Details</h1>
        </div>
        <div className="modalBody">
          <form>
            <label htmlFor="username">
              <h3>Username:</h3>
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">
              <h3>Email Address:</h3>
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">
              <h3>Phone Number:</h3>
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="dob">
              <h3>Date of Birth:</h3>
            </label>
            <input
              type="Date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />

            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
