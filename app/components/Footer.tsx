"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedin, FaXTwitter, FaInstagram, FaEnvelope } from "react-icons/fa6";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const pathname = usePathname();

  // Show footer only on selected pages
  if (!["/", "/about"].includes(pathname)) return null;

  return (
    <footer className="bg-white text-sky-800 border-t-4 pt-4">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Company Section */}
        <div>
          <h3 className="text-2xl font-bold mb-3">ThinkViL</h3>
          <p className="text-gray-600 font-medium px-1">
            The platform promotes visual learning through interactive simulations and innovative educational approaches.
          </p>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 px-1 font-bold">
            {["Physics", "Mathematics", "Chemistry"].map((title, index) => (
              <li key={index}>
                <Link
                  href={`/simulations/${title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-blue-600 transition duration-200 hover:underline"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Contact Us</h3>
          <p className="text-gray-600 font-medium mb-4">
            Have any questions or feedback? Reach out to us through email.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=contact.thinkvil@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition transform hover:scale-105 duration-300 ease-out font-bold px-1"
          >
            <FaEnvelope size={32} />
            <span>Email Us</span>
          </a>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mb-4 px-1">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/thinkvil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ThinkViL on LinkedIn"
              className="transition transform hover:scale-105 duration-300 ease-out"
            >
              <FaLinkedin size={32} className="text-blue-700 hover:text-blue-800" />
            </a>
            
            {/* X (formerly Twitter) */}
            <a
              href="https://x.com/ThinkViL?t=wDIuB2cpwzuqc0nYuhqrsQ&s=08"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ThinkViL on X"
              className="transition transform hover:scale-105 duration-300 ease-out"
            >
              <FaXTwitter size={32} className="text-black hover:text-gray-700" />
            </a>
                        
            {/* Instagram */}
            <a
              href="https://www.instagram.com/thinkvil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ThinkViL on Instagram"
              className="transition transform hover:scale-105 duration-300 ease-out"
            >
              <FaInstagram
                size={32}
                className="text-white bg-red-600 rounded-xl"
              />
            </a>    
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 text-white text-center py-4 mt-6">
        <p>© 2025 ThinkViL. All rights reserved.</p>
      </div>
    </footer>
  );
}
