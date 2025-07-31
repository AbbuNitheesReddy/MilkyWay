
import React from "react";
import { ShoppingBasket, Leaf, Truck, ChevronRight } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  hint: string;
  size: string;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'A2 Desi Cow Milk',
    description: 'Pure and natural A2 milk from grass-fed Gir cows, perfect for daily consumption.',
    price: 75,
    image: '/images/milk.png',
    hint: 'glass milk',
    size: '1 Litre',
  },
  {
    id: '2',
    name: 'A2 Cow Ghee',
    description: 'Traditional Bilona Ghee, rich in aroma and nutrients. Made from A2 milk curd.',
    price: 650,
    image: '/images/ghee.png',
    hint: 'ghee jar',
    size: '500ml',
  },
  {
    id: '3',
    name: 'Fresh A2 Paneer',
    description: 'Soft and creamy paneer made from A2 milk, ideal for delicious home-cooked meals.',
    price: 220,
    image: '/images/paneer.png',
    hint: 'paneer cubes',
    size: '200g',
  },
  {
    id: '4',
    name: 'Natural A2 Curd',
    description: 'Thick and tasty curd made from A2 milk, a great probiotic for a healthy gut.',
    price: 90,
    image: '/images/curd.png',
    hint: 'curd bowl',
    size: '400g',
  },
  {
    id: '5',
    name: 'A2 Milk Butter',
    description: 'Creamy white butter made traditionally from A2 milk. Pure and unsalted.',
    price: 250,
    image: '/images/butter.png',
    hint: 'butter block',
    size: '200g',
  },
  {
    id: '6',
    name: 'Buttermilk (Chaas)',
    description: 'Refreshing and digestive buttermilk spiced with traditional Indian herbs.',
    price: 40,
    image: '/images/buttermilk.png',
    hint: 'buttermilk glass',
    size: '500ml',
  },
  {
    id: '7',
    name: 'A2 Khoya/Mawa',
    description: 'Rich, dense milk solids, perfect for preparing authentic Indian sweets.',
    price: 300,
    image: '/images/khoya.png',
    hint: 'khoya pieces',
    size: '250g',
  },
  {
    id: '8',
    name: 'Flavored Yogurt',
    description: 'Creamy A2 yogurt blended with real fruit pulp. A healthy and delicious snack.',
    price: 70,
    image: '/images/yogurt.png',
    hint: 'yogurt cup',
    size: '150g',
  },
  {
    id: '9',
    name: 'Artisanal Cheese',
    description: 'Aged cheddar made from pure A2 milk, offering a sharp and savory flavor profile.',
    price: 450,
    image: '/images/cheese.png',
    hint: 'cheese block',
    size: '150g',
  }
];


export type Order = {
  id: string;
  date: string;
  status: 'Delivered' | 'Processing' | 'Cancelled' | 'Packed';
  total: number;
  items: {
    productId: string;
    quantity: number;
  }[];
}

export type Category = {
  name: string;
  icon: React.ReactNode;
  href: string;
};

export const categories: Category[] = [
  { name: 'Milk', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M12 2c-3 0-5.2 2.4-5.2 5.2 0 2.2 1 4 2.2 5.5.5.6.8 1.2.8 1.8v5.5c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V14.5c0-.6.3-1.2.8-1.8 1.2-1.5 2.2-3.3 2.2-5.5C17.2 4.4 15 2 12 2z"/><path d="M12 2v2.5"/></svg>, href: '/products' },
  { name: 'Ghee', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M20.2 7.8 12 16l-8.2-8.2a2.4 2.4 0 0 1 3.4-3.4L12 9l4.8-4.8a2.4 2.4 0 0 1 3.4 3.4Z"/><path d="M7.8 20.2 16 12l-8.2-8.2"/></svg>, href: '/products' },
  { name: 'Paneer', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 8h10"/><path d="M7 12h10"/><path d="M7 16h10"/></svg>, href: '/products' },
  { name: 'Curd', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M8 11h.01"/><path d="M12 11h.01"/><path d="M16 11h.01"/><path d="M21 14c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4v-3c0-.8.2-1.5.5-2.1"/><path d="M21 9a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2c0 .8.2 1.5.5 2.1"/></svg>, href: '/products' },
  { name: 'Butter', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M20 9H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Z"/><path d="M5 9V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/></svg>, href: '/products' },
  { name: 'More', icon: <ChevronRight/>, href: '/products' },
];

export const howItWorks = [
    { title: "Subscribe & Choose", description: "Select your favorite dairy products and a delivery schedule that works for you.", icon: <ShoppingBasket className="h-10 w-10 text-primary" /> },
    { title: "Freshly Prepared", description: "We prepare your order with the freshest ingredients from our farm on delivery day.", icon: <Leaf className="h-10 w-10 text-primary" /> },
    { title: "Doorstep Delivery", description: "Our team delivers your order right to your doorstep, ensuring maximum freshness.", icon: <Truck className="h-10 w-10 text-primary" /> }
];

export const testimonials = [
  { name: "Priya S.", quote: "The best and the purest milk I have ever had. The quality is unmatched and my kids love it!", rating: 5 },
  { name: "Rohan M.", quote: "MilkyWay has become a part of our daily routine. The paneer is so soft and the ghee has an amazing aroma. Highly recommended!", rating: 5 },
  { name: "Anjali K.", quote: "I love the convenience of their subscription service. Fresh milk delivered to my door every morning is a blessing.", rating: 5 },
];

export const branches = [
  { name: "Mootown Central", address: "123 Dairy Lane, Mootown, CA 90210" },
  { name: "Green Pastures", address: "456 Meadow Rd, Greenfield, CA 90211" },
  { name: "City Creamery", address: "789 Urban Ave, Metroville, CA 90212" },
];
