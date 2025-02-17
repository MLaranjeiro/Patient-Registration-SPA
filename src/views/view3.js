import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function View3() {
  const navigate = useNavigate();
  const [summary, setSummary] = useState({});

  useEffect(() => {
    // Retrieve data from localStorage
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const dob = localStorage.getItem('dob');
    const gender = localStorage.getItem('gender');
    const healthCardNumber = localStorage.getItem('healthCardNumber');

    // Set the data to display in the summary
    setSummary({
      firstName,
      lastName,
      dob,
      gender,
      healthCardNumber,
    });
  }, []); 

  const handleBackToView1 = () => {
    // Clear local storage data
    localStorage.clear();
    
    // Navigate back to View1 (reset the form)
    navigate('/view1');
  };

  return (
    <div>
      <h1>Summary</h1>
      <p><strong>First Name:</strong> {summary.firstName}</p>
      <p><strong>Last Name:</strong> {summary.lastName}</p>
      <p><strong>Date of Birth:</strong> {summary.dob}</p>
      <p><strong>Gender:</strong> {summary.gender}</p>
      <p><strong>Health Card Number:</strong> {summary.healthCardNumber}</p>

      <button onClick={handleBackToView1}>New Registration? Click Here!</button>
    </div>
  );
}

export default View3;