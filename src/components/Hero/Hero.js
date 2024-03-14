import React, { useState, useEffect } from "react";

const Hero = ({ category, onGeminiSolution }) => {
  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const genAI = new GoogleGenerativeAI("PLACEHOLDER");
  console.log(genAI);
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [prompts, setPrompts] = useState([]);

  const loadPrompts = async () => {
    try {
      const response = await import(
        `../../assets/data/${category}prompts.json`
      );
      setPrompts(response.default);
    } catch (error) {
      console.error("Error loading prompts:", error);
    }
  };

  const getRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setCurrentPrompt(prompts[randomIndex]);
  };
  const askGeminiForSolution = async () => {
    try {
      const response = await fetch(genAI, {
        method: "POST",
        body: JSON.stringify({
          prompt: currentPrompt.title,
          category: category,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      onGeminiSolution(data.solution);
    } catch (error) {
      console.error("Error asking Gemini for solution:", error);
    }
  };
  useEffect(() => {
    loadPrompts();
  }, [category]);

  useEffect(() => {
    if (prompts.length > 0) {
      getRandomPrompt();
    }
  }, [prompts]);
  return (
    <div>
      <h1>{category}</h1>
      <button onClick={loadPrompts}>Load Prompts</button>
      <button onClick={getRandomPrompt}>Get Random Prompt</button>
      {currentPrompt && (
        <div>
          <h2>{currentPrompt.title}</h2>
          <p>{currentPrompt.description}</p>
        </div>
      )}
      <button onClick={askGeminiForSolution}>
        Ask Gemini for the solution
      </button>
    </div>
  );
};

export { Hero };
