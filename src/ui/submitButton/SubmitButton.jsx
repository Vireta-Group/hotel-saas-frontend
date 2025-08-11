import "../../style/ui/submitButton/submitButton.css";

function SubmitButton({ innerText, width }) {
  return (
    <button style={{ width }} className="btn" type="submit">
      {innerText}
    </button>
  );
}

export default SubmitButton;
