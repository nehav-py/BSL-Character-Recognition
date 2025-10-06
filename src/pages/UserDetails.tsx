
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UserDetails = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [healthStatus, setHealthStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && age && gender && healthStatus) {
      // Store user details and navigate to main page
      localStorage.setItem("userDetails", JSON.stringify({ name, age, gender, healthStatus }));
      navigate("/home");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="min-h-screen bg-custom-turquoise p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">User Details</h1>
        </div>
        
        <Card className="w-full border-gray-200 bg-white shadow-sm">
          <CardHeader className="bg-white">
            <CardTitle className="text-xl font-bold text-gray-900">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-900 text-base font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-gray-300 bg-white text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="age" className="text-gray-900 text-base font-medium">
                  Age
                </Label>
                <Input
                  id="age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full border-gray-300 bg-white text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your age"
                  min="1"
                  max="120"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="gender" className="text-gray-900 text-base font-medium">
                  Gender
                </Label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger className="w-full border-gray-300 bg-white text-gray-900 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200">
                    <SelectItem value="male" className="text-gray-900 hover:bg-gray-50">Male</SelectItem>
                    <SelectItem value="female" className="text-gray-900 hover:bg-gray-50">Female</SelectItem>
                    <SelectItem value="other" className="text-gray-900 hover:bg-gray-50">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="healthStatus" className="text-gray-900 text-base font-medium">
                  Health Status
                </Label>
                <Select value={healthStatus} onValueChange={setHealthStatus}>
                  <SelectTrigger className="w-full border-gray-300 bg-white text-gray-900 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select your health status" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200">
                    <SelectItem value="deaf" className="text-gray-900 hover:bg-gray-50">Deaf</SelectItem>
                    <SelectItem value="dumb" className="text-gray-900 hover:bg-gray-50">Dumb</SelectItem>
                    <SelectItem value="not-handicapped" className="text-gray-900 hover:bg-gray-50">Not Handicapped</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-sm"
              >
                Continue to Main Page
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDetails;
