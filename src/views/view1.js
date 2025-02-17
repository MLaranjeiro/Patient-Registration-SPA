import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function View1() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState(''); // Add error state
  const navigate = useNavigate();

  // Handle form submission + stops from refreshing the page
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate empty input
    if (!firstName.trim() || !lastName.trim()) {
      setError('Both fields are required.'); 
      return;
    }
    
    // Validate input with alphabets only using regex
    if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
      setError('Names should contain only letters.'); 
      return;
    }

    // Store data in localStorage so data can be viewed in view 3 when displaying summary
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);

    setError(''); // Clear error message if validation passes
    navigate('/view2');
  };

  return (
    <div className="container">
      <h1>Enter Your Name</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        {error && <p className="error">{error}</p>}
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default View1;
