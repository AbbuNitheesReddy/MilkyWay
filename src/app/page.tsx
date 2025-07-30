import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator, MapPin, Phone, Mail } from 'lucide-react';
import { products } from '@/lib/data';
import { ProductCard } from './(main)/_components/product-card';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white bg-black">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="A beautiful dairy farm at sunrise"
          fill
          className="object-cover z-0 opacity-50"
          data-ai-hint="dairy farm sunrise"
        />
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Featured Products</h2>
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
                Show All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">About Our Farm & Cows</h2>
              <p className="text-muted-foreground mb-4">
                At MilkyWay, we believe that happy cows produce the best milk. Our family-owned farm provides a nurturing environment where our cows graze freely on lush, green pastures. We are committed to sustainable farming practices, ensuring the health of our herd and the land we all share.
              </p>
              <p className="text-muted-foreground">
                The result is a range of dairy products that are not only delicious but also wholesome and packed with natural goodness. From our farm to your family, we bring you the taste of pure dedication.
              </p>
            </div>
            <div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Happy cows grazing in a field"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint="cows field"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Visit or Contact Us</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground mt-4">
              We'd love to hear from you. Reach out with any questions or stop by our farm store.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
                <Image
                    src="https://placehold.co/600x400.png"
                    alt="Map showing farm location"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-full object-cover"
                    data-ai-hint="map farm"
                />
            </div>
            <div className="flex flex-col justify-center space-y-6">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-headline text-xl font-semibold">Our Location</h3>
                        <p className="text-muted-foreground">123 Dairy Lane, Mootown, CA 90210</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-headline text-xl font-semibold">Call Us</h3>
                        <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-headline text-xl font-semibold">Email Us</h3>
                        <p className="text-muted-foreground">contact@milkyway.com</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
