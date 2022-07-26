import React from "react";

const Footer = () => {
  return (
    <footer className="fixed-bottom footer bg-dark text-white mt-7 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} Vinay Kumar - NeoSoft
    </footer>
  );
};

export default Footer;
