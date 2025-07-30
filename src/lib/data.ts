
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
    price: 3.50,
    image: 'https://placehold.co/400x400.png',
    hint: 'glass milk',
    size: '1 Litre',
  },
  {
    id: '2',
    name: 'A2 Cow Ghee',
    description: 'Traditional Bilona Ghee, rich in aroma and nutrients. Made from A2 milk curd.',
    price: 12.50,
    image: 'https://placehold.co/400x400.png',
    hint: 'ghee jar',
    size: '500ml',
  },
  {
    id: '3',
    name: 'Fresh A2 Paneer',
    description: 'Soft and creamy paneer made from A2 milk, ideal for delicious home-cooked meals.',
    price: 4.99,
    image: 'https://placehold.co/400x400.png',
    hint: 'paneer cubes',
    size: '200g',
  },
  {
    id: '4',
    name: 'Natural A2 Curd',
    description: 'Thick and tasty curd made from A2 milk, a great probiotic for a healthy gut.',
    price: 2.50,
    image: 'https://placehold.co/400x400.png',
    hint: 'curd bowl',
    size: '400g',
  },
  {
    id: '5',
    name: 'A2 Milk Butter',
    description: 'Creamy white butter made traditionally from A2 milk. Pure and unsalted.',
    price: 5.50,
    image: 'https://placehold.co/400x400.png',
    hint: 'butter block',
    size: '200g',
  },
  {
    id: '6',
    name: 'Buttermilk (Chaas)',
    description: 'Refreshing and digestive buttermilk spiced with traditional Indian herbs.',
    price: 1.50,
    image: 'https://placehold.co/400x400.png',
    hint: 'buttermilk glass',
    size: '500ml',
  },
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
        id: 'MW-86755',
        date: '2023-10-28',
        status: 'Packed',
        total: 12.25,
        items: [
            { productId: '2', quantity: 1 },
            { productId: '5', quantity: 1 },
        ]
    },
    {
        id: 'MW-86753',
        date: '2023-10-12',
        status: 'Delivered',
        total: 10.00,
        items: [
            { productId: '4', quantity: 1 },
            { productId: '1', quantity: 2 },
        ]
    },
     {
        id: 'MW-86752',
        date: '2023-10-11',
        status: 'Processing',
        total: 4.20,
        items: [
            { productId: '6', quantity: 1 },
        ]
    },
    {
        id: 'MW-85234',
        date: '2023-09-18',
        status: 'Cancelled',
        total: 6.75,
        items: [
            { productId: '3', quantity: 1 },
        ]
    },
];
