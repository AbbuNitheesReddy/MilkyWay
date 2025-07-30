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
    name: 'Farm-Fresh Whole Milk',
    description: 'Creamy, rich, and full of natural goodness. Perfect for drinking, cooking, and baking.',
    price: 3.50,
    image: 'https://placehold.co/400x400.png',
    hint: 'milk bottle',
    size: '1 Gallon',
  },
  {
    id: '2',
    name: 'Natural Skim Milk',
    description: 'All the essential nutrients with less fat. A light and healthy choice for your family.',
    price: 3.25,
    image: 'https://placehold.co/400x400.png',
    hint: 'milk carton',
    size: '1 Gallon',
  },
  {
    id: '3',
    name: 'Artisanal Greek Yogurt',
    description: 'Thick, creamy, and packed with protein. A delicious and healthy breakfast or snack.',
    price: 4.99,
    image: 'https://placehold.co/400x400.png',
    hint: 'yogurt container',
    size: '32 oz',
  },
  {
    id: '4',
    name: 'Organic Salted Butter',
    description: 'Made from the cream of grass-fed cows. Adds rich flavor to any dish.',
    price: 5.50,
    image: 'https://placehold.co/400x400.png',
    hint: 'butter stick',
    size: '8 oz',
  },
  {
    id: '5',
    name: 'Sharp Cheddar Cheese',
    description: 'Aged for over 12 months for a complex, nutty flavor. Great for snacking or melting.',
    price: 6.75,
    image: 'https://placehold.co/400x400.png',
    hint: 'cheese block',
    size: '8 oz Block',
  },
  {
    id: '6',
    name: 'Probiotic Kefir',
    description: 'A fermented milk drink with a tangy taste, loaded with beneficial probiotics for gut health.',
    price: 4.20,
    image: 'https://placehold.co/400x400.png',
    hint: 'kefir bottle',
    size: '32 fl oz',
  },
    {
    id: '7',
    name: 'Lactose-Free Milk',
    description: 'Real dairy, just without the lactose. Easy to digest and enjoy.',
    price: 4.50,
    image: 'https://placehold.co/400x400.png',
    hint: 'milk carton purple',
    size: '1/2 Gallon',
  },
  {
    id: '8',
    name: 'Heavy Cream',
    description: 'The secret to luscious sauces, soups, and desserts. Rich and indulgent.',
    price: 3.80,
    image: 'https://placehold.co/400x400.png',
    hint: 'cream carton',
    size: '1 Pint',
  },
];

export type Order = {
  id: string;
  date: string;
  status: 'Delivered' | 'Processing' | 'Cancelled';
  total: number;
  items: {
    productId: string;
    quantity: number;
  }[];
}

export const orders: Order[] = [
    {
        id: 'MW-86754',
        date: '2023-10-26',
        status: 'Delivered',
        total: 19.74,
        items: [
            { productId: '1', quantity: 1 },
            { productId: '3', quantity: 2 },
            { productId: '4', quantity: 1 },
        ]
    },
    {
        id: 'MW-86753',
        date: '2023-10-12',
        status: 'Delivered',
        total: 10.00,
        items: [
            { productId: '4', quantity: 1 },
            { productId: '2', quantity: 1 },
        ]
    },
    {
        id: 'MW-85234',
        date: '2023-09-18',
        status: 'Cancelled',
        total: 6.75,
        items: [
            { productId: '5', quantity: 1 },
        ]
    },
];
