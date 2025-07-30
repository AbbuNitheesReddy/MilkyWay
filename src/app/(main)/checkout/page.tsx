
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-transparent">
      <h1 className="font-headline text-4xl md:text-5xl font-bold text-center mb-8">Checkout</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <form className="md:col-span-2 space-y-8">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Delivery Address</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="address">Street Address</Label>
                <Input id="address" placeholder="123 Milky Way" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="Mootown" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                 <Select>
                    <SelectTrigger id="state">
                        <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="CA">California</SelectItem>
                        <SelectItem value="NY">New York</SelectItem>
                        <SelectItem value="TX">Texas</SelectItem>
                    </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip">Zip Code</Label>
                <Input id="zip" placeholder="12345" />
              </div>
            </CardContent>
          </Card>
           <Card className="bg-white">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Delivery Time</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="standard" className="grid md:grid-cols-2 gap-4">
                <div>
                  <RadioGroupItem value="standard" id="standard" className="peer sr-only" />
                  <Label htmlFor="standard" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                    Standard (2-3 days)
                    <span className="font-bold mt-1">Free</span>
                  </Label>
                </div>
                 <div>
                  <RadioGroupItem value="express" id="express" className="peer sr-only" />
                  <Label htmlFor="express" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                    Express (Tomorrow)
                    <span className="font-bold mt-1">$5.00</span>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
           <Card className="bg-white">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Payment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="**** **** **** 1234" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry-date">Expiry Date</Label>
                  <Input id="expiry-date" placeholder="MM / YY" />
                </div>
                <div>
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" />
                </div>
              </div>
            </CardContent>
          </Card>
        </form>
        <div className="md:col-span-1">
          <Card className="sticky top-24 bg-white">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between"><span>Whole Milk x 1</span><span>$3.50</span></div>
              <div className="flex justify-between"><span>Greek Yogurt x 2</span><span>$9.98</span></div>
              <Separator />
              <div className="flex justify-between"><span>Subtotal</span><span>$13.48</span></div>
              <div className="flex justify-between"><span>Delivery</span><span>$0.00</span></div>
              <div className="flex justify-between text-muted-foreground"><span>Taxes</span><span>$1.08</span></div>
              <Separator />
              <div className="flex justify-between font-bold text-lg"><span>Total</span><span>$14.56</span></div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" size="lg"><Link href="/history">Place Order</Link></Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
