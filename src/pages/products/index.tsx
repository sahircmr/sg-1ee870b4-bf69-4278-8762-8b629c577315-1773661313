import { SEO } from "@/components/SEO";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Hospital, Users, Calendar, ClipboardList, ArrowRight } from "lucide-react";

export default function Products() {
  return (
    <>
      <SEO 
        title="Healthcare Software Products - IntPurple Technologies"
        description="FelixaTouch and FelixaCare - comprehensive healthcare management solutions for clinics, care homes, and health facilities."
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 md:py-24 pattern-subtle-dots">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Healthcare Products</h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive software solutions designed specifically for healthcare providers
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl mb-16">
              <p className="text-lg leading-relaxed text-center">
                IntPurple has developed a suite of software products tailored for the healthcare industry. Our healthcare products address clinic and outpatient management, care home and residential facility management, staff rostering and compliance tracking, digital care planning and reporting, and health record management.
              </p>
            </div>

            {/* Product Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* FelixaTouch */}
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pattern-dots text-white pb-12">
                  <Hospital className="h-12 w-12 mb-4" />
                  <CardTitle className="text-2xl">FelixaTouch</CardTitle>
                  <CardDescription className="text-white/90">
                    Complete clinic management platform
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 pb-8">
                  <p className="text-muted-foreground mb-6">
                    An all-in-one solution for outpatient clinics, covering appointments, patient records, billing, and reporting.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Smart appointment scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Patient management & records</span>
                    </li>
                    <li className="flex items-start">
                      <ClipboardList className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Billing & insurance processing</span>
                    </li>
                  </ul>
                  <Link href="/products/felixatouch">
                    <Button className="w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* FelixaCare */}
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pattern-grid text-white pb-12">
                  <Hospital className="h-12 w-12 mb-4" />
                  <CardTitle className="text-2xl">FelixaCare</CardTitle>
                  <CardDescription className="text-white/90">
                    Comprehensive care home management system
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 pb-8">
                  <p className="text-muted-foreground mb-6">
                    Built for residential care facilities and care homes, with tools for resident care, staff management, and compliance.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Users className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Resident profiles & care plans</span>
                    </li>
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Staff rostering & compliance</span>
                    </li>
                    <li className="flex items-start">
                      <ClipboardList className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Medication tracking & reporting</span>
                    </li>
                  </ul>
                  <Link href="/products/felixacare">
                    <Button className="w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Healthcare Operations?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Request a demo and see how our products can streamline your workflows.
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