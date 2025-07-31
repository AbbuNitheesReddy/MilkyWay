
'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { Order, products } from '@/lib/data';

// This is a mock database. In a real app, you would fetch this from a real database.
// For the purpose of this prototype, we're creating a mock list of orders.
const mockOrders: Order[] = [
    {
        id: 'MW-54321',
        date: new Date('2024-07-20T10:00:00Z').toISOString(),
        status: 'Delivered',
        total: 25.5,
        items: [
            { productId: '1', quantity: 2 },
            { productId: '3', quantity: 1 },
        ],
    },
    {
        id: 'MW-98765',
        date: new Date('2024-07-22T14:30:00Z').toISOString(),
        status: 'Packed',
        total: 15.0,
        items: [{ productId: '2', quantity: 1 }],
    },
    {
        id: 'MW-12345',
        date: new Date().toISOString(),
        status: 'Processing',
        total: 7.5,
        items: [
            { productId: '4', quantity: 1 },
            { productId: '6', quantity: 1 },
        ],
    },
];

const getOrderStatusInputSchema = z.object({
  orderId: z.string().describe('The ID of the order to get the status for.'),
});

const getOrderStatusOutputSchema = z.object({
  status: z.string().describe('The status of the order.'),
  date: z.string().describe('The date the order was placed.'),
  total: z.number().describe('The total amount of the order.'),
});


export const getOrderStatus = ai.defineTool(
  {
    name: 'getOrderStatus',
    description: 'Get the status of a customer\'s order by their order ID.',
    inputSchema: getOrderStatusInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    const order = mockOrders.find((o) => o.id === input.orderId);
    
    if (!order) {
        return `Order with ID ${input.orderId} not found.`
    }

    const orderDate = new Date(order.date).toLocaleDateString();

    return `The status for order #${order.id} (placed on ${orderDate}) is: ${order.status}. The total was ₹${order.total.toFixed(2)}.`;
  }
);
