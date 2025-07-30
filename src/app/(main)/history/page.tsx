
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { orders, products } from "@/lib/data";
import { Eye, RefreshCw, ChevronDown, Package, Truck, MapPin } from "lucide-react";
import Image from "next/image";

const OrderTracking = ({ status }: { status: 'Delivered' | 'Processing' | 'Cancelled' | 'Packed' }) => (
    <div className="p-4">
        <h4 className="font-semibold mb-4 text-lg">Order Status</h4>
        <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
                <div className={`h-12 w-12 rounded-full flex items-center justify-center ${status === 'Processing' || status === 'Packed' || status === 'Delivered' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                    <Package />
                </div>
                <p className="text-sm mt-2">Processing</p>
            </div>
            <div className={`flex-grow h-1 mx-2 ${status === 'Packed' || status === 'Delivered' ? 'bg-primary' : 'bg-muted'}`}></div>
            <div className="flex flex-col items-center">
                <div className={`h-12 w-12 rounded-full flex items-center justify-center ${status === 'Packed' || status === 'Delivered' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                    <Truck />
                </div>
                <p className="text-sm mt-2">Out for Delivery</p>
            </div>
            <div className={`flex-grow h-1 mx-2 ${status === 'Delivered' ? 'bg-primary' : 'bg-muted'}`}></div>
            <div className="flex flex-col items-center">
                <div className={`h-12 w-12 rounded-full flex items-center justify-center ${status === 'Delivered' ? 'bg-green-600 text-white' : 'bg-muted'}`}>
                    <MapPin />
                </div>
                <p className="text-sm mt-2">Delivered</p>
            </div>
        </div>
        {status === 'Packed' && (
             <div className="mt-6">
                <h5 className="font-semibold mb-2">Live Tracking</h5>
                 <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                     <Image src="https://placehold.co/600x400.png" alt="Map" fill className="object-cover" data-ai-hint="map view"/>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary">
                        <Truck className="h-8 w-8 animate-pulse" />
                     </div>
                 </div>
            </div>
        )}
    </div>
);


export default function HistoryPage() {
  const getProduct = (id: string) => products.find(p => p.id === id);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-headline text-4xl md:text-5xl font-bold text-center mb-8">Order History</h1>
      <Card className="bg-transparent">
        <CardContent className="p-0">
          <Accordion type="single" collapsible className="w-full">
            {orders.map((order) => (
              <AccordionItem value={order.id} key={order.id} className="border-b-0">
                <Card className="mb-4">
                  <AccordionTrigger className="w-full p-4 hover:no-underline">
                    <div className="flex justify-between items-center w-full">
                        <div className="text-left">
                            <p className="font-bold text-lg">Order #{order.id}</p>
                            <p className="text-sm text-muted-foreground">{new Date(order.date).toLocaleDateString()}</p>
                        </div>
                        <Badge variant={order.status === 'Delivered' ? 'default' : order.status === 'Cancelled' ? 'destructive' : 'secondary'}
                            className={`${order.status === 'Delivered' ? 'bg-green-600/80 text-white' : ''} ${order.status === 'Packed' ? 'bg-blue-500 text-white' : ''}`}
                        >
                            {order.status}
                        </Badge>
                         <p className="font-bold text-lg">${order.total.toFixed(2)}</p>
                         <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-4 pt-0 border-t">
                        <h4 className="font-semibold mb-4 text-lg">Order Details</h4>
                        {order.items.map(item => {
                            const product = getProduct(item.productId);
                            return (
                                <div key={item.productId} className="flex justify-between items-center mb-2">
                                    <span>{product?.name} x {item.quantity}</span>
                                    <span>${(product!.price * item.quantity).toFixed(2)}</span>
                                </div>
                            )
                        })}
                        <div className="flex justify-between font-bold mt-2">
                            <span>Total</span>
                            <span>${order.total.toFixed(2)}</span>
                        </div>
                        <div className="flex gap-2 justify-end mt-4">
                          <Button variant="outline">
                            <Eye className="mr-2 h-4 w-4" />
                            View Invoice
                          </Button>
                          <Button>
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Reorder
                          </Button>
                        </div>
                    </div>
                    <div className="border-t">
                        <OrderTracking status={order.status} />
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}

