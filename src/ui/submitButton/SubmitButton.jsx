import "../../style/ui/submitButton/submitButton.css";

function SubmitButton({ innerText, width }) {
  return (
    <button style={{ width }} type="submit">
      {innerText}
    </button>
  );
}

export default SubmitButton;
