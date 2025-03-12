"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();

  // Show footer only on selected pages
  if (!["/", "/about"].includes(pathname)) return null;

  return (
    <footer className="bg-white text-sky-800 border-t-4 pt-4">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Company Section */}
        <div>
          <h3 className="text-2xl font-bold mb-3">ThinkViL</h3>
          <p className="text-gray-600 font-medium">
            The platform promotes visual learning through interactive simulations and innovative educational approaches.
          </p>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Solutions</h3>
          <ul className="space-y-2 px-3 font-bold">
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

        {/* Social Media */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <a href="https://www.linkedin.com/company/thinkvil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-600 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-600 hover:text-blue-600 transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/thinkvil" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-600 hover:text-blue-600 transition">
              <FaInstagram size={24} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contact.thinkvil@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 text-white text-center py-4 mt-6">
        <p>© {new Date().getFullYear()} ThinkViL. All rights reserved.</p>
      </div>
    </footer>
  );
}
