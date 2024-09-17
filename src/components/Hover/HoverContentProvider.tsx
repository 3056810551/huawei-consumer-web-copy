import React, { useState } from "react";
import { HoverContentContext } from "./HoverContentContext";

const HoverContentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [hoverContent, setHoverContent] = useState<React.ReactNode | null>(
    null,
  );

  return (
    <HoverContentContext.Provider value={{ hoverContent, setHoverContent }}>
      {children}
    </HoverContentContext.Provider>
  );
};

export default HoverContentProvider;
