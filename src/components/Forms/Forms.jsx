import { useState } from "react";
import PropTypes from "prop-types";
import "./Forms.scss";

const Option = ({ label, checked, onChange }) => (
  <div className="select-option" onClick={onChange}>
    <div className={`checkbox ${checked ? "checked" : ""}`}>
      {checked && <span className="checkmark">✓</span>}
    </div>
    {label}
  </div>
);

Option.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

const RadioOption = ({ label, checked, onChange }) => (
  <label className="radio-option">
    <input type="radio" checked={checked} onChange={onChange} />
    <span className="radio-label">{label}</span>
  </label>
);

RadioOption.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

const DisplayArea = ({ formData }) => (
  <div className="display-area">
    {Object.keys(formData).some((key) => formData[key].length > 0) ? (
      <>
        <p>Selected Options: {formData.selectedOptions.join(", ")}</p>
        <p>Radio Selection: {formData.radioOption}</p>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
      </>
    ) : (
      <p className="placeholder">Render the input text information here...</p>
    )}
  </div>
);

DisplayArea.propTypes = {
  formData: PropTypes.shape({
    selectedOptions: PropTypes.arrayOf(PropTypes.string),
    radioOption: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

function Form() {
  const [formData, setFormData] = useState({
    selectedOptions: [],
    radioOption: "",
    name: "",
    email: "",
  });
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const handleSelectChange = (option) => {
    setFormData((prev) => ({
      ...prev,
      selectedOptions: prev.selectedOptions.includes(option)
        ? prev.selectedOptions.filter((item) => item !== option)
        : [...prev.selectedOptions, option],
    }));
  };

  const handleRadioChange = (option) => {
    setFormData((prev) => ({
      ...prev,
      radioOption: option,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__section">
        <div className={`select-container ${isSelectOpen ? "open" : ""}`}>
          <div
            className="select-header"
            onClick={() => setIsSelectOpen(!isSelectOpen)}
          >
            Select
          </div>
          {isSelectOpen && (
            <div className={`select-options ${isSelectOpen ? "open" : ""}`}>
              {options.map((option) => (
                <Option
                  key={option}
                  label={option}
                  checked={formData.selectedOptions.includes(option)}
                  onChange={() => handleSelectChange(option)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="form__section">
        <div className="radio-container">
          {options.map((option) => (
            <RadioOption
              key={option}
              label={option}
              checked={formData.radioOption === option}
              onChange={() => handleRadioChange(option)}
            />
          ))}
        </div>
      </div>

      <div className="form__section">
        <div className="input-group">
          <div className="input-field">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <DisplayArea formData={formData} />

          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
