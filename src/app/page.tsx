
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { products, categories, howItWorks, testimonials } from '@/lib/data.tsx';
import { ProductCard } from './(main)/_components/product-card';
import { Header } from './(main)/_components/header';
import { Footer } from './(main)/_components/footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Chatbot } from '@/components/ui/chatbot';


export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <Header />
      
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
          <Image
            src="/images/hero.jpg"
            alt="Happy cows in a lush green field under a clear blue sky"
            fill
            className="object-cover z-0"
            priority
            quality={95}
            sizes="100vw"
            data-ai-hint="happy cows field"
          />
          <div className="absolute inset-0 bg-black/30 z-0"></div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="p-8 rounded-lg max-w-2xl mx-auto">
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

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-xl md:text-2xl font-bold tracking-wider mb-6">
              WE DELIVER FRESH AND PURE A2 MILK PRODUCED BY OUR INDIGENOUS-BREED COWS WITHIN 3 HOURS OF MILKING, TO HYDERABAD CITY.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              MilkyWay Dairyworks was started by a passionate farmer, who left his corporate job to follow his calling of going back to the land to produce pure food using sustainable farming practices. Our farm is located in the lush green areas of Jubilee Hills, Hyderabad. MilkyWay milk is produced at our own farm and not aggregated from different farms. Our cows are not given any hormones, antibiotics or drugs. They are fed pesticide free green fodder grown at our own farm, not separated from their calves and encouraged to roam free.
            </p>
          </div>
        </section>

        <section className="py-16">
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

        <section className="py-16 bg-card">
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
              <Button asChild size="lg">
                <Link href="/products">
                  View All Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                    src="/images/cows.jpg"
                    alt="Happy cows grazing in a field"
                    width={600}
                    height={450}
                    className="rounded-lg shadow-lg object-cover w-full h-full"
                    quality={95}
                    sizes="(max-width: 768px) 100vw, 600px"
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
                    <Link href="/about">Learn More <ArrowRight className="ml-2 h-5 w-5" /></Link>
                 </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">How It Works</h2>
                    <p className="max-w-3xl mx-auto text-muted-foreground mt-4">A simple process to get fresh milk delivered to your home.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                    {howItWorks.map((step, index) => (
                        <div key={index} className="p-6 bg-background rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
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

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="bg-card p-8 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
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
        
        <section className="py-16 bg-card">
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
                  <Button type="submit">Submit</Button>
                </form>
              </div>
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Our Farm</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>MILKYWAY Dairy Works</p>
                  <p>Jubilee Hills, Hyderabad</p>
                  <p>Telangana 500033</p>
                </div>
                <div className="mt-6 rounded-lg shadow-lg overflow-hidden" style={{ height: '400px' }}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30452.77953614!2d78.39916562431642!3d17.431179899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97031531026f%3A0xbf371f589b17fc02!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana%20500033!5e0!3m2!1sen!2sin!4v1716034069748!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MilkyWay Farm Location"
                    aria-label="Google Maps showing MilkyWay Farm location in Jubilee Hills, Hyderabad"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      
      <Footer />
      <Chatbot />
    </>
  );
}
