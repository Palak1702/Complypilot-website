import { Card } from "./ui/card";
import {
  LayoutDashboard,
  Bell,
  Bot,
  FolderLock,
  Users,
  FileText,
  Calendar,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle2,
  Zap,
} from "lucide-react";

export function FeaturesPage() {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Smart Compliance Dashboard",
      description:
        "Get a bird's-eye view of all your compliance requirements across multiple categories. Track status, deadlines, and priorities in one unified dashboard.",
      benefits: [
        "Real-time compliance status tracking",
        "Customizable views by category or deadline",
        "Visual progress indicators",
        "Quick action shortcuts",
      ],
    },
    {
      icon: Bell,
      title: "Auto Reminders & Filing Calendar",
      description:
        "Never miss a compliance deadline again. Our intelligent reminder system sends timely notifications via email, SMS, and push notifications.",
      benefits: [
        "Multi-channel notifications (Email, SMS, Push)",
        "Customizable reminder schedules",
        "Recurring compliance tracking",
        "Integration with Google Calendar",
      ],
    },
    {
      icon: Bot,
      title: "AI Regulation Updates",
      description:
        "Stay ahead of regulatory changes with our AI-powered monitoring system that tracks updates from government portals and regulatory bodies.",
      benefits: [
        "Real-time regulation change alerts",
        "Impact analysis for your business",
        "Plain-language summaries",
        "Industry-specific filtering",
      ],
    },
    {
      icon: FolderLock,
      title: "Document Vault & Tracking",
      description:
        "Securely store, organize, and manage all your compliance documents with version control and easy retrieval.",
      benefits: [
        "Encrypted cloud storage",
        "Automatic document categorization",
        "Version history and audit trails",
        "Quick search and retrieval",
      ],
    },
    {
      icon: Users,
      title: "Multi-User Collaboration",
      description:
        "Perfect for CA firms and businesses with compliance teams. Assign tasks, track progress, and collaborate seamlessly.",
      benefits: [
        "Role-based access control",
        "Task assignment and tracking",
        "Team activity logs",
        "Client management for CAs",
      ],
    },
    {
      icon: FileText,
      title: "Pre-filled Forms & Templates",
      description:
        "Save time with smart form-filling technology that auto-populates fields based on your business data and previous submissions.",
      benefits: [
        "Auto-fill from stored data",
        "Industry-standard templates",
        "Error checking and validation",
        "One-click submissions",
      ],
    },
    {
      icon: Calendar,
      title: "Compliance Calendar",
      description:
        "Comprehensive calendar view of all your compliance obligations with filters for different regulatory categories.",
      benefits: [
        "Month, week, and day views",
        "Category-wise filtering",
        "Export to external calendars",
        "Historical compliance tracking",
      ],
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reports",
      description:
        "Generate detailed compliance reports and analytics to demonstrate audit-readiness and track performance over time.",
      benefits: [
        "Compliance health scores",
        "Downloadable audit reports",
        "Trend analysis and insights",
        "Custom report generation",
      ],
    },
    {
      icon: Shield,
      title: "Regulatory Coverage",
      description:
        "Comprehensive coverage of Indian regulations including GST, Labor Laws, Environmental, Factory Act, and more.",
      benefits: [
        "1000+ compliance requirements",
        "Central and State level coverage",
        "Industry-specific regulations",
        "Regular database updates",
      ],
    },
    {
      icon: Clock,
      title: "Time-Saving Automation",
      description:
        "Automate repetitive compliance tasks and focus on growing your business instead of paperwork.",
      benefits: [
        "Automated data entry",
        "Recurring task templates",
        "Bulk operations support",
        "Integration with accounting software",
      ],
    },
    {
      icon: Zap,
      title: "Quick Onboarding",
      description:
        "Get started in minutes with our guided onboarding process. No technical expertise required.",
      benefits: [
        "Step-by-step setup wizard",
        "Business profile auto-detection",
        "Import existing compliance data",
        "24/7 customer support",
      ],
    },
    {
      icon: CheckCircle2,
      title: "Compliance Verification",
      description:
        "Built-in verification system to ensure all submissions are complete and accurate before filing.",
      benefits: [
        "Pre-submission validation",
        "Checklist verification",
        "Error detection and suggestions",
        "Filing confirmation tracking",
      ],
    },
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-6 text-gray-900">
            Powerful Features for Complete Compliance
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            ComplyPilot provides everything you need to manage regulatory compliance efficiently. 
            From automated reminders to AI-powered updates, we've got you covered.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-12">
          <h2 className="mb-4 text-gray-900">
            See ComplyPilot in Action
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Schedule a personalized demo to see how our features can transform your compliance workflow
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg hover:from-blue-600 hover:to-green-600 transition-all">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
}
