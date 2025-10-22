import { useState } from "react";
import { Button } from "./ui/button";
import {
  LayoutDashboard,
  Calendar,
  FolderLock,
  MessageSquare,
  Settings,
  User,
  Bell,
  Plus,
  LogOut,
} from "lucide-react";
import { DashboardHome } from "./dashboard/DashboardHome";
import { ComplianceCalendar } from "./dashboard/ComplianceCalendar";
import { Documents } from "./dashboard/Documents";
import { AIChatAssistant } from "./dashboard/AIChatAssistant";
import { SettingsPage } from "./dashboard/SettingsPage";
import logoImage from "figma:asset/a1d4ce6f831b2f2a6cdb9736d788c5a352af9378.png";

interface DashboardProps {
  onNavigate: (page: string) => void;
  userName: string;
}

export function Dashboard({ onNavigate, userName }: DashboardProps) {
  const [activeTab, setActiveTab] = useState("dashboard");

  const sidebarItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "calendar", icon: Calendar, label: "Compliance Calendar" },
    { id: "documents", icon: FolderLock, label: "Documents" },
    { id: "ai-chat", icon: MessageSquare, label: "Ask ComplyPilot" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b">
          <img src={logoImage} alt="ComplyPilot" className="h-10" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? "bg-gradient-to-r from-blue-50 to-green-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-gray-900 truncate">{userName}</div>
              <div className="text-gray-500">Pro Plan</div>
            </div>
          </div>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-600"
            onClick={() => onNavigate("home")}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-10">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl text-gray-900">
                  {activeTab === "dashboard" && "Dashboard"}
                  {activeTab === "calendar" && "Compliance Calendar"}
                  {activeTab === "documents" && "Documents"}
                  {activeTab === "ai-chat" && "Ask ComplyPilot"}
                  {activeTab === "settings" && "Settings"}
                </h1>
                <p className="text-gray-600">
                  {activeTab === "dashboard" && `Welcome back, ${userName}! Here's your compliance overview`}
                  {activeTab === "calendar" && "Track and manage all your compliance deadlines"}
                  {activeTab === "documents" && "Securely store and manage all your compliance documents"}
                  {activeTab === "ai-chat" && "Get instant answers to your compliance questions"}
                  {activeTab === "settings" && "Manage your account and preferences"}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm">
                  <Bell className="w-4 h-4" />
                </Button>
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Compliance
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          {activeTab === "dashboard" && <DashboardHome />}
          {activeTab === "calendar" && <ComplianceCalendar />}
          {activeTab === "documents" && <Documents />}
          {activeTab === "ai-chat" && <AIChatAssistant />}
          {activeTab === "settings" && <SettingsPage />}
        </div>
      </main>
    </div>
  );
}