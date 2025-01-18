import { useState } from "react"; // Importa hook useState
import PropTypes from "prop-types"; // Importa PropTypes para validación de props
import "./Forms.scss"; // Estilos del formulario

// Componente para cada opción seleccionable
const Option = ({ label, checked, onChange }) => (
  <div className="select-option" onClick={onChange}>
    <div className={`checkbox ${checked ? "checked" : ""}`}>
      {checked && <span className="checkmark">✓</span>}
    </div>
    {label}
  </div>
);

Option.propTypes = {
  label: PropTypes.string.isRequired, // Validación de tipo para label
  checked: PropTypes.bool.isRequired, // Validación de tipo para checked
  onChange: PropTypes.func.isRequired, // Validación de tipo para onChange
};

// Componente para cada opción de radio
const RadioOption = ({ label, checked, onChange }) => (
  <label className="radio-option">
    <input type="radio" checked={checked} onChange={onChange} />
    <span className="radio-label">{label}</span>
  </label>
);

RadioOption.propTypes = {
  label: PropTypes.string.isRequired, // Validación de tipo para label
  checked: PropTypes.bool.isRequired, // Validación de tipo para checked
  onChange: PropTypes.func.isRequired, // Validación de tipo para onChange
};

// Componente para mostrar los datos del formulario
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
  }).isRequired, // Validación de tipo para formData
};

// Componente principal del formulario
function Form() {
  const [formData, setFormData] = useState({
    selectedOptions: [], // Estado para opciones seleccionadas
    radioOption: "", // Estado para opción de radio seleccionada
    name: "", // Estado para el nombre
    email: "", // Estado para el email
  });
  const [isSelectOpen, setIsSelectOpen] = useState(false); // Estado para controlar el desplegable

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"]; // Opciones para seleccionar

  // Maneja el cambio de selección en el desplegable
  const handleSelectChange = (option) => {
    setFormData((prev) => ({
      ...prev,
      selectedOptions: prev.selectedOptions.includes(option)
        ? prev.selectedOptions.filter((item) => item !== option)
        : [...prev.selectedOptions, option],
    }));
  };

  // Maneja el cambio de selección en las opciones de radio
  const handleRadioChange = (option) => {
    setFormData((prev) => ({
      ...prev,
      radioOption: option,
    }));
  };

  // Maneja el cambio de valores en los campos de texto
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData); // Muestra los datos del formulario en consola
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__section">
        {/* Contenedor para las opciones desplegables */}
        <div className={`select-container ${isSelectOpen ? "open" : ""}`}>
          <div
            className="select-header"
            onClick={() => setIsSelectOpen(!isSelectOpen)} // Controla la apertura del desplegable
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
                  onChange={() => handleSelectChange(option)} // Actualiza las opciones seleccionadas
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="form__section">
        {/* Contenedor para las opciones de radio */}
        <div className="radio-container">
          {options.map((option) => (
            <RadioOption
              key={option}
              label={option}
              checked={formData.radioOption === option} // Verifica si la opción de radio está seleccionada
              onChange={() => handleRadioChange(option)} // Actualiza la opción seleccionada
            />
          ))}
        </div>
      </div>

      <div className="form__section">
        {/* Contenedor para los campos de entrada */}
        <div className="input-group">
          <div className="input-field">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name} // Valor del campo nombre
              onChange={handleInputChange} // Maneja el cambio en el campo
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email} // Valor del campo email
              onChange={handleInputChange} // Maneja el cambio en el campo
            />
          </div>
          <DisplayArea formData={formData} />{" "}
          {/* Muestra los datos ingresados */}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form; // Exporta el componente Form
