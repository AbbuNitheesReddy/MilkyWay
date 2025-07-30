
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import { MilkyWayLogo } from "./milky-way-logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "All Products", href: "/products" },
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
    { name: "My Orders", href: "/history" },
  ];

  return (
    <header className="bg-card border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <MilkyWayLogo />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button key={item.name} asChild variant="ghost" className="text-foreground/80 font-semibold">
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
            <Button asChild variant="ghost" className="text-foreground/80 font-semibold">
              <Link href="/login">Login</Link>
            </Button>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="icon">
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Shopping Cart</span>
              </Link>
            </Button>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="flex flex-col gap-4 p-4">
                         <Link href="/" className="flex items-center gap-2 mb-4">
                            <MilkyWayLogo />
                        </Link>
                        {navItems.map((item) => (
                        <Button key={item.name} asChild variant="ghost" className="justify-start text-lg">
                            <Link href={item.href}>{item.name}</Link>
                        </Button>
                        ))}
                         <Button asChild variant="ghost" className="justify-start text-lg">
                            <Link href="/login">Login</Link>
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
