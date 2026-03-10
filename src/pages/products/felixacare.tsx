import { SEO } from "@/components/SEO";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  Users, Calendar, Pill, ClipboardList, FileText, Shield,
  CheckCircle2, Heart, TrendingUp, Bell, ArrowRight 
} from "lucide-react";

export default function FelixaCare() {
  return (
    <>
      <SEO 
        title="FelixaCare - Care Home Management Software | IntPurple"
        description="Comprehensive care home management system for residential facilities. Staff rostering, resident care plans, medication tracking, and compliance reporting."
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 md:py-32 pattern-grid text-white">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="secondary" className="text-sm">Healthcare Software</Badge>
                <Badge variant="secondary" className="text-sm">Care Home Management</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">FelixaCare</h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Comprehensive management system for care homes and residential facilities
              </p>
              <p className="text-lg mb-10 text-white/80 max-w-3xl">
                FelixaCare is built specifically for residential care facilities and care homes, providing tools for resident care management, staff scheduling, medication tracking, digital care planning, and compliance reporting. Everything you need to deliver exceptional care while maintaining operational efficiency.
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
                Purpose-built tools for residential care management
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-light flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Resident Profiles</h3>
                  <p className="text-muted-foreground">
                    Complete resident records with medical history, emergency contacts, preferences, and care requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-light flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Digital Care Plans</h3>
                  <p className="text-muted-foreground">
                    Create, update, and track individualized care plans with regular reviews and goal tracking.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-light flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Staff Rostering</h3>
                  <p className="text-muted-foreground">
                    Smart scheduling with skill matching, shift management, and automated notifications for staff.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-light flex items-center justify-center mb-4">
                    <Pill className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Medication Tracking</h3>
                  <p className="text-muted-foreground">
                    Digital medication administration records (MAR) with alerts, prescription tracking, and audit trails.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-light flex items-center justify-center mb-4">
                    <ClipboardList className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Compliance Reporting</h3>
                  <p className="text-muted-foreground">
                    Automated compliance reports, audit documentation, and regulatory submission tools.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-light flex items-center justify-center mb-4">
                    <Bell className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Family Portal</h3>
                  <p className="text-muted-foreground">
                    Secure access for family members to view care updates, photos, and communicate with staff.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose FelixaCare?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Improve Care Quality</h3>
                      <p className="text-muted-foreground">Digital care plans and real-time tracking ensure consistent, high-quality care delivery.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Streamline Operations</h3>
                      <p className="text-muted-foreground">Reduce administrative burden with automated rostering, documentation, and reporting.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Stay Compliant</h3>
                      <p className="text-muted-foreground">Built-in compliance tools keep you audit-ready and aligned with regulatory standards.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Engage Families</h3>
                      <p className="text-muted-foreground">Keep families connected and informed with secure portal access and regular updates.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <Heart className="h-8 w-8 text-primary mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Person-Centered Care</h3>
                    <p className="text-muted-foreground">
                      Focus on individual needs with personalized care plans and detailed resident profiles.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <TrendingUp className="h-8 w-8 text-primary mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Operational Efficiency</h3>
                    <p className="text-muted-foreground">
                      Optimize staff allocation, reduce paperwork, and improve facility-wide coordination.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <Shield className="h-8 w-8 text-primary mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Secure & Auditable</h3>
                    <p className="text-muted-foreground">
                      Complete audit trails, role-based access, and encrypted data storage for peace of mind.
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
                Transform Your Care Home Operations
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                See how FelixaCare can help you deliver better care and improve operational efficiency.
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