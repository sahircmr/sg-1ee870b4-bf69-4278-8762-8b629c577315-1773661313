import { SEO } from "@/components/SEO";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <>
      <SEO 
        title="Contact IntPurple Technologies - Get in Touch"
        description="Have a project in mind? Contact IntPurple Technologies. We're located in Bangalore, Bahrain, UAE, UK, Malta, and Kozhikode."
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 md:py-24 pattern-subtle-dots">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Together</h1>
              <p className="text-xl text-muted-foreground">
                Have a project in mind? We'd love to hear about it. Reach out to the IntPurple team and let's explore how we can help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-5 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="md:col-span-3">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Your name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="your@email.com" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input id="company" placeholder="Your company name" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (Optional)</Label>
                        <Input id="phone" type="tel" placeholder="+91 1234567890" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="How can we help?" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your project or inquiry..." 
                          rows={6}
                          required 
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="md:col-span-2 space-y-6">
                <Card className="border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-purple-light flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a 
                          href="mailto:Contact@intpurple.com" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          Contact@intpurple.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-purple-light flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a 
                          href="tel:+917561057363" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +91-7561057363
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-purple-light flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Global Presence</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>Bangalore, India</li>
                          <li>Bahrain</li>
                          <li>United Arab Emirates</li>
                          <li>United Kingdom</li>
                          <li>Malta</li>
                          <li>Kozhikode, India</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm pattern-dots text-white">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Visit Our Website</h3>
                    <a 
                      href="https://intpurple.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/90 hover:text-white transition-colors underline"
                    >
                      intpurple.com
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}