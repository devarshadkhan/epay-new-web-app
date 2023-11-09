import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { CssBaseline, Toolbar } from "@mui/material";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CssBaseline />
      <Toolbar />
      <Navbar />
      <body>{children}</body>
    </html>
  );
}
