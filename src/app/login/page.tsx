
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MilkyWayLogo } from "@/app/(main)/_components/milky-way-logo";
import { Separator } from "@/components/ui/separator";
import { useAuthStore } from "@/lib/store";
import { useRouter } from "next/navigation";

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        <path d="M1 1h22v22H1z" fill="none"/>
    </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1877F2" {...props}>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
);


export default function LoginPage() {
  const { login } = useAuthStore();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    router.push('/');
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-card p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
            <Link href="/">
              <MilkyWayLogo />
            </Link>
        </div>
        <Card className="shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl">Welcome Back</CardTitle>
            <CardDescription>Enter your credentials to access your account.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Button variant="link" size="sm" asChild className="p-0 h-auto">
                    <Link href="/">Forgot password?</Link>
                  </Button>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
            <div className="relative my-6">
                <Separator />
                <div className="absolute inset-0 flex items-center">
                    <span className="bg-card px-2 text-sm text-muted-foreground mx-auto">OR CONTINUE WITH</span>
                </div>
            </div>
            <div className="flex gap-4">
                <Button variant="outline" className="w-full" onClick={handleLogin}>
                    <GoogleIcon className="mr-2 h-5 w-5"/> Google
                </Button>
                <Button variant="outline" className="w-full" onClick={handleLogin}>
                    <FacebookIcon className="mr-2 h-5 w-5"/> Facebook
                </Button>
            </div>
            <div className="mt-6 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Button variant="link" size="sm" asChild className="p-0 h-auto">
                <Link href="/">Sign up</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
