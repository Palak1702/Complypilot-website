import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  LayoutDashboard,
  Bell,
  Bot,
  FolderLock,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Smart Compliance Dashboard",
      description: "Track all your regulatory requirements in one unified view",
    },
    {
      icon: Bell,
      title: "Auto Reminders & Filing Calendar",
      description: "Never miss a deadline with intelligent alerts and notifications",
    },
    {
      icon: Bot,
      title: "AI Regulation Updates",
      description: "Stay informed with real-time regulatory changes powered by AI",
    },
    {
      icon: FolderLock,
      title: "Document Vault & Tracking",
      description: "Securely store and manage all your compliance documents",
    },
  ];



  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
                AI-Powered RegTech Platform
              </Badge>
              <h1 className="mb-6 text-gray-900">
                Simplify Compliance with AI
              </h1>
              <p className="mb-8 text-gray-600 text-lg">
                Avoid penalties. Stay audit-ready. Let ComplyPilot guide your compliance journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => onNavigate("signup")}
                  className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Book Demo
                </Button>
              </div>
              <p className="mt-6 text-gray-500">
                No credit card required • 14-day free trial
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MDc5NzMzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="ComplyPilot Dashboard"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-gray-900">
              MSMEs Struggle with 1000+ Compliances
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              From GST returns to factory licenses, environmental clearances to labor regulations — 
              Indian businesses face an overwhelming compliance burden. Missing a single deadline can 
              result in penalties, legal issues, and business disruption.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 text-center">
                <div className="text-3xl text-blue-600 mb-2">1000+</div>
                <p className="text-gray-600">Compliance Requirements</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl text-blue-600 mb-2">₹50K+</div>
                <p className="text-gray-600">Average Penalty Cost</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl text-blue-600 mb-2">40%</div>
                <p className="text-gray-600">Miss Deadlines</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900">
              Everything You Need for Compliance
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Powerful features designed specifically for Indian MSMEs and compliance professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate("features")}
            >
              View All Features
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="mb-6">
            Ready to Simplify Your Compliance?
          </h2>
          <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
            Join thousands of businesses who trust ComplyPilot for their regulatory needs
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onNavigate("signup")}
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
