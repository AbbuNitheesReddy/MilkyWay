import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User } from "lucide-react";
import { MilkyWayLogo } from "./milky-way-logo";

export function Header() {
  const navItems = [
    { name: "Products", href: "/products" },
    { name: "Order History", href: "/history" },
    { name: "Milk Calculator", href: "/calculator" },
  ];

  return (
    <header className="bg-card border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <MilkyWayLogo />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Button key={item.name} asChild variant="ghost" className="text-foreground/80 font-semibold">
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="icon">
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Shopping Cart</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href="/login">
                <User className="h-5 w-5" />
                <span className="sr-only">Login</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
