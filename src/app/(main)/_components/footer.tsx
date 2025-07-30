
import Link from 'next/link';
import { MilkyWayLogo } from './milky-way-logo';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <MilkyWayLogo />
            <p className="text-muted-foreground">
              Delivering farm-fresh purity from our family to yours. Experience the taste of real, wholesome dairy.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-muted-foreground hover:text-primary">Products</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/calculator" className="text-muted-foreground hover:text-primary">Milk Calculator</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>123 Dairy Lane, Mootown, CA 90210</li>
              <li>contact@milkyway.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground mt-12 border-t pt-6">
          &copy; {new Date().getFullYear()} MilkyWay. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
