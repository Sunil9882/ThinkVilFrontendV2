"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    };

    checkAuthStatus();

    const handleStorageChange = () => {
      checkAuthStatus();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    window.dispatchEvent(new Event("storage"));
    setIsMenuOpen(false); // <-- Close menu
    router.push("/login");
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-[100] px-4 py-4 flex justify-between items-center rounded-xl">
      <Link
        href="/"
        className="text-2xl font-bold flex items-center"
        onClick={() => setIsMenuOpen(false)}
      >
        <span className="ml-2 font-extrabold italic martel text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-indigo-300 hover:from-indigo-300 hover:to-blue-900 transition-all duration-500">
          ThinkViL
        </span>
      </Link>

      <button
        ref={buttonRef}
        className="block md:hidden focus:outline-none"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      <ul
        ref={menuRef}
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:space-x-2 p-4 md:p-0 shadow-md md:shadow-none transition-all ${isMenuOpen ? "block" : "hidden"}`}
      >
        {[
          { href: "/simulations/physics", label: "Physics" },
          { href: "/simulations/chemistry", label: "Chemistry" },
          { href: "/simulations/mathematics", label: "Mathematics" },
          { href: "/about", label: "About Us" },
        ].map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={() => setIsMenuOpen(false)} // <-- Close menu on link click
              className="px-3 py-2 rounded-xl font-semibold block hover:bg-sky-300 hover:text-black"
            >
              {label}
            </Link>
          </li>
        ))}

        <li>
          {isAuthenticated ? (
            <button
              onClick={handleLogout} // <-- Already closes menu
              className="px-3 py-2 rounded-xl block hover:bg-sky-300 transition"
              aria-label="Logout"
              // title="Logout"
            >
              <User className="hover:text-red-500" />
            </button>
          ) : (
            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)} // <-- Close on Login click
              className="px-3 py-2 rounded-xl block hover:bg-sky-300 transition"
              // aria-label="Login"
              title="Login"
            >
              <User className="hover:text-black" />
            </Link>
          )}
        </li>
      </ul>

      <div className="flex items-center space-x-4">
        <Link
          href="/donate"
          onClick={() => setIsMenuOpen(false)} // <-- Close on Donate click
          className="px-4 py-2 bg-gradient-to-br from-blue-500 to-green-500 hover:bg-gradient-to-br hover:from-green-500 hover:to-blue-500 text-white rounded-xl hover:text-black transition font-semibold"
        >
          Donate
        </Link>
      </div>
    </nav>
  );
}
