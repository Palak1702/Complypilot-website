import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { User, Bell, Shield, CreditCard, Users } from "lucide-react";

export function SettingsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">
            <User className="w-4 h-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="w-4 h-4 mr-2" />
            Security
          </TabsTrigger>
          <TabsTrigger value="billing">
            <CreditCard className="w-4 h-4 mr-2" />
            Billing
          </TabsTrigger>
          <TabsTrigger value="team">
            <Users className="w-4 h-4 mr-2" />
            Team
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <Card className="p-6">
            <h2 className="text-lg text-gray-900 mb-6">Profile Information</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullname">Full Name</Label>
                  <Input id="fullname" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john@company.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" defaultValue="Acme Manufacturing Pvt Ltd" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="business-type">Business Type</Label>
                  <Select defaultValue="manufacturing">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="services">Services</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="msme">MSME</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select defaultValue="textile">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="textile">Textile</SelectItem>
                      <SelectItem value="automotive">Automotive</SelectItem>
                      <SelectItem value="food">Food & Beverage</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Business Address</Label>
                <Input
                  id="address"
                  defaultValue="123 Industrial Area, Andheri East, Mumbai - 400093"
                />
              </div>

              <div className="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                  Save Changes
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <Card className="p-6">
            <h2 className="text-lg text-gray-900 mb-6">Notification Preferences</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-900 mb-1">Email Notifications</div>
                  <p className="text-gray-600">Receive compliance alerts via email</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-900 mb-1">SMS Notifications</div>
                  <p className="text-gray-600">Get urgent deadline reminders via SMS</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-900 mb-1">Push Notifications</div>
                  <p className="text-gray-600">Browser notifications for updates</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-900 mb-1">Regulatory Updates</div>
                  <p className="text-gray-600">AI-powered regulation change alerts</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-900 mb-1">Weekly Summary</div>
                  <p className="text-gray-600">Get a weekly compliance summary report</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-900 mb-1">Marketing Emails</div>
                  <p className="text-gray-600">Product updates and news</p>
                </div>
                <Switch />
              </div>

              <div className="pt-4 border-t">
                <Label htmlFor="reminder-time">Default Reminder Time</Label>
                <Select defaultValue="7days">
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1day">1 day before</SelectItem>
                    <SelectItem value="3days">3 days before</SelectItem>
                    <SelectItem value="7days">7 days before</SelectItem>
                    <SelectItem value="14days">14 days before</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security">
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-lg text-gray-900 mb-6">Change Password</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                  Update Password
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg text-gray-900 mb-6">Two-Factor Authentication</h2>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-gray-900 mb-1">Enable 2FA</div>
                  <p className="text-gray-600">Add an extra layer of security</p>
                </div>
                <Switch />
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg text-gray-900 mb-6">Active Sessions</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="text-gray-900 mb-1">Chrome on Windows</div>
                    <p className="text-gray-600">Mumbai, India • Current session</p>
                  </div>
                  <span className="text-green-600">Active</span>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="text-gray-900 mb-1">Safari on iPhone</div>
                    <p className="text-gray-600">Mumbai, India • 2 hours ago</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Revoke
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing">
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-lg text-gray-900 mb-6">Current Plan</h2>
              <div className="flex items-center justify-between mb-6 p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
                <div>
                  <h3 className="text-xl text-gray-900 mb-1">Pro Plan</h3>
                  <p className="text-gray-600">₹2,999/month</p>
                </div>
                <Button variant="outline">Change Plan</Button>
              </div>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Next billing date:</span>
                  <span className="text-gray-900">November 18, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment method:</span>
                  <span className="text-gray-900">•••• •••• •••• 4242</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg text-gray-900 mb-6">Billing History</h2>
              <div className="space-y-3">
                {[
                  { date: "Oct 18, 2025", amount: "₹2,999", status: "Paid" },
                  { date: "Sep 18, 2025", amount: "₹2,999", status: "Paid" },
                  { date: "Aug 18, 2025", amount: "₹2,999", status: "Paid" },
                ].map((invoice, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div>
                      <div className="text-gray-900">{invoice.date}</div>
                      <div className="text-gray-600">Pro Plan</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-900">{invoice.amount}</span>
                      <span className="text-green-600">{invoice.status}</span>
                      <Button variant="ghost" size="sm">
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Team Tab */}
        <TabsContent value="team">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg text-gray-900">Team Members</h2>
              <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                Invite Member
              </Button>
            </div>
            <div className="space-y-3">
              {[
                {
                  name: "John Doe",
                  email: "john@company.com",
                  role: "Admin",
                  status: "Active",
                },
                {
                  name: "Jane Smith",
                  email: "jane@company.com",
                  role: "Editor",
                  status: "Active",
                },
                {
                  name: "Mike Johnson",
                  email: "mike@company.com",
                  role: "Viewer",
                  status: "Invited",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-gray-900">{member.name}</div>
                      <div className="text-gray-600">{member.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Select defaultValue={member.role.toLowerCase()}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="editor">Editor</SelectItem>
                        <SelectItem value="viewer">Viewer</SelectItem>
                      </SelectContent>
                    </Select>
                    <span
                      className={
                        member.status === "Active"
                          ? "text-green-600"
                          : "text-orange-600"
                      }
                    >
                      {member.status}
                    </span>
                    <Button variant="ghost" size="sm">
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
