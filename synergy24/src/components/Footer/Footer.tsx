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
      className={`relative px-8 py-16 ${
        theme === "dark" ? "bg-blue-900 text-white" : "bg-[#1E3A8A] text-white"
      } shadow-xl `}
    >
      <div className="absolute inset-0 bg-[url('/cool-pattern.svg')] bg-no-repeat bg-cover opacity-20"></div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        {/* Logo */}
        <div className="flex flex-col items-start space-y-4">
          <span className="text-4xl font-extrabold text-blue-300">
            MedTech Mavericks
          </span>
          <p className="text-gray-200 text-sm max-w-xs">
            Leading innovation in medical technology, empowering healthcare with
            cutting-edge solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-200">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link
              href="/aboutus"
              className="hover:underline text-gray-200 hover:text-blue-400"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:underline text-gray-200 hover:text-blue-400"
            >
              Services
            </Link>
          </nav>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-200">Contact Us</h3>
          <address className="not-italic space-y-2 text-gray-200">
            <p>
              Email:{" "}
              <a
                href="mailto:info@medtechmavericks.com"
                className="hover:underline text-gray-100 hover:text-blue-400"
              >
                info@medtechmavericks.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+91 95298 50859"
                className="hover:underline text-gray-100 hover:text-blue-400"
              >
                +91 95298 50859
              </a>
            </p>
          </address>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-200">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
            >
              <FacebookIcon className="w-8 h-8" />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
            >
              <TwitterIcon className="w-8 h-8" />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
            >
              <InstagramIcon className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
            >
              <LinkedinIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400 text-sm relative z-10">
        &copy; {new Date().getFullYear()} MedTech Mavericks. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
