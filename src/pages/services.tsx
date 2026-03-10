import { SEO } from "@/components/SEO";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Hospital, Code, Smartphone, Brain, LineChart, Zap, ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <>
      <SEO 
        title="Software Development Services - IntPurple Technologies"
        description="Healthcare software, web development, mobile apps, AI integration, SEO services, and rapid prototyping. Comprehensive software development solutions."
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-purple-light to-background">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive software development solutions tailored to your business needs
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-24">
          <div className="container space-y-16">
            {/* Healthcare Software */}
            <div id="healthcare" className="scroll-mt-20">
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="md:flex">
                  <div className="md:w-2/3 p-8 md:p-12">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 rounded-lg bg-purple-light flex items-center justify-center">
                        <Hospital className="h-7 w-7 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold">Healthcare Software</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      IntPurple builds compliance-aware software for the healthcare sector — including clinic management systems, care home platforms, staff rostering, medication tracking, and patient records. Our products are designed with regulatory standards in mind.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Key Capabilities:</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Patient & resident management</li>
                          <li>• Appointment scheduling</li>
                          <li>• Care plan documentation</li>
                          <li>• Staff scheduling</li>
                          <li>• Reporting dashboards</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 bg-gradient-hero p-8 md:p-12 flex items-center justify-center">
                    <Link href="/products">
                      <Button size="lg" variant="secondary">
                        View Healthcare Products <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>

            {/* Web Development */}
            <div id="web" className="scroll-mt-20">
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="md:flex md:flex-row-reverse">
                  <div className="md:w-2/3 p-8 md:p-12">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 rounded-lg bg-purple-light flex items-center justify-center">
                        <Code className="h-7 w-7 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold">Web Application Development</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      We architect and build robust web applications using modern technology stacks. Whether it's a customer-facing portal or a complex back-office system, we deliver scalable solutions.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">ReactJS</Badge>
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">Python (Django)</Badge>
                      <Badge variant="secondary">REST APIs</Badge>
                      <Badge variant="secondary">PostgreSQL</Badge>
                    </div>
                  </div>
                  <div className="md:w-1/3 bg-gradient-to-br from-indigo to-primary p-8 md:p-12 flex items-center justify-center">
                    <Link href="/contact">
                      <Button size="lg" variant="secondary">
                        Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>

            {/* Mobile Apps */}
            <div id="mobile" className="scroll-mt-20">
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="md:flex">
                  <div className="md:w-2/3 p-8 md:p-12">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 rounded-lg bg-purple-light flex items-center justify-center">
                        <Smartphone className="h-7 w-7 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold">Mobile App Development</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      Our Flutter-based mobile apps work seamlessly across iOS and Android — giving your users a consistent, high-quality experience on any device.
                    </p>
                    <div>
                      <h3 className="font-semibold mb-2">Best For:</h3>
                      <p className="text-muted-foreground">
                        Healthcare apps, field staff apps, client portals, utility tools
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/3 bg-gradient-hero p-8 md:p-12 flex items-center justify-center">
                    <Link href="/contact">
                      <Button size="lg" variant="secondary">
                        Start Your App <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>

            {/* AI Integration */}
            <div id="ai" className="scroll-mt-20">
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="md:flex md:flex-row-reverse">
                  <div className="md:w-2/3 p-8 md:p-12">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 rounded-lg bg-purple-light flex items-center justify-center">
                        <Brain className="h-7 w-7 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold">AI Implementation</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      We integrate AI capabilities into your existing software or build AI-native products from the ground up — including intelligent data processing, predictive features, chatbots, and workflow automation.
                    </p>
                  </div>
                  <div className="md:w-1/3 bg-gradient-to-br from-indigo to-primary p-8 md:p-12 flex items-center justify-center">
                    <Link href="/contact">
                      <Button size="lg" variant="secondary">
                        Explore AI Solutions <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>

            {/* SEO Services */}
            <div id="seo" className="scroll-mt-20">
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="md:flex">
                  <div className="md:w-2/3 p-8 md:p-12">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 rounded-lg bg-purple-light flex items-center justify-center">
                        <LineChart className="h-7 w-7 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold">SEO Services</h2>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      From technical audits to on-page optimization and content strategy, we help your website rank higher and attract the right audience organically.
                    </p>
                  </div>
                  <div className="md:w-1/3 bg-gradient-hero p-8 md:p-12 flex items-center justify-center">
                    <Link href="/contact">
                      <Button size="lg" variant="secondary">
                        Boost Your Rankings <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>

            {/* Rapid Development */}
            <div id="rapid" className="scroll-mt-20">
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="md:flex md:flex-row-reverse">
                  <div className="md:w-2/3 p-8 md:p-12">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 rounded-lg bg-purple-light flex items-center justify-center">
                        <Zap className="h-7 w-7 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold">Rapid Development with Lovable & Softgen</h2>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Need a working product fast? We leverage AI-assisted development platforms like Lovable and Softgen to build and ship MVPs and prototypes in record time — without sacrificing quality.
                    </p>
                  </div>
                  <div className="md:w-1/3 bg-gradient-to-br from-indigo to-primary p-8 md:p-12 flex items-center justify-center">
                    <Link href="/contact">
                      <Button size="lg" variant="secondary">
                        Launch Your MVP <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}