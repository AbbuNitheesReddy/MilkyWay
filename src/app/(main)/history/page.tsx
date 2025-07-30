import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { orders, products } from "@/lib/data";
import { Eye, RefreshCw } from "lucide-react";

export default function HistoryPage() {
  const getProduct = (id: string) => products.find(p => p.id === id);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-headline text-4xl md:text-5xl font-bold text-center mb-8">Order History</h1>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Order ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Items</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge variant={order.status === 'Delivered' ? 'default' : order.status === 'Cancelled' ? 'destructive' : 'secondary'}
                        className={order.status === 'Delivered' ? 'bg-green-600/80 text-white' : ''}
                    >
                        {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside text-sm">
                        {order.items.map(item => (
                            <li key={item.productId}>{getProduct(item.productId)?.name} x{item.quantity}</li>
                        ))}
                    </ul>
                  </TableCell>
                  <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-2 justify-end">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View Order</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <RefreshCw className="h-4 w-4" />
                        <span className="sr-only">Reorder</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
