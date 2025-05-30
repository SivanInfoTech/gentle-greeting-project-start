
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Award, Download, Calendar, BookOpen } from 'lucide-react';
import CertificateGenerator from '@/components/CertificateGenerator';
import CloudProviderLogos from '@/components/CloudProviderLogos';

const Dashboard = () => {
  const [student] = useState({
    id: 'STU001234',
    name: 'John Doe',
    email: 'john.doe@example.com',
    enrollmentId: 'ENR2024001234',
    certificateId: 'CERT2024001234',
    enrollmentDate: '2024-01-15',
    coursesCompleted: 3,
    totalCourses: 5
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back, {student.name}!</p>
            </div>
            <Button variant="outline">
              <User className="h-4 w-4 mr-2" />
              Profile Settings
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Student Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Enrollment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Enrollment ID:</span>
                  <Badge variant="secondary">{student.enrollmentId}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Certificate ID:</span>
                  <Badge variant="secondary">{student.certificateId}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Enrolled:</span>
                  <span className="text-sm">{student.enrollmentDate}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Courses Completed:</span>
                  <span className="text-sm font-medium">{student.coursesCompleted}/{student.totalCourses}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(student.coursesCompleted / student.totalCourses) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Completion:</span>
                  <span className="text-sm font-medium">{Math.round((student.coursesCompleted / student.totalCourses) * 100)}%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Continue Learning
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Session
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Download Materials
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cloud Provider Logos */}
        <CloudProviderLogos />

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest learning activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">Completed AWS Fundamentals</p>
                        <p className="text-xs text-gray-500">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">Started Azure Basics</p>
                        <p className="text-xs text-gray-500">1 week ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">Enrolled in Cloud Security</p>
                        <p className="text-xs text-gray-500">2 weeks ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Deadlines</CardTitle>
                  <CardDescription>Don't miss these important dates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">AWS Project Submission</p>
                        <p className="text-xs text-gray-500">Due in 3 days</p>
                      </div>
                      <Badge variant="destructive">Urgent</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Azure Quiz</p>
                        <p className="text-xs text-gray-500">Due in 1 week</p>
                      </div>
                      <Badge variant="secondary">Pending</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="certificates">
            <CertificateGenerator student={student} />
          </TabsContent>

          <TabsContent value="courses">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AWS Fundamentals</CardTitle>
                  <CardDescription>Introduction to Amazon Web Services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-full"></div>
                    </div>
                    <p className="text-sm text-gray-600">Completed: 100%</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Azure Basics</CardTitle>
                  <CardDescription>Microsoft Azure cloud platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                    </div>
                    <p className="text-sm text-gray-600">Completed: 75%</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">GCP Essentials</CardTitle>
                  <CardDescription>Google Cloud Platform basics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge className="bg-gray-100 text-gray-800">Not Started</Badge>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-400 h-2 rounded-full w-0"></div>
                    </div>
                    <p className="text-sm text-gray-600">Completed: 0%</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
