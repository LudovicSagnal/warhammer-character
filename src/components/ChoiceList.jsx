import React, { useState } from 'react';

const ChoiceList = ({ choices, selected, onSelectionChange }) => {
  const [selectedItems, setSelectedItems] = useState(selected);

  const handleSelectionChange = (event, choice) => {
    let newSelectedItems = [...selectedItems];
    let currentChoiceSelections = 0;

    for (let i = 0; i < choice.options.length; i++) {
      if (newSelectedItems.includes(choice.options[i])) {
        currentChoiceSelections++;
      }
    }

    if (event.target.checked) {
      if (currentChoiceSelections < choice.quantity) {
        newSelectedItems.push(choice.options[event.target.value]);
      } else {
        const previousIndex = newSelectedItems.findIndex(
          (item) => item === choice.options[event.target.value - choice.quantity]
        );
        newSelectedItems.splice(previousIndex, 1);
        newSelectedItems.push(choice.options[event.target.value]);
      }
    } else {
      const index = newSelectedItems.indexOf(choice.options[event.target.value]);
      if (index > -1) {
        newSelectedItems.splice(index, 1);
      }
    }

    setSelectedItems(newSelectedItems);
    onSelectionChange(newSelectedItems);
  };

  return (
      <ul>
        {choices && choices.map((choice, index) => (
          <li key={index}>
            {choice.options.map((option, optionIndex) => (
              <label key={`${index}-${optionIndex}`}>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(option)}
                  onChange={(event) => handleSelectionChange(event, choice)}
                  value={optionIndex}
                />
                {' ' + option}
                {optionIndex !== choice.options.length - 1 && ' ou '}
              </label>
            ))}
            <span> ( {choice.quantity} au choix )</span>
          </li>
        ))}
      </ul>
  );
};

export default ChoiceList;