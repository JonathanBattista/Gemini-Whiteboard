const Result = ({ geminiSolution }) => {
  return (
    <div>
      <h2>Google Gemini Solution</h2>
      {geminiSolution ? (
        <pre>{JSON.stringify(geminiSolution, null, 2)}</pre>
      ) : (
        <p>No solution from Google Gemini yet</p>
      )}
    </div>
  );
};

export { Result };
