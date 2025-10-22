import { Button } from "./ui/button";
import logoImage from "figma:asset/a1d4ce6f831b2f2a6cdb9736d788c5a352af9378.png";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const navItems = [
    { name: "Home", page: "home" },
    { name: "Features", page: "features" },
    { name: "Pricing", page: "pricing" },
    { name: "About", page: "about" },
  ];

  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img src={logoImage} alt="ComplyPilot" className="h-10" />
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`transition-colors ${
                  currentPage === item.page
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={() => onNavigate("login")}
            >
              Login
            </Button>
            <Button
              onClick={() => onNavigate("signup")}
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}