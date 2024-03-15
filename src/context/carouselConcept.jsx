import { createContext, useState } from "react";

export const carouselConcept = createContext({
  isInfinite: true,
});

const carouselConceptProvider = ({ children }) => {
  const [isInfinite, setIsInfinite] = useState(true);

  return (
    <carouselConcept.Provider value={{ isInfinite, setIsInfinite }}>
      {children}
    </carouselConcept.Provider>
  );
};

export default carouselConceptProvider;
