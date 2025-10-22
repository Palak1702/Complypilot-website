import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Calendar } from "../ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Calendar as CalendarIcon, Filter, Download } from "lucide-react";

export function ComplianceCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const upcomingCompliances = [
    {
      id: 1,
      title: "GST Return Filing (GSTR-3B)",
      date: "Oct 20, 2025",
      category: "GST",
      priority: "High",
      status: "Pending",
    },
    {
      id: 2,
      title: "TDS Return Q2 2025-26",
      date: "Oct 31, 2025",
      category: "Tax",
      priority: "Medium",
      status: "Pending",
    },
    {
      id: 3,
      title: "ESI Monthly Contribution",
      date: "Nov 15, 2025",
      category: "Labor",
      priority: "Medium",
      status: "Pending",
    },
    {
      id: 4,
      title: "Factory License Renewal",
      date: "Dec 1, 2025",
      category: "License",
      priority: "High",
      status: "Pending",
    },
    {
      id: 5,
      title: "EPF Monthly Return",
      date: "Nov 25, 2025",
      category: "Labor",
      priority: "Medium",
      status: "Pending",
    },
    {
      id: 6,
      title: "Annual ITR Filing",
      date: "Dec 31, 2025",
      category: "Tax",
      priority: "High",
      status: "Pending",
    },
  ];

  const completedCompliances = [
    {
      id: 7,
      title: "GST Return (GSTR-1) - September",
      date: "Oct 11, 2025",
      category: "GST",
      completedOn: "Oct 10, 2025",
    },
    {
      id: 8,
      title: "Professional Tax Payment",
      date: "Oct 5, 2025",
      category: "Tax",
      completedOn: "Oct 3, 2025",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl text-gray-900 mb-2">Compliance Calendar</h1>
        <p className="text-gray-600">Track and manage all your compliance deadlines</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <Card className="p-6 lg:col-span-1">
          <h2 className="text-lg text-gray-900 mb-4">Select Date</h2>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
          
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="text-gray-700">Urgent</span>
              <Badge className="bg-red-500">2</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <span className="text-gray-700">Due Soon</span>
              <Badge className="bg-orange-500">3</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-gray-700">Upcoming</span>
              <Badge className="bg-blue-500">8</Badge>
            </div>
          </div>
        </Card>

        {/* Compliance List */}
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg text-gray-900">All Compliances</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          <Tabs defaultValue="upcoming">
            <TabsList className="mb-4">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="all">All</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-3">
              {upcomingCompliances.map((compliance) => (
                <div
                  key={compliance.id}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-1">{compliance.title}</h3>
                      <div className="flex items-center gap-3 text-gray-600">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{compliance.date}</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm">Mark Complete</Button>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">{compliance.category}</Badge>
                    <Badge
                      className={
                        compliance.priority === "High"
                          ? "bg-red-100 text-red-700"
                          : "bg-orange-100 text-orange-700"
                      }
                    >
                      {compliance.priority} Priority
                    </Badge>
                    <Badge variant="outline">{compliance.status}</Badge>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="completed" className="space-y-3">
              {completedCompliances.map((compliance) => (
                <div
                  key={compliance.id}
                  className="p-4 border rounded-lg bg-green-50"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-1">{compliance.title}</h3>
                      <div className="flex items-center gap-3 text-gray-600">
                        <span>Due: {compliance.date}</span>
                        <span>•</span>
                        <span className="text-green-600">Completed: {compliance.completedOn}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">{compliance.category}</Badge>
                    <Badge className="bg-green-500">Completed</Badge>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="all" className="space-y-3">
              {[...upcomingCompliances, ...completedCompliances].map((compliance) => (
                <div
                  key={compliance.id}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-gray-900 mb-2">{compliance.title}</h3>
                  <div className="flex gap-2">
                    <Badge variant="outline">{compliance.category}</Badge>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
