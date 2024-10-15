import React, { useState } from 'react';

const list = ["option1", "option2", "option3"]

const DropdownInput = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleInputClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div >
      <input
        type="text"
        value={selectedOption}
        onClick={handleInputClick}
        style={{ cursor: "pointer" }}
        readOnly
        placeholder="Select an option"
      />
      {isDropdownOpen && (
        <ul>
          {
            list.map((item, index) => (
              <li key={index} onClick={() => handleOptionSelect(item)} style={{ cursor: "pointer" }}>{item}</li>
            ))
          }
        </ul>
      )}
    </div>
  );
};

export default DropdownInput;
