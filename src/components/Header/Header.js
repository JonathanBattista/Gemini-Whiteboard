const Header = ({ onSelectCategory }) => {
  const handleChange = (event) => {
    onSelectCategory(event.target.value);
  };

  return (
    <div>
      <h1>Gemini Whiteboards</h1>
      <div>
        <h2>Select your category</h2>
        <select onChange={handleChange}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="csharp">C#</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
