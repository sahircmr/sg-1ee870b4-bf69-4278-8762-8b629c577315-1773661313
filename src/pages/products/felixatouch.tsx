import { SEO } from "@/components/SEO";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { 
  FileText, Users, Calendar, Monitor, Pill, 
  FlaskConical, ClipboardList, MessageSquare, CalendarCheck, FileEdit,
  Package, CreditCard, Shield, TrendingUp, Award,
  BarChart3, Calendar as CalendarIcon, Database, Laptop
} from "lucide-react";

export default function FelixaTouch() {
  return (
    <>
      <SEO 
        title="FelixaTouch - Cloud-Based Clinic Management Software | IntPurple"
        description="Complete clinic management software to streamline operations, boost growth, and maximize profitability. EMR, appointments, billing, pharmacy, lab management and more."
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 md:py-32 pattern-dots text-white">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="secondary" className="text-sm">Cloud-Based Software</Badge>
                <Badge variant="secondary" className="text-sm">Clinic Management</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">FelixaTouch</h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Complete clinic management software to streamline operations, boost growth, and maximize profitability
              </p>
              <p className="text-lg mb-10 text-white/80 max-w-3xl">
                Cloud-based clinic software offering a comprehensive suite of features designed to streamline clinic management. With a user-friendly interface and secure data storage in the cloud, FelixaTouch helps healthcare providers deliver exceptional care while optimizing clinic operations.
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

        {/* Dashboard Preview */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Intuitive Multi-Device Interface</h2>
                <p className="text-lg text-muted-foreground">
                  Access FelixaTouch from any device - desktop, tablet, or mobile
                </p>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image 
                  src="/felixatouch-dashboard.jpg" 
                  alt="FelixaTouch Dashboard - Revenue Analytics and Multi-Device Access" 
                  width={1200} 
                  height={700}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Feature Suite</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to run a modern outpatient clinic
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="bg-white border hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Electronic Medical Records</h3>
                  <p className="text-muted-foreground text-sm">
                    Advanced EMR system streamlines patient data management with secure access, updates, and sharing. Ensures compliance with healthcare standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Patient Demographics</h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive patient profiles from personal information to medical history. Ensures accurate records and supports informed decision-making.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Queue & Appointment Management</h3>
                  <p className="text-muted-foreground text-sm">
                    Streamline patient flow and minimize wait times. Front desk can generate, prioritize, cancel, or pause queues with real-time monitoring.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Monitor className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Token Display System</h3>
                  <p className="text-muted-foreground text-sm">
                    Integrates with token display boards to manage patient flow efficiently. Real-time notifications reduce crowding and enhance patient experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <ClipboardList className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Impressive Prescriptions</h3>
                  <p className="text-muted-foreground text-sm">
                    Create clear, professional prescriptions in just a few clicks. Customizable templates and intuitive design ensure better patient communication.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FlaskConical className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Lab Management</h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive lab management with seamless test ordering, sample tracking, and result management directly in the EMR.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Pill className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Pharmacy Management</h3>
                  <p className="text-muted-foreground text-sm">
                    Manage in-house or partnered pharmacy with ease. Track prescriptions, stock levels, expiry dates, and sales in real-time.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FileEdit className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Procedure Management</h3>
                  <p className="text-muted-foreground text-sm">
                    Organize and track clinical procedures with structured ordering and documentation. Ensures standardization and accurate billing.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Engagement Messaging</h3>
                  <p className="text-muted-foreground text-sm">
                    Automated SMS, email, or WhatsApp reminders. Send appointment confirmations, follow-ups, health tips, and promotional offers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <CalendarCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Next-Visit Setup</h3>
                  <p className="text-muted-foreground text-sm">
                    Schedule follow-ups seamlessly during consultation. Ensures patients stay on track with treatment plans and reduces drop-offs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Easy Templates Creation</h3>
                  <p className="text-muted-foreground text-sm">
                    Set customized templates for patient records, prescriptions, and other clinical documents in minutes.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Inventory Management</h3>
                  <p className="text-muted-foreground text-sm">
                    Monitor and control clinic stock with automated reorder alerts, usage tracking, and prevention of wastage.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Payment & Billing System</h3>
                  <p className="text-muted-foreground text-sm">
                    Seamless, secure, and flexible payment system ensuring accurate transaction tracking for effortless financial management.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Insurance Management</h3>
                  <p className="text-muted-foreground text-sm">
                    Handle insurance claims, approvals, and settlements within the platform. Supports multiple insurers with simplified documentation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Incentive & Commission</h3>
                  <p className="text-muted-foreground text-sm">
                    Motivate your team with performance-based incentives. Automatically calculate commissions for doctors, lab technicians, or staff.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Analytics Dashboards</h3>
                  <p className="text-muted-foreground text-sm">
                    Monitor clinic performance with real-time insights, detailed reports, and key metrics to optimize operations and patient care.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Revenue Dashboards</h3>
                  <p className="text-muted-foreground text-sm">
                    Track financial health with intuitive revenue dashboards. Visualize income streams from consultations, labs, pharmacy, and procedures.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <CalendarIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Custom Date-Wise Reports</h3>
                  <p className="text-muted-foreground text-sm">
                    Generate detailed reports filtered by custom date ranges. Analyze performance, revenue, expenses, and patient inflow with precision.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Laptop className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Unlimited Device Connections</h3>
                  <p className="text-muted-foreground text-sm">
                    Connect infinite devices from any location. Accessible from tablets, desktops, and laptops for seamless access.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Unlimited Patient Records</h3>
                  <p className="text-muted-foreground text-sm">
                    Securely store unlimited patient records with easy access and seamless management. Cloud-based storage ensures data safety.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose FelixaTouch?</h2>
                <p className="text-lg text-muted-foreground">
                  Transform your clinic with cloud-based efficiency
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white border">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        ✓
                      </span>
                      Cloud-Based Security
                    </h3>
                    <p className="text-muted-foreground ml-11">
                      Secure data storage in the cloud with automatic backups, ensuring your patient records are always safe and accessible from anywhere.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        ✓
                      </span>
                      User-Friendly Interface
                    </h3>
                    <p className="text-muted-foreground ml-11">
                      Intuitive design makes it easy for your staff to adopt and use effectively, reducing training time and increasing productivity.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        ✓
                      </span>
                      Streamlined Operations
                    </h3>
                    <p className="text-muted-foreground ml-11">
                      From appointment scheduling to billing, every aspect of clinic management is optimized for maximum efficiency and minimum effort.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        ✓
                      </span>
                      Maximize Profitability
                    </h3>
                    <p className="text-muted-foreground ml-11">
                      Real-time revenue analytics, automated billing, and inventory management help you identify growth opportunities and reduce costs.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        ✓
                      </span>
                      Enhanced Patient Experience
                    </h3>
                    <p className="text-muted-foreground ml-11">
                      Token displays, automated reminders, and shorter wait times improve patient satisfaction and increase retention rates.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        ✓
                      </span>
                      Scalable Solution
                    </h3>
                    <p className="text-muted-foreground ml-11">
                      Whether you're a single clinic or a multi-location healthcare network, FelixaTouch grows with your business needs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Clinic?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Experience the complete feature suite with a free demo today and see how FelixaTouch can streamline your clinic operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">
                    Book Free Demo
                  </Button>
                </Link>
                <Link href="/products/felixacare">
                  <Button size="lg" variant="outline">
                    Explore FelixaCare
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}