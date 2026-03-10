import { SEO } from "@/components/SEO";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lightbulb, Target, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <>
      <SEO 
        title="About IntPurple Technologies - Software Development Company"
        description="IntPurple Technologies is a software company built by people who love solving complex problems. We specialize in healthcare technology, enterprise software, and mobile applications."
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-purple-light to-background">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h1>
              <p className="text-xl text-muted-foreground">
                A software company built by people who love solving complex problems
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl space-y-12">
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  IntPurple Technologies is a software company built by people who love solving complex problems. We specialize in healthcare technology, enterprise software, and mobile applications — combining technical depth with practical business understanding.
                </p>
                <p className="text-lg leading-relaxed">
                  We don't just write code. We understand your industry, learn your workflows, and craft solutions that fit. Whether you're a clinic looking to digitize patient records, a care home needing a staff rostering system, or a startup with a bold product idea, we bring the expertise to make it real.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground">
                To build reliable, scalable, and intelligent software that empowers businesses to grow and serve their users better.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-light flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                      <p className="text-muted-foreground">
                        We do what we say, and we say what we mean
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-light flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                      <p className="text-muted-foreground">
                        We stay ahead of the curve so you don't have to
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-light flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Accountability</h3>
                      <p className="text-muted-foreground">
                        Every project is a commitment, not just a contract
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-light flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Impact</h3>
                      <p className="text-muted-foreground">
                        We measure success by the value we create for your business
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}