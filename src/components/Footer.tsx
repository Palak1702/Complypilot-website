import { Mail, Linkedin, Twitter, Facebook } from "lucide-react";
import logoImage from "figma:asset/a1d4ce6f831b2f2a6cdb9736d788c5a352af9378.png";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImage} alt="ComplyPilot" className="h-10" />
            </div>
            <p className="text-gray-600">
              Your AI Co-Pilot for Compliance
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-gray-900">Product</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Features</li>
              <li>Pricing</li>
              <li>Dashboard</li>
              <li>Integrations</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-gray-900">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-gray-900">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>support@complypilot.com</span>
              </div>
              <div className="flex gap-3 mt-4">
                <button className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4 text-gray-700" />
                </button>
                <button className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
                  <Twitter className="w-4 h-4 text-gray-700" />
                </button>
                <button className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>© 2025 ComplyPilot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}