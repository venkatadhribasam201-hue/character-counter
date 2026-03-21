function CounterDisplay({ text }) {
  const characterCount = text.length;
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const characterWithoutSpaces = text.replace(/\s/g, "").length;

  return (
    <div className="stats">
      <p>Characters: {characterCount}</p>
      <p>Words: {wordCount}</p>
      <p>Characters (no spaces): {characterWithoutSpaces}</p>
    </div>
  );
}

export default CounterDisplay;
