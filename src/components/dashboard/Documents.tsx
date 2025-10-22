import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Upload,
  Search,
  FileText,
  FolderOpen,
  Download,
  Trash2,
  MoreVertical,
} from "lucide-react";

export function Documents() {
  const documents = [
    {
      id: 1,
      name: "Factory License Certificate.pdf",
      category: "Licenses",
      uploadedOn: "Oct 15, 2025",
      size: "2.4 MB",
      status: "Active",
    },
    {
      id: 2,
      name: "GST Registration Certificate.pdf",
      category: "Tax",
      uploadedOn: "Oct 10, 2025",
      size: "1.8 MB",
      status: "Active",
    },
    {
      id: 3,
      name: "GSTR-3B September 2025.pdf",
      category: "GST Returns",
      uploadedOn: "Oct 11, 2025",
      size: "856 KB",
      status: "Filed",
    },
    {
      id: 4,
      name: "EPF Registration.pdf",
      category: "Labor",
      uploadedOn: "Sep 28, 2025",
      size: "1.2 MB",
      status: "Active",
    },
    {
      id: 5,
      name: "ESI Certificate.pdf",
      category: "Labor",
      uploadedOn: "Sep 20, 2025",
      size: "945 KB",
      status: "Active",
    },
    {
      id: 6,
      name: "Environmental Clearance.pdf",
      category: "Environment",
      uploadedOn: "Aug 15, 2025",
      size: "3.1 MB",
      status: "Active",
    },
  ];

  const categories = [
    { name: "All Documents", count: 24 },
    { name: "Licenses", count: 6 },
    { name: "Tax", count: 8 },
    { name: "GST Returns", count: 5 },
    { name: "Labor", count: 3 },
    { name: "Environment", count: 2 },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl text-gray-900 mb-2">Document Vault</h1>
        <p className="text-gray-600">
          Securely store and manage all your compliance documents
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <Card className="p-6 lg:col-span-1 h-fit">
          <h2 className="text-lg text-gray-900 mb-4">Categories</h2>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.name}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <div className="flex items-center gap-2">
                  <FolderOpen className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-700">{category.name}</span>
                </div>
                <Badge variant="outline">{category.count}</Badge>
              </button>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
            <h3 className="text-gray-900 mb-2">Storage Used</h3>
            <div className="mb-2">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl text-gray-900">2.4</span>
                <span className="text-gray-600">GB / 10 GB</span>
              </div>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-green-500" style={{ width: "24%" }} />
            </div>
          </div>
        </Card>

        {/* Documents List */}
        <Card className="p-6 lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="Search documents..." className="pl-10" />
              </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
              <Upload className="w-4 h-4 mr-2" />
              Upload Document
            </Button>
          </div>

          <Tabs defaultValue="recent">
            <TabsList className="mb-4">
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="all">All Documents</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>

            <TabsContent value="recent">
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-gray-900 mb-1">{doc.name}</h3>
                          <div className="flex items-center gap-3 text-gray-600">
                            <span>{doc.category}</span>
                            <span>•</span>
                            <span>{doc.uploadedOn}</span>
                            <span>•</span>
                            <span>{doc.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          className={
                            doc.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }
                        >
                          {doc.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="all">
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-gray-900 mb-1">{doc.name}</h3>
                          <div className="flex items-center gap-3 text-gray-600">
                            <span>{doc.category}</span>
                            <span>•</span>
                            <span>{doc.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="archived">
              <div className="text-center py-12 text-gray-500">
                <FolderOpen className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                <p>No archived documents</p>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
