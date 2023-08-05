const FormrowSelect = ({ name, labelText, value, handleChange, list }) => {
  return (
    <div className="formrow">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        className="form-select"
        onChange={handleChange}
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue} className="form-option">
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormrowSelect;
