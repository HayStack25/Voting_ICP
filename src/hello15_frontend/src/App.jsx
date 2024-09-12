import React, { useState } from 'react';

const App = () => {
  // State to store selected candidate and submission message
  const [selectedCandidate, setSelectedCandidate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Handle change in radio button
  const handleVoteChange = (event) => {
    setSelectedCandidate(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedCandidate) {
      setSubmitted(true);
    } else {
      alert('Please select a candidate before submitting.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Vote for Your Candidate</h1>

      {/* Display a message after vote submission */}
      {submitted ? (
        <h2>Thank you for voting for {selectedCandidate}!</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <input
                type="radio"
                value="Candidate A"
                checked={selectedCandidate === 'Candidate A'}
                onChange={handleVoteChange}
              />
              Candidate A
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="Candidate B"
                checked={selectedCandidate === 'Candidate B'}
                onChange={handleVoteChange}
              />
              Candidate B
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="Candidate C"
                checked={selectedCandidate === 'Candidate C'}
                onChange={handleVoteChange}
              />
              Candidate C
            </label>
          </div>
          <button type="submit" style={{ marginTop: '20px' }}>
            Submit Vote
          </button>
        </form>
      )}
    </div>
  );
};

export default App;
