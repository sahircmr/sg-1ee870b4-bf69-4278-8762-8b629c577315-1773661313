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
  Lock, Bell, Stethoscope, Database, Zap, Mic, Timeline,
  Target, TrendingDown, Package
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
        <section className="py-16 md:py-32 pattern-dots bg-primary text-white">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Care Management & Reporting</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                AI-driven automation that transforms care delivery and clinical decision-making
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI Incident Documentation</h3>
                  <p className="text-muted-foreground mb-4">
                    Natural language processing auto-generates structured incident reports from free-text entries, ensuring CQC Regulation 18 compliance with minimal manual effort.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Voice-to-text incident capture</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Auto-classifies type & severity</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>CQC Regulation 18 notifications</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Pill className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI Drug Interaction Analysis</h3>
                  <p className="text-muted-foreground mb-4">
                    Real-time AI screening cross-references resident medications against known interaction databases, flagging contraindications and generating pharmacist-ready reports.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Real-time drug interaction screening</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Contraindication flagging</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Pharmacist-ready reports</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Smart Rostering & Agency Connect</h3>
                  <p className="text-muted-foreground mb-4">
                    AI-driven scheduling matches staff skills to resident dependency levels, automatically identifies coverage gaps and connects to agency pools for instant fill.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dependency-based scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Automatic coverage gap detection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Agency pool integration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI Falls Pattern Analysis</h3>
                  <p className="text-muted-foreground mb-4">
                    Machine learning analyses historical fall data to identify risk patterns by time, location and resident profile — enabling proactive prevention strategies.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Pattern identification by time & location</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Risk prediction algorithms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Prevention strategy recommendations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Clinical Dependency Tracking</h3>
                  <p className="text-muted-foreground mb-4">
                    Continuous AI assessment of resident acuity scores calculates real-time staffing ratios, supporting CQC evidence requirements and safe-staffing benchmarks.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Clinical dependency assessments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Live staffing requirements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>CQC evidence-ready reports</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI Care Note Summaries</h3>
                  <p className="text-muted-foreground mb-4">
                    Generates 24-hour, 7-day and 30-day clinical summaries from care notes, highlighting trends, risks and suggested follow-ups for clinical review.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>24h, 7-day, 30-day summaries</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Risk highlighting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Clinical review recommendations</span>
                    </li>
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

            <div className="max-w-6xl mx-auto mb-12">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                  <CardContent className="pt-6">
                    <Stethoscope className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-2xl font-semibold mb-3">Medication Plans & MAR Charts</h3>
                    <p className="text-muted-foreground mb-4">
                      Individual medication plans with a digital 30-day MAR chart featuring medicine-specific tabs, high-risk filtering and pattern detection for missed doses.
                    </p>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Digital Draw, Digital Typed, Verbal Order & Wet Ink signing methods</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Full prescription details with quantity, units and total supply</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>High-risk medication filtering and missed dose detection</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                  <CardContent className="pt-6">
                    <Utensils className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-2xl font-semibold mb-3">Personalised Meal Planning</h3>
                    <p className="text-muted-foreground mb-4">
                      Resident-level meal plans tailored to dietary requirements, allergies, texture modifications and cultural preferences.
                    </p>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Menu planners cross-reference allergen databases</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Recipe management with nutritional tracking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Kitchen alerts for allergen conflicts before meal preparation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                  <CardContent className="pt-6">
                    <Home className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-2xl font-semibold mb-3">Room Services & Accommodation</h3>
                    <p className="text-muted-foreground mb-4">
                      Smart room allocation using visual floor plans, matching residents to appropriate rooms based on mobility, dependency level and clinical needs.
                    </p>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Visual floor plans with smart allocation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Room features & equipment tracking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Environmental adaptations documentation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                  <CardContent className="pt-6">
                    <Package className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-2xl font-semibold mb-3">Prescriptions Directory</h3>
                    <p className="text-muted-foreground mb-4">
                      Centralised cross-resident prescriptions oversight with filters for prescriber, medication type and date.
                    </p>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Summary cards highlight high-risk and expiring medications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Structured review workflow for dosage changes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Validation summaries with complete audit trail</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Care Effectiveness Analysis */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Care Effectiveness Analysis</h3>
                <p className="text-lg text-muted-foreground">
                  Monitoring care delivery isn't enough — FelixaCare measures outcomes so you can continuously improve
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                  <CardContent className="pt-6">
                    <BarChart3 className="h-8 w-8 text-primary mb-3" />
                    <h4 className="text-lg font-semibold mb-2">Meal Distribution Tracking</h4>
                    <p className="text-sm text-muted-foreground">
                      Monitor meal service completion rates with intake recording. Track dietary compliance and identify residents with declining appetite.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                  <CardContent className="pt-6">
                    <Activity className="h-8 w-8 text-primary mb-3" />
                    <h4 className="text-lg font-semibold mb-2">Medicine Administration Monitoring</h4>
                    <p className="text-sm text-muted-foreground">
                      Track outcomes—Given, Refused, Withheld—with signature logs. AI detects patterns flagging residents needing review.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                  <CardContent className="pt-6">
                    <TrendingUp className="h-8 w-8 text-primary mb-3" />
                    <h4 className="text-lg font-semibold mb-2">Clinical Outcome Dashboards</h4>
                    <p className="text-sm text-muted-foreground">
                      Interactive charts showing medication compliance, meal intake trends, and clinical observation patterns with role-specific views.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                  <CardContent className="pt-6">
                    <Bell className="h-8 w-8 text-primary mb-3" />
                    <h4 className="text-lg font-semibold mb-2">Proactive Intervention Alerts</h4>
                    <p className="text-sm text-muted-foreground">
                      AI-driven alerts when effectiveness metrics fall below thresholds, enabling proactive care plan adjustments.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Falls & Incident Management */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Falls & Incident Management</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Complete lifecycle approach from AI-powered voice reporting through prevention strategy tracking—all CQC compliant
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Mic className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI-Driven Reporting</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Carers simply speak to FelixaCare to document incidents—no typing required.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Voice-to-text incident capture</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Auto-classifies type & severity</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>CQC Regulation 18 notifications</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Timeline className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Full Documentation</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Comprehensive detail with chronological timeline mapping entire lifecycle.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Detailed incident records</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Chronological event timeline</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Investigation notes with evidence</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Action Planning</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Actionable follow-ups with assigned owners and deadlines tracked across dashboards.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Assigned owners with deadlines</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Status tracking dashboards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Automated overdue reminders</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Falls Analysis & Prevention */}
            <div className="max-w-5xl mx-auto space-y-6">
              <Card className="border-2 border-primary/20 bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">Falls Analysis Dashboard</h3>
                      <p className="text-muted-foreground mb-4">
                        A dedicated analytics dashboard visualises fall patterns across your care home—by time of day, location, contributing factors and resident risk profile.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="flex items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>Sortable resident fall table with frequency</span>
                        </div>
                        <div className="flex items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>Falls by time-of-day and location heatmaps</span>
                        </div>
                        <div className="flex items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>Contributing factor analysis</span>
                        </div>
                        <div className="flex items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>Trend graphs with intervention markers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <TrendingDown className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">Prevention Planning & Effectiveness Tracking</h3>
                      <p className="text-muted-foreground mb-4">
                        Go beyond reactive reporting with proactive falls prevention—document interventions, track effectiveness with before/after fall counts, and receive AI-powered strategy recommendations.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="flex items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>5 strategy categories: environmental, clinical, training, equipment, medication</span>
                        </div>
                        <div className="flex items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>Falls Before vs Falls After tracking</span>
                        </div>
                        <div className="flex items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>AI strategy recommendations during reporting</span>
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
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Digitisation is no longer optional — CQC expects care homes to demonstrate robust, evidence-based governance. FelixaCare embeds compliance into every workflow.
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">How Digitisation Drives CQC Compliance</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                  <CardContent className="pt-6">
                    <Database className="h-8 w-8 text-primary mb-3" />
                    <h4 className="text-lg font-semibold mb-2">Real-Time Evidence Trail</h4>
                    <p className="text-sm text-muted-foreground">
                      Every care note, incident report and medication round is timestamped and immutable—giving inspectors instant verifiable audit trail.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                  <CardContent className="pt-6">
                    <Bell className="h-8 w-8 text-primary mb-3" />
                    <h4 className="text-lg font-semibold mb-2">Regulation 18 Notifications</h4>
                    <p className="text-sm text-muted-foreground">
                      AI-powered incident reporting automatically flags notifiable events and generates CQC-ready submissions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                  <CardContent className="pt-6">
                    <Users className="h-8 w-8 text-primary mb-3" />
                    <h4 className="text-lg font-semibold mb-2">Safe Staffing Evidence</h4>
                    <p className="text-sm text-muted-foreground">
                      Live dependency tracking calculates required staffing ratios—providing CQC-grade evidence that staffing levels match resident acuity.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                  <CardContent className="pt-6">
                    <ClipboardList className="h-8 w-8 text-primary mb-3" />
                    <h4 className="text-lg font-semibold mb-2">Consistent Care Planning</h4>
                    <p className="text-sm text-muted-foreground">
                      Standardised digital care plans ensure every resident has up-to-date, person-centred documentation aligned with CQC framework.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                  <CardContent className="pt-6">
                    <Shield className="h-8 w-8 text-primary mb-3" />
                    <h4 className="text-lg font-semibold mb-2">Medication Safety</h4>
                    <p className="text-sm text-muted-foreground">
                      Electronic MAR charts with AI drug interaction screening demonstrate robust medication governance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                  <CardContent className="pt-6">
                    <Lock className="h-8 w-8 text-primary mb-3" />
                    <h4 className="text-lg font-semibold mb-2">Access Control & GDPR</h4>
                    <p className="text-sm text-muted-foreground">
                      Role-based permissions and full GDPR compliance demonstrate robust information governance.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">FelixaCare Audit Readiness Toolkit</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                  <CardContent className="pt-6">
                    <FileText className="h-8 w-8 text-primary mb-3" />
                    <h4 className="text-lg font-semibold mb-2">One-Click Audit Packs</h4>
                    <p className="text-sm text-muted-foreground">
                      Generate comprehensive evidence packs covering all 5 CQC key questions—ready in minutes, not days.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                  <CardContent className="pt-6">
                    <BarChart3 className="h-8 w-8 text-primary mb-3" />
                    <h4 className="text-lg font-semibold mb-2">Compliance Dashboards</h4>
                    <p className="text-sm text-muted-foreground">
                      Live compliance scores across all domains with traffic-light indicators highlighting areas needing attention.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                  <CardContent className="pt-6">
                    <AlertTriangle className="h-8 w-8 text-primary mb-3" />
                    <h4 className="text-lg font-semibold mb-2">Proactive Risk Alerts</h4>
                    <p className="text-sm text-muted-foreground">
                      AI continuously monitors for compliance gaps and alerts managers before they become issues.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors bg-white">
                  <CardContent className="pt-6">
                    <Award className="h-8 w-8 text-primary mb-3" />
                    <h4 className="text-lg font-semibold mb-2">Training Compliance</h4>
                    <p className="text-sm text-muted-foreground">
                      Automated certification expiry alerts ensure mandatory training is never missed.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Allergy Management */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Allergy Management</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                End-to-end allergy protection from documentation to real-time alerts across meals, medication and kitchen operations—ensuring resident safety at every touchpoint
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 mb-8">
                <Card className="border-l-4 border-l-primary bg-white">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Food & Medicine Allergy Documentation</h3>
                        <p className="text-sm text-muted-foreground">
                          Record and manage food allergies, intolerances and drug allergies with reaction types during admission. Linked to each resident's profile with severity levels.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary bg-white">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Daily Menu Preparation Alerts</h3>
                        <p className="text-sm text-muted-foreground">
                          When staff plan daily meals, the system flags any menu item containing allergens relevant to current residents—preventing unsafe meals before they reach the kitchen.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary bg-white">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Kitchen Allergy Alerts</h3>
                        <p className="text-sm text-muted-foreground">
                          Kitchen staff see real-time allergen dashboards per meal service. Each resident's tray is flagged with allergy badges, and preparation lists highlight substitutions required.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary bg-white">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">4</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Medication Round Alerts</h3>
                        <p className="text-sm text-muted-foreground">
                          During every medication round, nurses receive allergy warnings before administration. AI cross-checks prescribed drugs against documented allergies and flags contraindications instantly.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="border-2 border-primary/20 bg-white">
                  <CardContent className="pt-6">
                    <Shield className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-semibold mb-1">Zero-Tolerance Protection</h4>
                    <p className="text-sm text-muted-foreground">Every meal & medication checked against resident allergies</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/20 bg-white">
                  <CardContent className="pt-6">
                    <Bell className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-semibold mb-1">Real-Time Conflict Warnings</h4>
                    <p className="text-sm text-muted-foreground">Instant alerts when allergens are detected in selections</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/20 bg-white">
                  <CardContent className="pt-6">
                    <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-semibold mb-1">Safe Alternatives Suggested</h4>
                    <p className="text-sm text-muted-foreground">System recommends allergen-free meal and medication options</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/20 bg-white">
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
              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Resident Management
                  </h4>
                  <p className="text-sm text-muted-foreground">Complete care plans & profiles</p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <ClipboardList className="h-5 w-5 text-primary" />
                    Care Packages
                  </h4>
                  <p className="text-sm text-muted-foreground">Real-time billing & compliance</p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-primary" />
                    Meals & Nutrition
                  </h4>
                  <p className="text-sm text-muted-foreground">Menu planning & dietary tracking</p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Time Tracking
                  </h4>
                  <p className="text-sm text-muted-foreground">Automated wage processing</p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Training Management
                  </h4>
                  <p className="text-sm text-muted-foreground">Certification tracking</p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <UserCheck className="h-5 w-5 text-primary" />
                    Visitor Management
                  </h4>
                  <p className="text-sm text-muted-foreground">Registration & approval workflow</p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Volunteer Management
                  </h4>
                  <p className="text-sm text-muted-foreground">DBS tracking & scheduling</p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Home className="h-5 w-5 text-primary" />
                    Room Management
                  </h4>
                  <p className="text-sm text-muted-foreground">Floor plans & allocation</p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Handover Logs
                  </h4>
                  <p className="text-sm text-muted-foreground">Shift handovers & disputes</p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-primary" />
                    Access Control
                  </h4>
                  <p className="text-sm text-muted-foreground">Role-based permissions</p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Audit Management
                  </h4>
                  <p className="text-sm text-muted-foreground">Interactive checklists</p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Analytics Dashboard
                  </h4>
                  <p className="text-sm text-muted-foreground">Interactive charts & insights</p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Organization Chart
                  </h4>
                  <p className="text-sm text-muted-foreground">Staff hierarchy visualization</p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    Wage Management
                  </h4>
                  <p className="text-sm text-muted-foreground">Salaries & payment reports</p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-primary" />
                    Kitchen Management
                  </h4>
                  <p className="text-sm text-muted-foreground">Recipes & allergen tracking</p>
                </CardContent>
              </Card>
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