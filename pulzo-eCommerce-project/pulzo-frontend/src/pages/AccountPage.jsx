"use client";

import React from "react";
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function AccountPage() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return (
      <main className="px-8">
        <h2 className="text-4xl font-bold">Your Account</h2>
        <div>
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <div className="grid py-8 px-8 xl:px-16 mt-5 gap-6 max-w-full mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold font-poppins">
          Welcome, {user.firstName}
        </h1>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
        </TabsList>

        <TabsContent
          value="profile"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={user.firstName || ""}
              readOnly
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={user.lastName || ""}
              readOnly
              className="mt-1"
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={user.emailAddresses[0].emailAddress}
              readOnly
              className="mt-1"
            />
          </div>
        </TabsContent>

        <TabsContent value="orders">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.productName}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>{order.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
}

const orders = [
  {
    id: "1234",
    productName: "Wireless Headphones",
    date: "2023-06-01",
    total: "$120.00",
    status: "Delivered",
  },
  {
    id: "1235",
    productName: "Mechanical Keyboard",
    date: "2023-05-15",
    total: "$85.50",
    status: "Shipped",
  },
];

export default AccountPage;
