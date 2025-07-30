
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, Milk, ShoppingCart, Star } from 'lucide-react';
import { products } from '@/lib/data';
import { ProductCard } from './(main)/_components/product-card';
import { Header } from './(main)/_components/header';
import { Footer } from './(main)/_components/footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const categories = [
  { name: 'Milk', icon: <Milk />, href: '/products' },
  { name: 'Ghee', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M20.2 7.8 12 16l-8.2-8.2a2.4 2.4 0 0 1 3.4-3.4L12 9l4.8-4.8a2.4 2.4 0 0 1 3.4 3.4Z"/><path d="M7.8 20.2 16 12l-8.2-8.2"/></svg>, href: '/products' },
  { name: 'Paneer', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 8h10"/><path d="M7 12h10"/><path d="M7 16h10"/></svg>, href: '/products' },
  { name: 'Curd', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M8 11h.01"/><path d="M12 11h.01"/><path d="M16 11h.01"/><path d="M21 14c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4v- organizações"/><path d="M21 9a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2c0 .8.2 1.5.5 2.1"/></svg>, href: '/products' },
  { name: 'Butter', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M20 9H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Z"/><path d="M5 9V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/></svg>, href: '/products' },
];

const howItWorks = [
    { title: "Subscribe & Choose", description: "Select your favorite dairy products and a delivery schedule that works for you." },
    { title: "Freshly Prepared", description: "We prepare your order with the freshest ingredients from our farm on delivery day." },
    { title: "Doorstep Delivery", description: "Our team delivers your order right to your doorstep, ensuring maximum freshness." }
];

const testimonials = [
  { name: "Priya S.", quote: "The best and the purest milk I have ever had. The quality is unmatched and my kids love it!", rating: 5 },
  { name: "Rohan M.", quote: "MilkyWay has become a part of our daily routine. The paneer is so soft and the ghee has an amazing aroma. Highly recommended!", rating: 5 },
  { name: "Anjali K.", quote: "I love the convenience of their subscription service. Fresh milk delivered to my door every morning is a blessing.", rating: 5 },
];

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center text-center text-white bg-black">
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="A beautiful dairy farm at sunrise"
            fill
            className="object-cover z-0 opacity-40"
            data-ai-hint="dairy farm sunrise"
          />
          <div className="relative z-10 container mx-auto px-4">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-shadow-lg">
              Farm-Fresh Goodness, Delivered Daily.
            </h1>
            <p className="font-body text-lg md:text-xl max-w-2xl mx-auto text-shadow">
              Pure, unadulterated A2 milk and dairy products from our happy cows to your home.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                <Link href="/products">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Shop by Category</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {categories.map((category) => (
                <Link key={category.name} href={category.href} className="group text-center">
                    <div className="flex items-center justify-center bg-background rounded-lg w-24 h-24 mx-auto mb-4 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg">
                       {React.cloneElement(category.icon, { className: 'h-10 w-10 text-primary transition-colors duration-300 group-hover:text-primary-foreground' })}
                    </div>
                    <h3 className="font-bold text-lg">{category.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>


        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Bestsellers</h2>
               <p className="max-w-3xl mx-auto text-muted-foreground mt-4">
                A selection of our finest and freshest dairy products, loved by our customers.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/products">
                  View All Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">The MilkyWay Farm</h2>
                <p className="text-muted-foreground mb-4">
                  Our farm is a sanctuary where technology meets tradition. We pamper our Gir cows with nourishing fodder, music, and a free-roaming environment. This love and care reflects in the superior quality of our A2 milk.
                </p>
                <p className="text-muted-foreground">
                  We follow a completely automated, hands-free milking process, ensuring the utmost hygiene. The milk is chilled instantly to preserve its freshness and nutrients, right until it reaches your doorstep.
                </p>
              </div>
              <div>
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Happy cows grazing in a field"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                  data-ai-hint="happy cows"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">How It Works</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {howItWorks.map((step, index) => (
                        <div key={index} className="p-6">
                            <div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full w-16 h-16 mx-auto mb-6 font-bold text-2xl">
                                {index + 1}
                            </div>
                            <h3 className="font-headline text-2xl font-bold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="bg-background p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-bold text-right">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            </div>
             <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is A2 milk?</AccordionTrigger>
                    <AccordionContent>
                    A2 milk is a variety of cow's milk that mostly lacks a form of β-casein proteins called A1, and instead has the A2 form. Our milk comes from Gir cows, which naturally produce A2 milk, known for being easier to digest for many people.
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-2">
                    <AccordionTrigger>Is your milk organic?</AccordionTrigger>
                    <AccordionContent>
                    Yes, our cows are fed organic fodder and graze in pastures free from chemical fertilizers and pesticides. We are committed to natural and sustainable farming practices to bring you the purest products.
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-3">
                    <AccordionTrigger>How do subscriptions work?</AccordionTrigger>
                    <AccordionContent>
                    You can subscribe to our products for regular delivery. Simply choose your products, set a delivery frequency (daily, alternate days, etc.), and we'll handle the rest. You can easily pause, modify, or cancel your subscription from your account.
                    </AccordionContent>
                </AccordionItem>
             </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
