function ResetButton({ resetCount, count, buttonStyle }) {
  return (
    !!count && (
      <div>
        <button style={buttonStyle} onClick={resetCount}>
          Reset
        </button>
      </div>
    )
  );
}

export default ResetButton;
