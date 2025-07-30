
"use client";

import { Footer } from "./_components/footer";
import { Navbar } from "./_components/header";
import { useAuthStore } from "@/lib/store";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const { isLoggedIn, logout } = useAuthStore();

  return (
    <div className="flex flex-col min-h-screen">
       <div className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
          <div className="container mx-auto px-4">
            <Navbar isLoggedIn={isLoggedIn} logout={logout} />
          </div>
       </div>
      <main className="flex-grow bg-background">
        {children}
      </main>
      <Footer />
    </div>
  );
}
