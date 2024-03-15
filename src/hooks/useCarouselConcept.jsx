import { useContext } from "react";

import { carouselConcept } from "../context/carouselConcept";

const usecarouselConcept = () => useContext(carouselConcept);

export default usecarouselConcept;
