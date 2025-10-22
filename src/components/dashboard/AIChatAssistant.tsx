import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { Bot, Send, Sparkles, FileText, Calendar, AlertCircle } from "lucide-react";

export function AIChatAssistant() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content:
        "Hello! I'm your ComplyPilot AI assistant. I can help you with compliance queries, regulatory updates, and deadline reminders. How can I assist you today?",
      timestamp: "10:00 AM",
    },
  ]);

  const suggestedQuestions = [
    "What are the upcoming GST deadlines?",
    "Explain new labor law updates",
    "How to file GSTR-3B?",
    "What documents needed for factory license renewal?",
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: message,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: "bot",
        content: getAIResponse(message),
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);

    setMessage("");
  };

  const getAIResponse = (query: string) => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("gst") || lowerQuery.includes("deadline")) {
      return "Based on your profile, here are your upcoming GST deadlines:\n\n• GSTR-3B Filing: October 20, 2025 (2 days remaining)\n• GSTR-1 Filing: November 11, 2025\n\nWould you like me to set reminders or help you with the filing process?";
    } else if (lowerQuery.includes("labor") || lowerQuery.includes("law")) {
      return "Recent labor law updates affecting your business:\n\n1. Revised minimum wage rates effective November 1, 2025\n2. Updated ESI contribution limits\n3. New provisions in the Code on Wages Act\n\nWould you like detailed information on any specific update?";
    } else if (lowerQuery.includes("file") || lowerQuery.includes("how to")) {
      return "I can guide you through the filing process step by step. Here's what you need:\n\n1. Login to GST portal\n2. Navigate to Returns > GSTR-3B\n3. Fill in the required details\n4. Verify and submit\n\nWould you like me to create a checklist for you?";
    } else if (lowerQuery.includes("document") || lowerQuery.includes("license")) {
      return "For factory license renewal, you'll need:\n\n• Current factory license copy\n• NOC from pollution control board\n• Fire safety certificate\n• Building plan approval\n• List of machinery\n\nI've checked your document vault - you have 3/5 documents ready. Would you like me to remind you about the missing documents?";
    }
    
    return "I understand you're asking about: " + query + "\n\nLet me help you with that. Could you provide more specific details so I can give you accurate compliance guidance?";
  };

  const handleSuggestedQuestion = (question: string) => {
    setMessage(question);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl text-gray-900 mb-2">Ask ComplyPilot</h1>
        <p className="text-gray-600">
          Get instant answers to your compliance questions powered by AI
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chat Area */}
        <Card className="lg:col-span-2 flex flex-col h-[calc(100vh-280px)]">
          {/* Chat Header */}
          <div className="p-6 border-b">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-lg text-gray-900">AI Assistant</h2>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-gray-600">Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-6">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] ${
                      msg.type === "user"
                        ? "bg-gradient-to-r from-blue-500 to-green-500 text-white"
                        : "bg-gray-100 text-gray-900"
                    } rounded-2xl px-4 py-3`}
                  >
                    {msg.type === "bot" && (
                      <div className="flex items-center gap-2 mb-2">
                        <Bot className="w-4 h-4" />
                        <span className="text-sm">ComplyPilot AI</span>
                      </div>
                    )}
                    <p className="whitespace-pre-line">{msg.content}</p>
                    <p
                      className={`text-xs mt-2 ${
                        msg.type === "user" ? "text-blue-100" : "text-gray-500"
                      }`}
                    >
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-6 border-t">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me anything about compliance..."
                className="flex-1"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </Card>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Suggested Questions */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg text-gray-900">Suggested Questions</h2>
            </div>
            <div className="space-y-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedQuestion(question)}
                  className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-gray-700"
                >
                  {question}
                </button>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h2 className="text-lg text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <FileText className="w-5 h-5 text-blue-600" />
                <div className="text-left">
                  <div className="text-gray-900">Check Compliance Status</div>
                  <div className="text-gray-600">View all pending items</div>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                <Calendar className="w-5 h-5 text-green-600" />
                <div className="text-left">
                  <div className="text-gray-900">View Calendar</div>
                  <div className="text-gray-600">Check upcoming deadlines</div>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                <div className="text-left">
                  <div className="text-gray-900">Recent Updates</div>
                  <div className="text-gray-600">Latest regulatory changes</div>
                </div>
              </button>
            </div>
          </Card>

          {/* AI Capabilities */}
          <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50">
            <h2 className="text-lg text-gray-900 mb-4">I can help with:</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-700">
                <Badge className="bg-purple-500">✓</Badge>
                <span>Compliance queries</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Badge className="bg-purple-500">✓</Badge>
                <span>Deadline reminders</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Badge className="bg-purple-500">✓</Badge>
                <span>Regulatory updates</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Badge className="bg-purple-500">✓</Badge>
                <span>Document guidance</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Badge className="bg-purple-500">✓</Badge>
                <span>Filing instructions</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
