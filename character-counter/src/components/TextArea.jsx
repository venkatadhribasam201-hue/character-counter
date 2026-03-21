function TextArea({ text, setText }) {
  return (
    <textarea
      placeholder="Type something here..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      rows="6"
    />
  );
}

export default TextArea;
