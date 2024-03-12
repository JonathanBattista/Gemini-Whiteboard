import { useState } from "react";
import Header from "../../../components/Header/Header";
import { Hero } from "../../../components/Hero/Hero";
import { Footer } from "../../../components/Footer/Footer";
import { Result } from "../../../components/Result/Result";

const Homepage = () => {
  const [selectedCategory, setSelectedCategory] = useState("javascript");
  const [geminiSolution, setGeminiSolution] = useState(null);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleGeminiSolution = (solution) => {
    setGeminiSolution(solution);
  };

  return (
    <>
      <Header onSelectCategory={handleCategoryChange} />
      <Hero category={selectedCategory} />
      <Result geminiSolution={geminiSolution} />
      <Footer />
    </>
  );
};

export { Homepage };
