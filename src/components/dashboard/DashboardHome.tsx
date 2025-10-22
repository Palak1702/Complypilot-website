import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import {
  Bell,
  Plus,
  AlertCircle,
  CheckCircle2,
  Clock,
  FileText,
  Calendar,
  MessageSquare,
  TrendingUp,
  Star,
} from "lucide-react";

export function DashboardHome() {
  const upcomingDeadlines = [
    {
      title: "GST Return Filing (GSTR-3B)",
      date: "Oct 20, 2025",
      daysLeft: 2,
      status: "urgent",
      category: "GST",
    },
    {
      title: "TDS Return Q2 2025-26",
      date: "Oct 31, 2025",
      daysLeft: 13,
      status: "due-soon",
      category: "Tax",
    },
    {
      title: "ESI Monthly Contribution",
      date: "Nov 15, 2025",
      daysLeft: 28,
      status: "upcoming",
      category: "Labor",
    },
    {
      title: "Factory License Renewal",
      date: "Dec 1, 2025",
      daysLeft: 44,
      status: "upcoming",
      category: "License",
    },
  ];

  const recentAlerts = [
    {
      title: "New GST Rate Update",
      message: "GST rates revised for textile products effective Nov 1",
      time: "2 hours ago",
      type: "info",
    },
    {
      title: "Compliance Due Soon",
      message: "GSTR-3B filing due in 2 days",
      time: "1 day ago",
      type: "warning",
    },
    {
      title: "Document Uploaded",
      message: "Factory license certificate added to vault",
      time: "2 days ago",
      type: "success",
    },
  ];

  const complianceStats = [
    {
      label: "Completed This Month",
      value: "12",
      total: "15",
      percentage: 80,
      icon: CheckCircle2,
      color: "text-green-600",
    },
    {
      label: "Pending Actions",
      value: "3",
      total: "15",
      percentage: 20,
      icon: Clock,
      color: "text-orange-600",
    },
    {
      label: "Overdue Items",
      value: "0",
      total: "15",
      percentage: 0,
      icon: AlertCircle,
      color: "text-red-600",
    },
  ];

  return (
    <div>
      {/* Compliance Progress Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {complianceStats.map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-gray-600 mb-1">{stat.label}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl text-gray-900">{stat.value}</span>
                  <span className="text-gray-500">/ {stat.total}</span>
                </div>
              </div>
              <div
                className={`w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center ${stat.color}`}
              >
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
            <Progress value={stat.percentage} className="h-2" />
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Upcoming Deadlines */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl text-gray-900">Upcoming Deadlines</h2>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>

            <div className="space-y-4">
              {upcomingDeadlines.map((deadline, index) => (
                <div key={index}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-gray-900">{deadline.title}</h3>
                        <Badge
                          variant="outline"
                          className={
                            deadline.status === "urgent"
                              ? "border-red-200 bg-red-50 text-red-700"
                              : deadline.status === "due-soon"
                              ? "border-orange-200 bg-orange-50 text-orange-700"
                              : "border-blue-200 bg-blue-50 text-blue-700"
                          }
                        >
                          {deadline.category}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{deadline.date}</span>
                        </div>
                        <div
                          className={
                            deadline.status === "urgent"
                              ? "text-red-600"
                              : deadline.status === "due-soon"
                              ? "text-orange-600"
                              : "text-gray-600"
                          }
                        >
                          {deadline.daysLeft} days left
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                  {index < upcomingDeadlines.length - 1 && (
                    <Separator className="mt-4" />
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6 mt-6">
            <h2 className="text-xl text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start h-auto py-4">
                <FileText className="w-5 h-5 mr-3 text-blue-600" />
                <div className="text-left">
                  <div className="text-gray-900">Upload Document</div>
                  <div className="text-gray-500">Add to your vault</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4">
                <Calendar className="w-5 h-5 mr-3 text-green-600" />
                <div className="text-left">
                  <div className="text-gray-900">View Calendar</div>
                  <div className="text-gray-500">Check all deadlines</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4">
                <MessageSquare className="w-5 h-5 mr-3 text-purple-600" />
                <div className="text-left">
                  <div className="text-gray-900">Ask AI Assistant</div>
                  <div className="text-gray-500">Get instant help</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4">
                <TrendingUp className="w-5 h-5 mr-3 text-orange-600" />
                <div className="text-left">
                  <div className="text-gray-900">View Reports</div>
                  <div className="text-gray-500">Compliance analytics</div>
                </div>
              </Button>
            </div>
          </Card>
        </div>

        {/* Alert Notifications */}
        <div>
          <Card className="p-6">
            <h2 className="text-xl text-gray-900 mb-6">Recent Alerts</h2>
            <div className="space-y-4">
              {recentAlerts.map((alert, index) => (
                <div
                  key={index}
                  className="pb-4 border-b last:border-b-0 last:pb-0"
                >
                  <div className="flex gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        alert.type === "warning"
                          ? "bg-orange-50"
                          : alert.type === "success"
                          ? "bg-green-50"
                          : "bg-blue-50"
                      }`}
                    >
                      {alert.type === "warning" ? (
                        <AlertCircle className="w-5 h-5 text-orange-600" />
                      ) : alert.type === "success" ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      ) : (
                        <Bell className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-gray-900 mb-1">{alert.title}</div>
                      <p className="text-gray-600 mb-2">{alert.message}</p>
                      <span className="text-gray-500">{alert.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Compliance Health */}
          <Card className="p-6 mt-6">
            <h2 className="text-xl text-gray-900 mb-4">Compliance Health</h2>
            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-100 to-green-200 mb-4">
                <span className="text-3xl text-green-700">94%</span>
              </div>
              <div className="text-gray-900 mb-1">Excellent</div>
              <p className="text-gray-600">
                Your compliance health is in great shape
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
