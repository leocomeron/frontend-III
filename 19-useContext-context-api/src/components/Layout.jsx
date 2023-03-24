import React, { useContext } from "react";
import ThemeContext from "../context";

const Layout = ({ children, theme }) => {
  /* Buscando datos del contexto global, por medio del Hook useContext() */
  // const { theme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.font }}>
      {children}
    </div>
  );
};

export default Layout;
