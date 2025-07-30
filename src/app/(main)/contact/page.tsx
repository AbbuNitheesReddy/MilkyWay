
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">Get In Touch</h1>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
                We'd love to hear from you! Whether you have a question, a comment, or just want to say hello, here's how to reach us.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
                <h2 className="font-headline text-3xl font-bold mb-4">Contact Form</h2>
                <p className="text-muted-foreground mb-6">
                    Fill up the form below to request a call back from our team.
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
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="you@example.com" />
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
                <h2 className="font-headline text-3xl font-bold mb-4">Our Farm</h2>
                <div className="space-y-2 text-muted-foreground mb-6">
                    <p>We would be delighted to welcome you to the farm to meet our cows and understand our farming practices.</p>
                    <p>
                        Reachable on call or whatsapp at <span className="font-semibold text-foreground">+91 9810649456</span> / <span className="font-semibold text-foreground">+91 9667035805</span> or at <a href="mailto:info@milkyway.com" className="text-primary hover:underline">info@milkyway.com</a>
                    </p>
                    <p className="font-bold pt-4">Address:</p>
                    <p>MILKYWAY Dairy Works</p>
                    <p>Baliawas Village, Near Gwal Pahari</p>
                    <p>Gurgaon 122002</p>
                </div>
                <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src="https://placehold.co/600x400.png"
                        alt="Map of our farm location"
                        fill
                        className="object-cover w-full"
                        data-ai-hint="map view"
                    />
                </div>
            </div>
        </div>
    </div>
  );
}
