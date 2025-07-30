
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, ShoppingBasket, Truck, Leaf, Star, Quote, Facebook, Instagram, Twitter } from 'lucide-react';
import { products } from '@/lib/data';
import { ProductCard } from './(main)/_components/product-card';
import { Header } from './(main)/_components/header';
import { Footer } from './(main)/_components/footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const categories = [
  { name: 'Milk', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M12 2c-3 0-5.2 2.4-5.2 5.2 0 2.2 1 4 2.2 5.5.5.6.8 1.2.8 1.8v5.5c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V14.5c0-.6.3-1.2.8-1.8 1.2-1.5 2.2-3.3 2.2-5.5C17.2 4.4 15 2 12 2z"/><path d="M12 2v2.5"/></svg>, href: '/products' },
  { name: 'Ghee', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M20.2 7.8 12 16l-8.2-8.2a2.4 2.4 0 0 1 3.4-3.4L12 9l4.8-4.8a2.4 2.4 0 0 1 3.4 3.4Z"/><path d="M7.8 20.2 16 12l-8.2-8.2"/></svg>, href: '/products' },
  { name: 'Paneer', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 8h10"/><path d="M7 12h10"/><path d="M7 16h10"/></svg>, href: '/products' },
  { name: 'Curd', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M8 11h.01"/><path d="M12 11h.01"/><path d="M16 11h.01"/><path d="M21 14c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4v- organizações"/><path d="M21 9a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2c0 .8.2 1.5.5 2.1"/></svg>, href: '/products' },
  { name: 'Butter', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M20 9H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Z"/><path d="M5 9V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/></svg>, href: '/products' },
  { name: 'More', icon: <ChevronRight/>, href: '/products' },
];

const howItWorks = [
    { title: "Subscribe & Choose", description: "Select your favorite dairy products and a delivery schedule that works for you.", icon: <ShoppingBasket className="h-10 w-10 text-primary" /> },
    { title: "Freshly Prepared", description: "We prepare your order with the freshest ingredients from our farm on delivery day.", icon: <Leaf className="h-10 w-10 text-primary" /> },
    { title: "Doorstep Delivery", description: "Our team delivers your order right to your doorstep, ensuring maximum freshness.", icon: <Truck className="h-10 w-10 text-primary" /> }
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
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white bg-blue-100">
          <Image
            src="https://storage.googleapis.com/aai-web-samples/milky-way-hero.png"
            alt="Happy cows in a lush green field under a clear blue sky"
            fill
            className="object-cover z-0"
            priority
            data-ai-hint="happy cows field"
          />
          <div className="relative z-10 container mx-auto px-4">
            <div className="bg-black/40 p-8 rounded-lg max-w-2xl mx-auto">
                <p className="font-body text-2xl md:text-3xl text-gray-200 tracking-wider mb-2 text-shadow">We believe</p>
                <h1 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-wide uppercase text-shadow-lg">
                    Happy Cows give Healthy Milk!
                </h1>
                <Button asChild size="lg" className="mt-8">
                    <Link href="/products">Shop Now <ArrowRight className="ml-2"/></Link>
                </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-xl md:text-2xl font-bold tracking-wider mb-6">
              WE DELIVER FRESH AND PURE A2 MILK PRODUCED BY OUR INDIGENOUS-BREED COWS WITHIN 3 HOURS OF MILKING, TO GURGAON & SOUTH DELHI.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              MilkyWay Dairyworks was started by a passionate farmer, who left his corporate job to follow his calling of going back to the land to produce pure food using sustainable farming practices. Our farm is located in the Aravalis, near Golf Course Road, Gurgaon. MilkyWay milk is produced at our own farm and not aggregated from different farms. Our cows are not given any hormones, antibiotics or drugs. They are fed pesticide free green fodder grown at our own farm, not separated from their calves and encouraged to roam free.
            </p>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Shop by Category</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category) => (
                <Link key={category.name} href={category.href} className="group text-center p-4 rounded-lg transition-all duration-300 hover:bg-primary/5 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-center justify-center bg-gray-100 rounded-full w-24 h-24 mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/10">
                       {React.cloneElement(category.icon, { className: 'h-10 w-10 text-primary transition-colors duration-300' })}
                    </div>
                    <h3 className="font-bold text-lg">{category.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Bestsellers</h2>
               <p className="max-w-3xl mx-auto text-muted-foreground mt-4">
                A selection of our finest and freshest dairy products, loved by our customers.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="https://placehold.co/600x450.png"
                  alt="Happy cows grazing in a field"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-lg"
                  data-ai-hint="happy cows"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">The MilkyWay Farm</h2>
                <p className="text-muted-foreground mb-4">
                  Our farm is a sanctuary where technology meets tradition. We pamper our Gir cows with nourishing fodder, music, and a free-roaming environment. This love and care reflects in the superior quality of our A2 milk.
                </p>
                <p className="text-muted-foreground">
                  We follow a completely automated, hands-free milking process, ensuring the utmost hygiene. The milk is chilled instantly to preserve its freshness and nutrients, right until it reaches your doorstep.
                </p>
                 <Button asChild size="lg" variant="link" className="px-0">
                    <Link href="#">Learn More <ArrowRight className="ml-2 h-5 w-5" /></Link>
                 </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">How It Works</h2>
                    <p className="max-w-3xl mx-auto text-muted-foreground mt-4">A simple process to get fresh milk delivered to your home.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                    {howItWorks.map((step, index) => (
                        <div key={index} className="p-6 bg-card rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="flex items-center justify-center bg-primary/10 rounded-full w-20 h-20 mx-auto mb-6">
                                {step.icon}
                            </div>
                            <h3 className="font-headline text-2xl font-bold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="bg-background p-8 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-muted-foreground italic mb-6 flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="font-bold">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  We would be delighted to welcome you to the farm to meet our cows and understand our farming practices.
                </p>
                <p className="text-muted-foreground mb-4">
                  We are reachable on call or whatsapp at +91 9810649456 / 9667035805 or <a href="mailto:info@milkyway.com" className="text-primary hover:underline">info@milkyway.com</a>
                </p>
                <p className="text-muted-foreground mb-6">
                  You can also fill up the form below to request a call back
                </p>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="First Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (required)</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message (required)</Label>
                    <Textarea id="message" required />
                  </div>
                  <Button type="submit" variant="outline">Submit</Button>
                </form>
              </div>
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Our Farm</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>MILKYWAY Dairy Works</p>
                  <p>Baliawas Village, Near Gwal Pahari</p>
                  <p>Gurgaon 122002</p>
                </div>
                <div className="mt-6">
                  <Image
                    src="https://placehold.co/600x400.png"
                    alt="Map of our farm location"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full"
                    data-ai-hint="map view"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
