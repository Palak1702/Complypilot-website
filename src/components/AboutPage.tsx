import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Target, Eye, Heart, Mail, MapPin, Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-6 text-gray-900">
            About ComplyPilot
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We're on a mission to make compliance simple, accessible, and stress-free for every business in India.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="mb-4 text-gray-900">Our Mission</h3>
            <p className="text-gray-600">
              Empowering MSMEs with AI-powered compliance tools to eliminate penalties, reduce stress, and ensure regulatory peace of mind.
            </p>
          </Card>

          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="mb-4 text-gray-900">Our Vision</h3>
            <p className="text-gray-600">
              To become India's most trusted compliance platform, helping millions of businesses stay audit-ready and focused on growth.
            </p>
          </Card>

          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="mb-4 text-gray-900">Our Values</h3>
            <p className="text-gray-600">
              Transparency, innovation, and customer-centricity guide everything we do. We build with integrity and care.
            </p>
          </Card>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-gray-900">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  ComplyPilot was born from a simple observation: small and medium businesses in India 
                  spend countless hours struggling with regulatory compliance, often facing penalties 
                  due to missed deadlines or incomplete documentation.
                </p>
                <p>
                  Founded in 2024 by a team of compliance experts, technologists, and entrepreneurs, 
                  we set out to solve this problem using artificial intelligence and smart automation. 
                  Our platform brings together regulatory knowledge, technology, and user-friendly 
                  design to make compliance accessible to everyone.
                </p>
                <p>
                  Today, ComplyPilot serves thousands of businesses across India, from small manufacturing 
                  units to large CA firms managing multiple clients. We're proud to be making a real 
                  difference in reducing compliance burden and helping businesses focus on what they do best.
                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760346546771-a81d986459ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjA3NDY3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our Team"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <Card className="p-6 text-center">
            <div className="text-4xl text-blue-600 mb-2">5000+</div>
            <p className="text-gray-600">Active Users</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl text-blue-600 mb-2">1000+</div>
            <p className="text-gray-600">Compliances Tracked</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl text-blue-600 mb-2">₹2Cr+</div>
            <p className="text-gray-600">Penalties Avoided</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl text-blue-600 mb-2">98%</div>
            <p className="text-gray-600">Customer Satisfaction</p>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6 text-gray-900">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Have questions or want to learn more? We'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Email</div>
                    <div className="text-gray-600">support@complypilot.com</div>
                    <div className="text-gray-600">sales@complypilot.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Phone</div>
                    <div className="text-gray-600">+91 98765 43210</div>
                    <div className="text-gray-600">Mon-Fri, 9AM-6PM IST</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Office</div>
                    <div className="text-gray-600">
                      BKC, Mumbai, Maharashtra
                      <br />
                      India - 400051
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-white">
              <h3 className="mb-6 text-gray-900">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Input placeholder="Subject" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" rows={5} />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
