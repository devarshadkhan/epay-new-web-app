import Navbar from "@/components/Navbar/Navbar";
import { CssBaseline, Toolbar } from "@mui/material";
import React from "react";

const CustomLayout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Toolbar />

      <Navbar />
      {children}
    </>
  );
};

export default CustomLayout;
