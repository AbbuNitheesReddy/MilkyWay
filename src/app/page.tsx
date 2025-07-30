import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MilkyWayLogo } from '@/app/(main)/_components/milky-way-logo';
import { ArrowRight, Calculator } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="absolute top-0 left-0 right-0 z-10 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <MilkyWayLogo />
          <Button asChild variant="ghost">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
          <Image
            src="https://placehold.co/1600x900.png"
            alt="A beautiful dairy farm at sunrise"
            layout="fill"
            objectFit="cover"
            className="z-0"
            data-ai-hint="dairy farm sunrise"
          />
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 container mx-auto px-4">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-shadow-lg">
              Pure, Fresh, Delivered.
            </h1>
            <p className="font-body text-lg md:text-xl max-w-2xl mx-auto text-shadow">
              Experience the taste of freshness with MilkyWay. We deliver the highest quality dairy products straight from the farm to your doorstep.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                <Link href="/products">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/calculator">
                  Milk Calculator <Calculator className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Why Choose MilkyWay?</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground mb-12">
              We are committed to quality, convenience, and sustainability. Discover what makes us different.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="p-4 bg-primary/20 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf"><path d="M11 20A7 7 0 0 1 4 13H2a10 10 0 0 0 10 10zM2 13a10 10 0 0 1 10-10 10 10 0 0 1 10 10h-2a7 7 0 0 0-7-7 7 7 0 0 0-7 7z"/><path d="M12 4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/></svg>
                </div>
                <h3 className="font-headline text-xl font-semibold mb-2">Farm Fresh Quality</h3>
                <p className="text-muted-foreground">Directly sourced from local farms, ensuring peak freshness and nutritional value.</p>
              </div>
              <div className="flex flex-col items-center">
                 <div className="p-4 bg-primary/20 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 9h4l4 4v4h-8v-4h-4V9Z"/><circle cx="7.5" cy="18.5" r="2.5"/><circle cx="17.5" cy="18.5" r="2.5"/></svg>
                </div>
                <h3 className="font-headline text-xl font-semibold mb-2">Convenient Delivery</h3>
                <p className="text-muted-foreground">Flexible delivery slots that fit your schedule, bringing freshness right to you.</p>
              </div>
              <div className="flex flex-col items-center">
                 <div className="p-4 bg-primary/20 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calculator"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
                </div>
                <h3 className="font-headline text-xl font-semibold mb-2">Smart Tools</h3>
                <p className="text-muted-foreground">Use our AI calculator to estimate your family's milk needs and reduce waste.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t">
        <div className="container mx-auto py-6 px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MilkyWay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
