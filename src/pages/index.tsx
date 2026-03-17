import { SEO } from "@/components/SEO";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Smartphone, Brain, LineChart, Zap, Hospital, Globe } from "lucide-react";

export default function Home() {
  return (
    <>
      <SEO 
        title="IntPurple Technologies - Turning Ideas Into Intelligent Software"
        description="We build powerful digital products from healthcare platforms to enterprise web apps with cutting-edge technology and a human-first approach."
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pattern-dots py-24 md:py-32">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Turning Ideas Into Intelligent Software
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                We build powerful digital products — from healthcare platforms to enterprise web apps — with cutting-edge technology and a human-first approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Explore Our Products
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30">
                    Talk to Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Snippet */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-8">
                IntPurple Technologies is a software development company passionate about solving real-world problems through technology. From AI-powered healthcare systems to custom web and mobile applications, we design, build, and support software that makes a difference.
              </p>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24 pattern-subtle-dots">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive software development services tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <Hospital className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Healthcare Software</CardTitle>
                  <CardDescription>
                    Specialized platforms for clinics, care homes, and health networks
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <Code className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Web Development</CardTitle>
                  <CardDescription>
                    React, Next.js, and Django-powered web applications built for performance
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <Smartphone className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Mobile Apps</CardTitle>
                  <CardDescription>
                    Cross-platform Flutter apps for iOS and Android
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <Brain className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>AI Integration</CardTitle>
                  <CardDescription>
                    Smart automation, data insights, and AI features embedded into your products
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <LineChart className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>SEO & Digital Growth</CardTitle>
                  <CardDescription>
                    Technical SEO and content strategies that drive organic traffic
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <Zap className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Rapid Prototyping</CardTitle>
                  <CardDescription>
                    Fast product development using Lovable and Softgen platforms
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link href="/services">
                <Button size="lg">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why IntPurple */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why IntPurple?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-light flex items-center justify-center mx-auto mb-4">
                  <Hospital className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Deep Healthcare Expertise</h3>
                <p className="text-muted-foreground">
                  Specialized knowledge in healthcare technology and regulatory compliance
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-light flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">End-to-End Delivery</h3>
                <p className="text-muted-foreground">
                  From design to deployment to support, we handle every step
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-light flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Agile Excellence</h3>
                <p className="text-muted-foreground">
                  Fast-moving teams that deliver quality without compromise
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recognitions and Partnerships */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recognitions and Partnerships</h2>
              <p className="text-lg text-muted-foreground">
                Trusted by leading organizations and recognized globally
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Malta Enterprise */}
              <Card className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">
                    <Image 
                      src="/malta-enterprise.jpg" 
                      alt="Malta Enterprise" 
                      width={200} 
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    EU Business Expansion
                  </div>
                  <CardTitle className="text-xl">Malta Enterprise</CardTitle>
                  <CardDescription>
                    Engaged with Malta Enterprise for European market expansion and business growth
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* GINSEP */}
              <Card className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">
                    <Image 
                      src="/ginsep-logo.jpg" 
                      alt="GINSEP - German Indian Startup Exchange Program" 
                      width={200} 
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    German Engagement
                  </div>
                  <CardTitle className="text-xl">GINSEP Program</CardTitle>
                  <CardDescription>
                    Digital health startup from India selected for German market engagement
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Startup India */}
              <Card className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">
                    <Image 
                      src="/startup-india.jpg" 
                      alt="Startup India" 
                      width={200} 
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    Government Recognition
                  </div>
                  <CardTitle className="text-xl">Startup India</CardTitle>
                  <CardDescription>
                    DPIIT recognized startup by the Government of India
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Microsoft */}
              <Card className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">
                    <Image 
                      src="/microsoft-founders-hub.jpg" 
                      alt="Microsoft for Startups - Founders Hub" 
                      width={200} 
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    Cloud & Technology Partner
                  </div>
                  <CardTitle className="text-xl">Microsoft Partnership</CardTitle>
                  <CardDescription>
                    Partnering with Microsoft for Startups Founders Hub program
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* AWS */}
              <Card className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">
                    <Image 
                      src="/aws-logo.jpg" 
                      alt="Amazon Web Services (AWS)" 
                      width={200} 
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    Infrastructure Partner
                  </div>
                  <CardTitle className="text-xl">AWS Partnership</CardTitle>
                  <CardDescription>
                    Partnering with AWS for scalable, secure cloud infrastructure solutions
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Trusted by Leading Organizations */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Leading Organizations</h2>
              <p className="text-lg text-muted-foreground">
                Our clients span healthcare, enterprise, and education sectors across the globe
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* AryalCare */}
              <Card className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    Healthcare · Costa Rica
                  </div>
                  <CardTitle className="text-xl">AryalCare</CardTitle>
                  <CardDescription>
                    Healthcare solutions provider in Costa Rica
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* SVPR */}
              <Card className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    Healthcare · Malta
                  </div>
                  <CardTitle className="text-xl">SVPR</CardTitle>
                  <CardDescription>
                    Leading healthcare organization in Malta
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* CareNCure */}
              <Card className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    Healthcare · Qatar
                  </div>
                  <CardTitle className="text-xl">CareNCure</CardTitle>
                  <CardDescription>
                    Comprehensive healthcare services in Qatar
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Peace Village */}
              <Card className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    Healthcare · India
                  </div>
                  <CardTitle className="text-xl">Peace Village</CardTitle>
                  <CardDescription>
                    Care facility in Wayanad, India
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* ASA Clinic */}
              <Card className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    Healthcare · UAE
                  </div>
                  <CardTitle className="text-xl">ASA Clinic</CardTitle>
                  <CardDescription>
                    Advanced healthcare clinic in United Arab Emirates
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* hausarzt-praxis Hildesheim */}
              <Card className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    Healthcare · Germany
                  </div>
                  <CardTitle className="text-xl">hausarzt-praxis Hildesheim</CardTitle>
                  <CardDescription>
                    Family practice in Hildesheim, Germany
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Calicut Unani */}
              <Card className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    Healthcare · India
                  </div>
                  <CardTitle className="text-xl">Calicut Unani and Research Centre</CardTitle>
                  <CardDescription>
                    Traditional medicine and research in Kozhikode, India
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Pasta Evangelists */}
              <Card className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    Enterprise · UK
                  </div>
                  <CardTitle className="text-xl">Pasta Evangelists</CardTitle>
                  <CardDescription>
                    Premium fresh pasta delivery service in United Kingdom
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* MPF Pharma */}
              <Card className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    Pharmaceutical · Costa Rica
                  </div>
                  <CardTitle className="text-xl">MPF Pharma</CardTitle>
                  <CardDescription>
                    Pharmaceutical solutions provider in Costa Rica
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Mitas UK */}
              <Card className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    Enterprise · UK
                  </div>
                  <CardTitle className="text-xl">Mitas UK</CardTitle>
                  <CardDescription>
                    Enterprise solutions provider in United Kingdom
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* NIT Kozhikode */}
              <Card className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    Education · India
                  </div>
                  <CardTitle className="text-xl">National Institute of Technology</CardTitle>
                  <CardDescription>
                    Premier technical institution in Kozhikode, India
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 pattern-grid">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Let's turn your vision into reality. Get in touch with our team today.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
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