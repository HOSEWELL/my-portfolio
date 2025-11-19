import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer id="contact" className="bg-gray-900 text-white py-10">
        <div className="container mx-auto text-center">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/in/hosewell-karanja-47750a316?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMEYUuQFNSZmKmxNUjyvB0A%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition duration-300"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="mailto:hosewellkaranja@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition duration-300"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://github.com/HOSEWELL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition duration-300"
          >
            <FaGithub size={24} />
          </a>
          </div>
          {/* Email Address */}
          <p className="text-lg text-gray-300 mb-4">hosewellkaranja@gmail.com</p>
          {/* Footer Text */}
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Personal Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
