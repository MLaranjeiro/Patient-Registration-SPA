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
      setError('Invalid Health Card Number. Please ensure it passes MOD 10.');
      return;
    }

    setError('');
    navigate('/view3'); // Proceed to View 3
  };

  //Mod10 Check for validating Health Card Number
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
  
}