
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">About MilkyWay</h1>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
          We are passionate about bringing you the freshest, purest, and most wholesome dairy products, straight from our farm to your family.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="font-headline text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            MilkyWay Dairyworks was started by a passionate farmer, who left his corporate job to follow his calling of going back to the land to produce pure food using sustainable farming practices. Our farm is located in the lush green areas of Jubilee Hills, Hyderabad.
          </p>
          <p className="text-muted-foreground">
            Our mission is simple: to provide our community with dairy products that are not only delicious but also ethically and sustainably produced. We believe in happy cows, healthy land, and nourishing food.
          </p>
        </div>
        <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/MilkyWay Farm.jpg"
            alt="The MilkyWay farm"
            fill
            className="object-cover"
            quality={90}
            sizes="(max-width: 768px) 100vw, 50vw"
            data-ai-hint="farm landscape"
          />
        </div>
      </div>

       <div className="grid md:grid-cols-2 gap-12 items-center">
         <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
          <Image
            src="/images/cows.jpg"
            alt="Happy cows grazing"
            fill
            className="object-cover"
            quality={90}
            sizes="(max-width: 768px) 100vw, 50vw"
            data-ai-hint="happy cows"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="font-headline text-3xl font-bold mb-4">Our Commitment</h2>
          <p className="text-muted-foreground mb-4">
           We are committed to the highest standards of animal welfare. Our cows are not given any hormones, antibiotics or drugs. They are fed pesticide free green fodder grown at our own farm, not separated from their calves and encouraged to roam free.
          </p>
          <p className="text-muted-foreground">
           This love and care reflects in the superior quality of our A2 milk. We follow a completely automated, hands-free milking process, ensuring the utmost hygiene. The milk is chilled instantly to preserve its freshness and nutrients, right until it reaches your doorstep.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
        <div>
          <h2 className="font-headline text-3xl font-bold mb-4">Our Products</h2>
          <p className="text-muted-foreground mb-4">
            We take pride in our range of premium dairy products, all made with the same care and attention to quality. From fresh A2 milk to artisanal cheese, our products are crafted to bring the authentic taste of farm-fresh dairy to your table.
          </p>
          <p className="text-muted-foreground">
            Every product we offer is made with milk from our own herd, ensuring complete traceability and consistent quality. We use traditional methods combined with modern technology to create dairy products that are both nutritious and delicious.
          </p>
        </div>
        <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/Milk.jpg"
            alt="Fresh A2 milk from MilkyWay"
            fill
            className="object-cover"
            quality={90}
            sizes="(max-width: 768px) 100vw, 50vw"
            data-ai-hint="milk bottle"
          />
        </div>
      </div>
    </div>
  );
}