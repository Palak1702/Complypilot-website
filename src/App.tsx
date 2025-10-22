import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LandingPage } from "./components/LandingPage";
import { FeaturesPage } from "./components/FeaturesPage";
import { PricingPage } from "./components/PricingPage";
import { AboutPage } from "./components/AboutPage";
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";
import { Dashboard } from "./components/Dashboard";
import { SplashScreen } from "./components/SplashScreen";

type Page = "home" | "features" | "pricing" | "about" | "login" | "signup" | "dashboard";

interface UserData {
  name: string;
  email: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [showSplash, setShowSplash] = useState(true);
  const [userData, setUserData] = useState<UserData | null>(null);

  // Show splash screen on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Show splash for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogin = (user: UserData) => {
    setUserData(user);
    handleNavigate("dashboard");
  };

  // Show splash screen
  if (showSplash) {
    return <SplashScreen />;
  }

  // Dashboard has its own layout, so we render it separately
  if (currentPage === "dashboard") {
    return <Dashboard onNavigate={handleNavigate} userName={userData?.name || "User"} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="flex-1">
        {currentPage === "home" && <LandingPage onNavigate={handleNavigate} />}
        {currentPage === "features" && <FeaturesPage />}
        {currentPage === "pricing" && <PricingPage onNavigate={handleNavigate} />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "login" && <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />}
        {currentPage === "signup" && <SignupPage onNavigate={handleNavigate} onSignup={handleLogin} />}
      </main>

      {currentPage !== "login" && currentPage !== "signup" && <Footer />}
    </div>
  );
}
