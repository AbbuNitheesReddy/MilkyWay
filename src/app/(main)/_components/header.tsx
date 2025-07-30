
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, User, LogOut } from "lucide-react";
import { MilkyWayLogo } from "./milky-way-logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useCartStore, useAuthStore } from "@/lib/store";
import { useRouter } from "next/navigation";


const mainNavItems = [
    { name: "Home", href: "/" },
    { name: "All Products", href: "/products" },
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
];

function CartButton() {
    const items = useCartStore((state) => state.items);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    
    return (
        <Button asChild variant="ghost" size="icon" className="relative hover:-translate-y-px">
          <Link href="/cart">
            <ShoppingCart className="h-5 w-5" />
            {isClient && items.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    {items.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
            )}
            <span className="sr-only">Cart</span>
          </Link>
        </Button>
    )
}


export function Navbar({isLoggedIn, logout}: {isLoggedIn: boolean, logout: () => void}) {
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  }

  const navItems = isLoggedIn ? [...mainNavItems, { name: "My Orders", href: "/history" }] : mainNavItems;

  return (
    <nav className="flex items-center justify-between h-16">
      <Link href="/" className="flex items-center gap-2">
         <span className="font-headline text-xl font-bold text-primary tracking-widest">
            MILKYWAY
        </span>
      </Link>
      <div className="hidden md:flex items-center gap-4">
        {navItems.map((item) => (
          <Button key={item.name} asChild variant="ghost" className="font-semibold text-muted-foreground hover:-translate-y-px">
            <Link href={item.href}>{item.name}</Link>
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        {isLoggedIn ? (
          <>
            <Button asChild variant="ghost" size="icon" className="hover:-translate-y-px">
              <Link href="/profile">
                <User className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="hover:-translate-y-px" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Logout</span>
            </Button>
          </>
        ) : (
          <Button asChild variant="ghost" size="icon" className="hover:-translate-y-px">
            <Link href="/login">
              <User className="h-5 w-5" />
              <span className="sr-only">Login</span>
            </Link>
          </Button>
        )}
        <CartButton />
      </div>
    </nav>
  );
}


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isLoggedIn, logout } = useAuthStore();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
      setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('main-header');
      if (header) {
        setIsScrolled(window.scrollY > header.offsetHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/');
  }
  
  const navItems = isLoggedIn && isClient ? [...mainNavItems, { name: "My Orders", href: "/history" }] : mainNavItems;

  return (
    <>
      <header id="main-header" className="bg-card border-b">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between h-14 border-b">
             <div className="flex-1"></div>
            <div className="flex items-center gap-2 flex-1 justify-end">
               {isClient && isLoggedIn ? (
                 <>
                   <Button asChild variant="ghost" className="text-sm font-semibold hover:-translate-y-px">
                       <Link href="/profile">My Profile</Link>
                   </Button>
                   <Button variant="ghost" className="text-sm font-semibold hover:-translate-y-px" onClick={handleLogout}>Logout</Button>
                 </>
               ) : (
                 <Button asChild variant="ghost" className="text-sm font-semibold hover:-translate-y-px">
                       <Link href="/login">Login</Link>
                 </Button>
               )}
                <CartButton />
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex flex-col items-center justify-center py-6">
            <Link href="/" className="flex flex-col items-center gap-2">
              <MilkyWayLogo />
            </Link>
            <nav className="hidden md:flex items-center gap-4 mt-6">
              {navItems.map((item) => (
                <Button key={item.name} asChild variant="ghost" className="font-semibold text-muted-foreground hover:-translate-y-px">
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Sticky Navbar */}
      <div className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300",
        isScrolled ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="container mx-auto px-4">
            <div className="bg-background/95 backdrop-blur-sm rounded-xl shadow-lg my-2 px-4">
                {isClient && <Navbar isLoggedIn={isLoggedIn} logout={logout} />}
            </div>
        </div>
      </div>
       {/* Mobile Menu Button */}
       <div className="md:hidden fixed bottom-4 right-4 z-50">
          <Sheet>
              <SheetTrigger asChild>
                  <Button variant="default" size="icon" className="rounded-full h-14 w-14 shadow-lg hover:-translate-y-px">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Open menu</span>
                  </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-3/4 rounded-t-2xl">
                  <div className="flex flex-col gap-4 p-4">
                        <Link href="/" className="flex flex-col items-center gap-2 mb-4">
                          <MilkyWayLogo />
                      </Link>
                      {navItems.map((item) => (
                      <Button key={item.name} asChild variant="ghost" className="justify-center text-lg py-6 hover:-translate-y-px">
                          <Link href={item.href}>{item.name}</Link>
                      </Button>
                      ))}
                  </div>
              </SheetContent>
          </Sheet>
        </div>
    </>
  );
}
