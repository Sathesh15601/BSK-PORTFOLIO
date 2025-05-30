import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sathesh Kumar. All rights reserved.
        </p>

        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/Sathesh15601"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fuchsia-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/YOUR-LINKEDIN-ID"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fuchsia-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sathesh@example.com"
            className="hover:text-fuchsia-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
