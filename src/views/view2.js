import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

function View2() {
  const [dob, setDob] = useState('');
  const [healthCardNumber, setHealthCardNumber] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const today = format(new Date(), 'yyyy-MM-dd');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Date of Birth, Health Card Number, and Gender
    if (!dob || !healthCardNumber || !gender) {
      setError('Please fill in all fields.');
      return;
    }

    if (!/^\d{10}$/.test(healthCardNumber)) {
      setError('Health Card Number must be exactly 10 digits.');
      return;
    }

    if (!mod10Check(healthCardNumber)) {
      setError('Invalid Health Card Number.');
      return;
    }

    // In View2, store the data in localStorage after form submission
    localStorage.setItem('dob', dob);
    localStorage.setItem('gender', gender);
    localStorage.setItem('healthCardNumber', healthCardNumber);

    setError('');
    navigate('/view3'); // Proceed to View 3
  };

  //Mod10 Check for validating Health Card Number, assitance from https://worldemr.org/modulus10-number-check-function-for-validating-health-card-numbers-input/
  const mod10Check = (number) => {
    let sum = 0;
    let shouldDouble = false; // Start with the rightmost digit (not doubled)
  
    // Loop over digits in the health card number starting from the rightmost digit
    for (let i = number.length - 1; i >= 0; i--) {
      let digit = parseInt(number.charAt(i));
  
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9; // Adjust if doubling results in a number greater than 9
        }
      }
  
      sum += digit;
      shouldDouble = !shouldDouble; // Alternate between doubling and not doubling
    }
  
    return sum % 10 === 0; // Valid if the sum is divisible by 10
  };
 
  return (
    <div className="container">
      <h1>Enter Your Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            value={dob}
            max={today}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Health Card Number:</label>
          <input
            type="text"
            value={healthCardNumber}
            onChange={(e) => setHealthCardNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {error && <p className="error">{error}</p>}
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default View2;
