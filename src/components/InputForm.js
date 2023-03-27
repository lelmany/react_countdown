import "../styles/InputForm.css";

function InputForm({ text, value, handleChange }) {
  return (
    <div className="inputForm">
      <input
        className="inputField"
        min="0"
        placeholder={text}
        value={value}
        onChange={handleChange}
        type="number"
      />
    </div>
  );
}

export default InputForm;
