
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, Search } from "lucide-react";
import { MilkyWayLogo } from "./milky-way-logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const topNavItems = [
    { name: "Blog", href: "#" },
    { name: "Login", href: "/login" },
  ];

  const mainNavItems = [
    { name: "About Us", href: "#" },
    { name: "A2 Milk", href: "/products" },
    { name: "Our Cows", href: "#" },
    { name: "Our Products", href: "/products" },
    { name: "Farming Practices", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header className="bg-card border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between h-14 border-b">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <div className="hidden md:flex items-center gap-2">
            {topNavItems.map((item) => (
              <Button key={item.name} asChild variant="ghost" className="text-sm font-semibold">
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
          </div>
          <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="flex flex-col gap-4 p-4">
                         <Link href="/" className="flex flex-col items-center gap-2 mb-4">
                            <MilkyWayLogo />
                        </Link>
                        {mainNavItems.map((item) => (
                        <Button key={item.name} asChild variant="ghost" className="justify-start text-lg">
                            <Link href={item.href}>{item.name}</Link>
                        </Button>
                        ))}
                        <Button asChild variant="link" size="lg" className="font-bold">
                            <Link href="#">TRY A SAMPLE</Link>
                        </Button>
                        <hr/>
                        {topNavItems.map((item) => (
                         <Button key={item.name} asChild variant="ghost" className="justify-start text-lg">
                            <Link href={item.href}>{item.name}</Link>
                        </Button>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex flex-col items-center justify-center py-6">
          <Link href="/" className="flex flex-col items-center gap-2">
            <MilkyWayLogo />
          </Link>
          <nav className="hidden md:flex items-center gap-4 mt-6">
            {mainNavItems.map((item) => (
              <Button key={item.name} asChild variant="ghost" className="font-semibold text-muted-foreground">
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
             <Button asChild variant="link" size="lg" className="font-bold text-primary">
                <Link href="#">TRY A SAMPLE</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
