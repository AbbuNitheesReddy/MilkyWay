
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/lib/store";
import { User, MapPin, Edit } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";


function AuthWall() {
    return (
        <Card className="text-center p-12">
            <User className="h-20 w-20 mx-auto text-muted-foreground mb-4" />
            <h2 className="font-headline text-2xl mb-2">Please Log In</h2>
            <p className="text-muted-foreground mb-6">You need to be logged in to view your profile.</p>
            <Button asChild>
                <Link href="/login">Login</Link>
            </Button>
        </Card>
    )
}

export default function ProfilePage() {
  const { isLoggedIn } = useAuthStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; 
  }

  if (!isLoggedIn) {
      return (
         <div className="container mx-auto px-4 py-8 bg-transparent">
             <AuthWall />
         </div>
      )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-headline text-4xl md:text-5xl font-bold text-center mb-8">Your Profile</h1>
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="https://placehold.co/100x100.png" alt="User" data-ai-hint="user avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="font-headline text-3xl">John Doe</CardTitle>
                <CardDescription>johndoe@milkyway.com</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
                <Label htmlFor="name" className="flex items-center gap-2 text-base"><User className="h-5 w-5 text-primary" /> Full Name</Label>
                <div className="flex gap-2">
                    <Input id="name" defaultValue="John Doe" />
                    <Button variant="ghost" size="icon"><Edit className="h-4 w-4"/></Button>
                </div>
            </div>
             <div className="space-y-4">
                <Label htmlFor="address" className="flex items-center gap-2 text-base"><MapPin className="h-5 w-5 text-primary" /> Delivery Address</Label>
                 <div className="flex gap-2">
                    <Input id="address" defaultValue="123 Dairy Lane, Mootown, CA 90210" />
                    <Button variant="ghost" size="icon"><Edit className="h-4 w-4"/></Button>
                </div>
            </div>
            <Button className="w-full">Save Changes</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
