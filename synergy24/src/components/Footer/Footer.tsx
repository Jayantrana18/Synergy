import Link from "next/link";
import { useEffect } from "react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <footer
      className={`relative px-12 py-12 ${
        theme === "dark"
          ? "bg-blue-100 text-blue-700"
          : "bg-blue-700 text-white"
      }`}
    >
      <div className="container mx-auto flex flex-wrap justify-between space-y-8 md:space-y-0 ml-4">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <span className="text-gray-950 text-3xl font-bold">
            MedTech Mavericks
          </span>
        </div>

        {/* Quick Links */}
        <div className="pl-6">
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/about" className="hover:underline hover:text-blue-600">
              About
            </Link>
            <Link
              href="/services"
              className="hover:underline hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="hover:underline hover:text-blue-600"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Contact Information */}
        <div className="pl-6">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <address className="not-italic space-y-2">
            <p>
              Email:{" "}
              <a
                href="mailto:info@medtechmavericks.com"
                className="hover:underline hover:text-blue-600"
              >
                info@medtechmavericks.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="hover:underline hover:text-blue-600"
              >
                +1 (234) 567-890
              </a>
            </p>
          </address>
        </div>

        {/* Social Media Links */}
        <div className="border-l border-blue-400 pl-6">
          <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon
                className={`w-8 h-8 ${
                  theme === "dark"
                    ? "hover:text-blue-400"
                    : "hover:text-blue-500"
                } transition-colors`}
              />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon
                className={`w-8 h-8 ${
                  theme === "dark"
                    ? "hover:text-blue-400"
                    : "hover:text-blue-500"
                } transition-colors`}
              />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon
                className={`w-8 h-8 ${
                  theme === "dark"
                    ? "hover:text-blue-400"
                    : "hover:text-blue-500"
                } transition-colors`}
              />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon
                className={`w-8 h-8 ${
                  theme === "dark"
                    ? "hover:text-blue-400"
                    : "hover:text-blue-500"
                } transition-colors`}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
