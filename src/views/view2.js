import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function View2() {
  const [dob, setDob] = useState('');
  const [healthCardNumber, setHealthCardNumber] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
    <div>
      <h1>View 2: Enter Your Details</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date of Birth:
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Health Card Number:
          <input
            type="text"
            value={healthCardNumber}
            onChange={(e) => setHealthCardNumber(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default View2;
