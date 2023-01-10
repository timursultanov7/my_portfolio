import React, { createContext, useState } from "react";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  console.log(isNavOpen);

  const handleMobileNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <NavContext.Provider value={{ isNavOpen, setIsNavOpen, handleMobileNav }}>
      {children}
    </NavContext.Provider>
  );
};
