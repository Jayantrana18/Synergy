import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export function Header() {
  // Add mounted state to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for the navbar menu

  // Only render theme content after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close
  };

  // Return null or a loading state while not mounted
  if (!mounted) {
    return (
      <header className="flex justify-between items-center p-4">
        {/* Keep static content that doesn't depend on theme */}
      </header>
    );
  }

  return (
    <header className="w-full p-3 bg-blue-100 fixed top-0 z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-gray-950 text-2xl font-bold">
            MedTech Mavericks
          </span>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href="/about"
            className="text-lg font-semibold text-gray-800 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-lg font-semibold text-gray-800 hover:text-blue-600"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-lg font-semibold text-gray-800 hover:text-blue-600"
          >
            Contact Us
          </Link>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            Appointment
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
