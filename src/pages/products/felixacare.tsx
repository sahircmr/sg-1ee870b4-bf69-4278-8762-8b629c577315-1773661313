import { SEO } from "@/components/SEO";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  Users, Calendar, Pill, ClipboardList, FileText, Shield,
  CheckCircle2, Brain, TrendingUp, AlertTriangle, ArrowRight,
  Activity, Utensils, Clock, Award, UserCheck, Home, BarChart3,
  Lock, Bell, Stethoscope, Database, Zap
} from "lucide-react";

export default function FelixaCare() {
  return (
    <>
      <SEO 
        title="FelixaCare - AI-Powered Care Home Management Platform | IntPurple"
        description="Comprehensive AI-powered care home management system with intelligent incident reporting, medication management, falls analysis, CQC compliance tools, and complete operational oversight."
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 md:py-32 pattern-grid bg-primary text-white">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="secondary" className="text-sm">AI-Powered Healthcare</Badge>
                <Badge variant="secondary" className="text-sm">CQC Compliant</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">FelixaCare</h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                AI-Powered Care Home Management Platform
              </p>
              <p className="text-lg mb-10 text-white/80 max-w-3xl">
                Transform care delivery with intelligent automation, comprehensive compliance tools, and real-time insights. FelixaCare combines AI-powered incident reporting, smart medication management, clinical dependency tracking, and advanced analytics—all designed to meet CQC standards and improve care outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" variant="secondary">
                    Request a Demo
                  </Button>
                </Link>
                <a href="/FelixaCareBrochure.pdf" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30">
                    Download Brochure
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Powered Features */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Powered by AI</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Intelligent Care Management</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                AI-driven automation that transforms care delivery and clinical decision-making
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="border-0 shadow-sm pattern-subtle-dots">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Incident Reporting</h3>
                  <p className="text-muted-foreground mb-3">
                    Voice-to-text incident capture with automatic classification and CQC Regulation 18 compliance documentation.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Hands-free incident logging</li>
                    <li>• Auto-generates structured reports</li>
                    <li>• CQC notification ready</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm pattern-subtle-dots">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Pill className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Medication Management</h3>
                  <p className="text-muted-foreground mb-3">
                    Real-time drug interaction screening with AI-powered reports and smart medication reviews.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Drug interaction analysis</li>
                    <li>• Digital MAR charts</li>
                    <li>• Pattern detection for missed doses</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm pattern-subtle-dots">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Smart Rostering</h3>
                  <p className="text-muted-foreground mb-3">
                    AI-driven scheduling that matches staff skills to resident dependency levels with agency connection.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Dependency-based scheduling</li>
                    <li>• Automatic coverage gap detection</li>
                    <li>• Agency pool integration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm pattern-subtle-dots">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Falls Analysis</h3>
                  <p className="text-muted-foreground mb-3">
                    Machine learning identifies fall patterns, predicts risk, and provides prevention insights.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Pattern identification by time & location</li>
                    <li>• Risk prediction algorithms</li>
                    <li>• Prevention strategy recommendations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm pattern-subtle-dots">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Dependency Tracking</h3>
                  <p className="text-muted-foreground mb-3">
                    Continuous AI assessment of resident acuity with real-time staffing ratio calculations for CQC compliance.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Clinical dependency assessments</li>
                    <li>• Live staffing requirements</li>
                    <li>• CQC evidence-ready reports</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm pattern-subtle-dots">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Care Note Summaries</h3>
                  <p className="text-muted-foreground mb-3">
                    Automated clinical summaries from care notes with trend analysis and suggested follow-ups.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 24-hour, 7-day, 30-day summaries</li>
                    <li>• Risk highlighting</li>
                    <li>• Clinical review recommendations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Intelligent Care Planning */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Intelligent Care Planning & Effectiveness Analysis</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Unified care framework connecting medication, nutrition, and accommodation—then measuring effectiveness across every touchpoint
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <Stethoscope className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-3">Medication Plans & MAR Charts</h3>
                  <p className="text-muted-foreground mb-4">
                    Digital 30-day MAR charts with medicine-specific tabs, high-risk filtering, and missed dose pattern detection.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Digital Draw, Typed, Verbal Order & Wet Ink signing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Full prescription details with quantity & units</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Centralized prescriptions directory with filters</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <Utensils className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-3">Personalized Meal Planning</h3>
                  <p className="text-muted-foreground mb-4">
                    Resident-level meal plans tailored to dietary requirements, allergies, texture modifications, and cultural preferences.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Allergen database cross-referencing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Recipe management with nutritional tracking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Kitchen alerts for allergen conflicts</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <Home className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-3">Room Services & Accommodation</h3>
                  <p className="text-muted-foreground mb-4">
                    Smart room allocation using visual floor plans, matching residents to rooms based on mobility, dependency, and clinical needs.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Visual floor plans with allocation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Room features & equipment tracking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Environmental adaptations documentation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <BarChart3 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-3">Care Effectiveness Analysis</h3>
                  <p className="text-muted-foreground mb-4">
                    Real-time dashboards tracking how effectively medication, meals, and services reach residents—enabling continuous improvement.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Meal distribution tracking with intake recording</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Medicine administration monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Proactive intervention alerts</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Falls & Incident Management */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Falls & Incident Management</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete lifecycle approach from AI-powered voice reporting through prevention strategy tracking—all CQC compliant
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="border-0 shadow-sm pattern-grid">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">AI-Driven Reporting</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Voice-to-text incident capture</li>
                    <li>• Auto-classifies type & severity</li>
                    <li>• CQC Regulation 18 notifications</li>
                    <li>• Captures time, location, witnesses</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm pattern-grid">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <ClipboardList className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Full Documentation</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Comprehensive incident records</li>
                    <li>• Chronological timeline tracking</li>
                    <li>• Investigation notes with evidence</li>
                    <li>• CQC notification tracking</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm pattern-grid">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Action Planning</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Assigned owners with deadlines</li>
                    <li>• Status tracking across dashboards</li>
                    <li>• Automated overdue reminders</li>
                    <li>• Escalation to managers</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Prevention Planning & Effectiveness Tracking</h3>
                      <p className="text-muted-foreground mb-4">
                        Go beyond reactive reporting with proactive falls prevention strategies. Document interventions across 5 categories, track before/after fall counts, and receive AI-powered strategy recommendations.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="flex items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>Environmental, clinical & equipment strategies</span>
                        </div>
                        <div className="flex items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>Falls Before vs Falls After tracking</span>
                        </div>
                        <div className="flex items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>AI strategy recommendations</span>
                        </div>
                        <div className="flex items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>Effectiveness rating & cost tracking</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CQC Compliance */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Inspection Ready</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">CQC Compliance & Audit Readiness</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built-in compliance tools ensure you're always inspection-ready with evidence-based governance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <Database className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Real-Time Evidence Trail</h3>
                  <p className="text-sm text-muted-foreground">
                    Every care note, incident report, and medication round is timestamped and immutable—instant verifiable audit trail.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <Bell className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Regulation 18 Notifications</h3>
                  <p className="text-sm text-muted-foreground">
                    AI-powered incident reporting automatically flags notifiable events and generates CQC-ready submissions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <Users className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Safe Staffing Evidence</h3>
                  <p className="text-sm text-muted-foreground">
                    Live dependency tracking calculates required staffing ratios—providing CQC-grade evidence of safe staffing levels.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <FileText className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">One-Click Audit Packs</h3>
                  <p className="text-sm text-muted-foreground">
                    Generate comprehensive evidence packs covering all 5 CQC key questions—ready in minutes, not days.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <Award className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Training Compliance</h3>
                  <p className="text-sm text-muted-foreground">
                    Automated certification expiry alerts and renewal scheduling ensure mandatory training is never missed.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <Lock className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Access Control & GDPR</h3>
                  <p className="text-sm text-muted-foreground">
                    Role-based permissions and full GDPR compliance demonstrate robust information governance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comprehensive Allergy Management */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Allergy Management</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                End-to-end allergy protection from documentation to real-time alerts across meals, medication, and kitchen operations
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <Card className="border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Food & Medicine Allergy Documentation</h3>
                        <p className="text-sm text-muted-foreground">
                          Record food allergies, intolerances, and drug allergies with reaction types during admission. Cross-referenced at every touchpoint.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Daily Menu Preparation Alerts</h3>
                        <p className="text-sm text-muted-foreground">
                          System flags menu items containing allergens relevant to current residents—preventing unsafe meals before they reach the kitchen.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Kitchen Allergy Alerts</h3>
                        <p className="text-sm text-muted-foreground">
                          Real-time allergen dashboards per meal service. Each resident's tray is flagged with allergy badges and preparation lists show substitutions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">4</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Medication Round Alerts</h3>
                        <p className="text-sm text-muted-foreground">
                          Nurses receive allergy warnings before administration. AI cross-checks prescribed drugs against documented allergies instantly.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <Card className="border-2 border-primary/20">
                  <CardContent className="pt-6">
                    <Shield className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-semibold mb-1">Zero-Tolerance Protection</h4>
                    <p className="text-sm text-muted-foreground">Every meal & medication checked against resident allergies</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/20">
                  <CardContent className="pt-6">
                    <Database className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-semibold mb-1">Full CQC Audit Trail</h4>
                    <p className="text-sm text-muted-foreground">Every allergy check logged with timestamps and signatures</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Feature Set */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Feature Set</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to run a modern, compliant care home
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              <div className="bg-background rounded-lg p-4 text-sm">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  Resident Management
                </h4>
                <p className="text-muted-foreground">Complete care plans & profiles</p>
              </div>

              <div className="bg-background rounded-lg p-4 text-sm">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <ClipboardList className="h-4 w-4 text-primary" />
                  Care Packages
                </h4>
                <p className="text-muted-foreground">Real-time billing & compliance</p>
              </div>

              <div className="bg-background rounded-lg p-4 text-sm">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Utensils className="h-4 w-4 text-primary" />
                  Kitchen Management
                </h4>
                <p className="text-muted-foreground">Recipes & allergen tracking</p>
              </div>

              <div className="bg-background rounded-lg p-4 text-sm">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  Time Tracking
                </h4>
                <p className="text-muted-foreground">Automated wage processing</p>
              </div>

              <div className="bg-background rounded-lg p-4 text-sm">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  Training Management
                </h4>
                <p className="text-muted-foreground">Certification tracking</p>
              </div>

              <div className="bg-background rounded-lg p-4 text-sm">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <UserCheck className="h-4 w-4 text-primary" />
                  Visitor Management
                </h4>
                <p className="text-muted-foreground">Registration & approval workflow</p>
              </div>

              <div className="bg-background rounded-lg p-4 text-sm">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  Volunteer Management
                </h4>
                <p className="text-muted-foreground">DBS tracking & scheduling</p>
              </div>

              <div className="bg-background rounded-lg p-4 text-sm">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  Handover Logs
                </h4>
                <p className="text-muted-foreground">Shift handovers & disputes</p>
              </div>

              <div className="bg-background rounded-lg p-4 text-sm">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Lock className="h-4 w-4 text-primary" />
                  Access Control
                </h4>
                <p className="text-muted-foreground">Role-based permissions</p>
              </div>

              <div className="bg-background rounded-lg p-4 text-sm">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Audit Management
                </h4>
                <p className="text-muted-foreground">Interactive checklists</p>
              </div>

              <div className="bg-background rounded-lg p-4 text-sm">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                  Analytics Dashboard
                </h4>
                <p className="text-muted-foreground">Interactive charts & insights</p>
              </div>

              <div className="bg-background rounded-lg p-4 text-sm">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  Organization Chart
                </h4>
                <p className="text-muted-foreground">Staff hierarchy visualization</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Your Care Home with AI-Powered Intelligence
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                See how FelixaCare combines AI automation, comprehensive compliance tools, and real-time insights to deliver better care outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">
                    Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="/FelixaCareBrochure.pdf" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline">
                    Download Full Brochure
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}