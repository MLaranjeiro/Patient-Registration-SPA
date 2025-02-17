import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function View1() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  // Handle form submission + stops from refreshing the page
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate empty input
    if (!firstName.trim() || !lastName.trim()) {
      alert('Both fields are required.');
      return;
    }
    // Validate input with alphabets only using regex
    if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
      alert('Names can only contain alphabets.');
      return;
    }

    // Store data in localStorage so data can be viewed in view 3 when displaying summary
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);

    navigate('/view2');
  };

  return (
    <div>
      <h1>View 1: Enter Your Name</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default View1;