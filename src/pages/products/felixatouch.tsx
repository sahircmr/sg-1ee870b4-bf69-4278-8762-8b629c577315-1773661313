import { SEO } from "@/components/SEO";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  Calendar, Users, FileText, CreditCard, BarChart, 
  Clock, Bell, Shield, Smartphone, CheckCircle2, ArrowRight 
} from "lucide-react";

export default function FelixaTouch() {
  return (
    <>
      <SEO 
        title="FelixaTouch - Clinic Management Software | IntPurple"
        description="Complete clinic management platform for outpatient facilities. Manage appointments, patient records, billing, and reporting with FelixaTouch."
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 md:py-32 bg-gradient-hero text-white">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="secondary" className="text-sm">Healthcare Software</Badge>
                <Badge variant="secondary" className="text-sm">Clinic Management</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">FelixaTouch</h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Complete clinic management platform for outpatient facilities
              </p>
              <p className="text-lg mb-10 text-white/80 max-w-3xl">
                FelixaTouch is an all-in-one solution designed for outpatient clinics, covering appointment scheduling, patient records, billing, insurance processing, and comprehensive reporting. Built to handle the complexity of modern healthcare operations while remaining intuitive and easy to use.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" variant="secondary">
                    Request a Demo
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30">
                    View All Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to run a modern outpatient clinic
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-light flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
                  <p className="text-muted-foreground">
                    Intuitive appointment booking with automated reminders, waitlist management, and calendar synchronization.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-light flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Patient Management</h3>
                  <p className="text-muted-foreground">
                    Complete patient profiles with medical history, treatment records, and secure document storage.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-light flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Electronic Records</h3>
                  <p className="text-muted-foreground">
                    Digital health records with consultation notes, prescriptions, and treatment plans in one place.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-light flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Billing & Payments</h3>
                  <p className="text-muted-foreground">
                    Automated invoicing, insurance claim processing, and multiple payment method support.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-light flex items-center justify-center mb-4">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Analytics & Reports</h3>
                  <p className="text-muted-foreground">
                    Real-time dashboards and customizable reports for clinical and business insights.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-light flex items-center justify-center mb-4">
                    <Bell className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Notifications</h3>
                  <p className="text-muted-foreground">
                    Automated SMS and email reminders for appointments, follow-ups, and payments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose FelixaTouch?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Reduce Administrative Overhead</h3>
                      <p className="text-muted-foreground">Automate routine tasks and let your staff focus on patient care.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Improve Patient Experience</h3>
                      <p className="text-muted-foreground">Online booking, automated reminders, and faster check-in processes.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Data-Driven Decisions</h3>
                      <p className="text-muted-foreground">Access real-time analytics to optimize clinic operations and revenue.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Compliance & Security</h3>
                      <p className="text-muted-foreground">Built with healthcare regulations and data security standards in mind.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <Clock className="h-8 w-8 text-primary mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Save Time</h3>
                    <p className="text-muted-foreground">
                      Reduce appointment scheduling time by 60% with automated booking and calendar management.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <Smartphone className="h-8 w-8 text-primary mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Mobile Access</h3>
                    <p className="text-muted-foreground">
                      Access patient records and manage your clinic from any device, anywhere.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <Shield className="h-8 w-8 text-primary mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
                    <p className="text-muted-foreground">
                      Bank-level encryption and automated backups keep your data safe and accessible.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Modernize Your Clinic?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Schedule a demo and see how FelixaTouch can transform your practice.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}