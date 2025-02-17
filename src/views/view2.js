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

}