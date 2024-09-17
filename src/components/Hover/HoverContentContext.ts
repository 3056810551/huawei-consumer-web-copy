import React, { createContext, useContext } from "react";

const HoverContentContext = createContext<{
  hoverContent: React.ReactNode | null;
  setHoverContent: React.Dispatch<React.SetStateAction<React.ReactNode | null>>;
}>({
  hoverContent: null,
  setHoverContent: () => {},
});

const useHoverContent = () => useContext(HoverContentContext);

export { HoverContentContext, useHoverContent };
