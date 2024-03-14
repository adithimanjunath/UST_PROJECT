import React, { useState } from 'react';
import "./BudgetEstimation.css";

const BudgetEstimation = () => {
  const [renovationType, setRenovationType] = useState('');
  const [area, setArea] = useState('');
  const [budget, setBudget] = useState(0);
  const [error, setError] = useState('');
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleRenovationTypeChange = (e) => {
    setRenovationType(e.target.value);
    setSelectedOptions({});
  };

  const handleAreaChange = (e) => {
    const value = e.target.value;
    if (value <= 0) {
      setError('Please enter a positive value for area.');
    } else {
      setArea(value);
      setError('');
    }
  };

  const handleOptionChange = (e) => {
    const { name, checked } = e.target;
    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      [name]: checked
    }));
  };

  const handleCalculateBudget = () => {
    let baseCost = 0;
  
    if (!renovationType || !area) {
      setError('Please select renovation type and area.');
      return;
    } else {
      setError('');
    }
  
    let optionsSelected = false;
  
    if (renovationType === 'livingRoom') {
      baseCost = parseInt(area) * 50; 
      Object.entries(selectedOptions).forEach(([optionName, isSelected]) => {
        if (isSelected) {
          optionsSelected = true;
          if (optionName === 'lighting') {
            baseCost += 120;
          } else if (optionName === 'flooring') {
            baseCost += parseInt(area) * 20; 
          } else if (optionName === 'windowTreatments') {
            baseCost += 500; 
          }
        }
      });
    } else if (renovationType === 'garden') {
      baseCost = parseInt(area) * 30;
      Object.entries(selectedOptions).forEach(([optionName, isSelected]) => {
        if (isSelected) {
          optionsSelected = true;
          if (optionName === 'landscaping') {
            baseCost += parseInt(area) * 10; 
          } else if (optionName === 'paving') {
            baseCost += parseInt(area) * 15; 
          } else if (optionName === 'irrigation') {
            baseCost += 800;
          }
        }
      });
    } else if (renovationType === 'kitchen') {
      baseCost = parseInt(area) * 70; 
      Object.entries(selectedOptions).forEach(([optionName, isSelected]) => {
        if (isSelected) {
          optionsSelected = true;
          if (optionName === 'flooring') {
            baseCost += 2000; 
          } else if (optionName === 'cabinets') {
            baseCost += 1500; 
          } else if (optionName === 'countertop') {
            baseCost += 1000; 
          }
        }
      });
    }

    if (!optionsSelected) {
      setError('Please select at least one option.');
      return;
    }
  
    setBudget(baseCost);
  };
  
  return (
    <div className="budget-estimation-container">
      <h2 className="budget-estimation-heading">Budget Estimation</h2>
      <label className="budget-estimation-label">
        Renovation Type:
        <select value={renovationType} onChange={handleRenovationTypeChange} className="budget-estimation-select">
          <option value="">Select</option>
          <option value="livingRoom">Living Room</option>
          <option value="garden">Garden</option>
          <option value="kitchen">Kitchen</option>
        </select>
      </label>
      <br />
      <label className="budget-estimation-label">
        Area (in square meters):
        <input type="number" value={area} onChange={handleAreaChange} className="budget-estimation-input" />
      </label>
      <br />
      {renovationType && (
        <div id={renovationType + 'Options'} className="budget-estimation-options">
          {renovationType === 'livingRoom' && (
            <>
              <label className="budget-estimation-option">
                <input type="checkbox" name="lighting" checked={selectedOptions.lighting} onChange={handleOptionChange} /> Lighting
              </label>
              <label className="budget-estimation-option">
                <input type="checkbox" name="flooring" checked={selectedOptions.flooring} onChange={handleOptionChange} /> Flooring
              </label>
              <label className="budget-estimation-option">
                <input type="checkbox" name="windowTreatments" checked={selectedOptions.windowTreatments} onChange={handleOptionChange} /> Window Treatments
              </label>
            </>
          )}
          {renovationType === 'garden' && (
            <>
              <label className="budget-estimation-option">
                <input type="checkbox" name="landscaping" checked={selectedOptions.landscaping} onChange={handleOptionChange} /> Landscaping
              </label>
              <label className="budget-estimation-option">
                <input type="checkbox" name="paving" checked={selectedOptions.paving} onChange={handleOptionChange} /> Paving
              </label>
              <label className="budget-estimation-option">
                <input type="checkbox" name="irrigation" checked={selectedOptions.irrigation} onChange={handleOptionChange} /> Irrigation
              </label>
            </>
          )}
          {renovationType === 'kitchen' && (
            <>
              <label className="budget-estimation-option">
                <input type="checkbox" name="flooring" checked={selectedOptions.flooring} onChange={handleOptionChange} /> Flooring
              </label>
              <label className="budget-estimation-option">
                <input type="checkbox" name="cabinets" checked={selectedOptions.cabinets} onChange={handleOptionChange} /> Cabinets
              </label>
              <label className="budget-estimation-option">
                <input type="checkbox" name="countertop" checked={selectedOptions.countertop} onChange={handleOptionChange} /> Countertop
              </label>
            </>
          )}
        </div>
      )}
      <br />
      <button onClick={handleCalculateBudget} className="budget-estimation-button">Calculate Budget</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <br />
      {budget > 0 && <p className="budget-estimation-total">Total Budget: €{budget}</p>}
    </div>
  );
};

export default BudgetEstimation;
