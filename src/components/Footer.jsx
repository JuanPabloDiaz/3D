import React from "react";

const Footer = () => {
  return (
    <div className=" text-center text-secondary pb-4 ">
      Copyright &copy; {new Date().getFullYear()}
      <br />
      <a
        href="https://www.linkedin.com/in/1diazdev"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-purple-500 hover:text-purple-400 transition-colors duration-300 ml-1"
      >
        Juan Diaz
      </a>
    </div>
  );
};

export default Footer;
