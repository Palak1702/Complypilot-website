import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check, X } from "lucide-react";

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for startups exploring compliance",
      badge: null,
      features: [
        { name: "Basic compliance alerts", included: true },
        { name: "Up to 10 compliance items", included: true },
        { name: "Email notifications", included: true },
        { name: "Basic calendar view", included: true },
        { name: "AI assistant", included: false },
        { name: "Document vault", included: false },
        { name: "Multi-user access", included: false },
        { name: "Priority support", included: false },
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "₹2,999",
      period: "per month",
      description: "Complete compliance solution for growing businesses",
      badge: "Most Popular",
      features: [
        { name: "All compliance alerts", included: true },
        { name: "Unlimited compliance items", included: true },
        { name: "Multi-channel notifications", included: true },
        { name: "Advanced calendar & tracking", included: true },
        { name: "AI assistant & updates", included: true },
        { name: "Document vault (10GB)", included: true },
        { name: "Up to 5 users", included: true },
        { name: "Email support", included: true },
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "For CA firms and large organizations",
      badge: "Best Value",
      features: [
        { name: "Everything in Pro, plus:", included: true },
        { name: "Unlimited users", included: true },
        { name: "Multi-client management", included: true },
        { name: "Unlimited document storage", included: true },
        { name: "White-label options", included: true },
        { name: "Custom integrations", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "24/7 priority support", included: true },
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-6 text-white">
            Simple, Transparent Pricing
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-8 flex flex-col ${
                plan.highlighted
                  ? "border-2 border-blue-500 shadow-xl scale-105 relative"
                  : ""
              }`}
            >
              {plan.badge && (
                <Badge className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-green-500">
                  {plan.badge}
                </Badge>
              )}

              <div className="mb-6">
                <h3 className="mb-2 text-gray-900">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl text-gray-900">{plan.price}</span>
                  {plan.period !== "contact sales" && (
                    <span className="text-gray-500 ml-2">/ {plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                    )}
                    <span
                      className={
                        feature.included ? "text-gray-700" : "text-gray-400"
                      }
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                onClick={() => onNavigate(plan.name === "Enterprise" ? "about" : "signup")}
                className={
                  plan.highlighted
                    ? "bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                    : ""
                }
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="mb-8 text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="mb-2 text-gray-900">Can I change plans later?</h3>
              <p className="text-gray-600">
                Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="mb-2 text-gray-900">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit/debit cards, UPI, net banking, and can arrange invoice-based billing for Enterprise customers.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="mb-2 text-gray-900">Is there a setup fee?</h3>
              <p className="text-gray-600">
                No setup fees for any plan. Get started immediately with our simple onboarding process.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="mb-2 text-gray-900">What happens after the free trial?</h3>
              <p className="text-gray-600">
                After your 14-day trial, you'll be automatically enrolled in your selected plan. You can cancel anytime during the trial with no charges.
              </p>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Button variant="outline" onClick={() => onNavigate("about")}>
            Contact Our Sales Team
          </Button>
        </div>
      </div>
    </div>
  );
}
