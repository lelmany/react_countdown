import "../styles/Button.css";

function Button({ btnText, handleBtn, color, isDisabled }) {
  return (
    <button
      className="btn"
      onClick={handleBtn}
      style={color}
      disabled={isDisabled}
    >
      {btnText}
    </button>
  );
}

export default Button;
