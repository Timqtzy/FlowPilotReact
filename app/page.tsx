"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Navigation, MobileNavigation } from "@/components/navigation";
import {
  Zap,
  Cog,
  Rocket,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Clock,
  Target,
  Mail,
  Star,
  Sparkles,
  BarChart3,
  Shield,
  Brain,
  Lightbulb,
  User
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [activePlan, setActivePlan] = useState<'flow' | 'pilot'>('flow');
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-hero-gradient rounded-lg">
              <Zap className="w-5 h-5 text-primary-foreground text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Flow Pilot
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Navigation />
            <MobileNavigation />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative px-6 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <ScrollAnimation animation="fade-in-up">
            <div className="animate-float mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium">Automation Services</span>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-up" delay={200}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
              Run Smoother.
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Automate Smarter.
              </span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-up" delay={400}>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Flow Pilot helps small teams and solo founders eliminate busywork
              with fully managed automations — powered by
              <span className="text-primary font-semibold">
                {" "}
                Zapier, Make, n8n, AI agents, and custom-built systems.
              </span>
              <span> No tools to manage. Just results.</span>
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-in" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="hero"
                size="lg"
                className="text-lg px-10 py-6 animate-pulse-glow text-white"
              >
                Book a Free Automation Call
                <ArrowRight className="w-5 h-5" />
              </Button>
              {/* <div className="flex items-center gap-2 text-muted-foreground">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm">Trusted by 50+ businesses</span>
              </div> */}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                What Flow Pilot Does
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
                We design, build, and manage custom automation systems that save
                time and eliminate bottlenecks — using
                <span className="text-primary font-semibold">
                  {" "}
                  Zapier, Make (Integromat), n8n, AI agents, and fully hosted backend
                  flows
                </span>
              </p>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Flow Pilot handles everything — planning, setup, hosting,
                monitoring, and support.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Automate Daily Tasks",
                desc: "Turn repetitive work into automated workflows",
                delay: 0,
              },
              {
                icon: Target,
                title: "Connect Your Tools",
                desc: "Link Notion, Airtable, Discord, CRMs, Google Sheets",
                delay: 100,
              },
              {
                icon: Cog,
                title: "End-to-End Systems",
                desc: "Build complete workflows in Zapier, Make, or n8n",
                delay: 200,
              },
              {
                icon: CheckCircle,
                title: "Reduce Errors",
                desc: "Eliminate manual errors and wasted hours",
                delay: 300,
              },
            ].map((service, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-in-up"
                delay={service.delay}
              >
                <Card className="bg-card-gradient border-0 shadow-card hover:shadow-elegant transition-smooth group hover:scale-105 h-full">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                      <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {service.desc}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
          <p className="text-center my-12">
            No Zapier account needed. No tool limits to manage. Just plug in and
            scale.
          </p>
        </div>
      </section>

      {/* Service Packages */}
      <section id="pricing" className="px-6 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Service Packages
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 dark:from-purple-400 dark:via-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              All plans include setup, hosting, AI workflow credits, and ongoing
              support. You don't need your own Zapier, Make, or AI tools — we
              handle it all on flow pilot.
            </p>

            {/* Toggle Buttons */}
            <div className="flex justify-center mt-12 mb-8">
              <div className="glass rounded-2xl p-2 border border-purple-200 dark:border-purple-800">
                <div className="flex">
                  <button
                    onClick={() => setActivePlan('flow')}
                    className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      activePlan === 'flow'
                        ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg'
                        : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400'
                    }`}
                  >
                    Flow Plan
                  </button>
                  <button
                    onClick={() => setActivePlan('pilot')}
                    className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      activePlan === 'pilot'
                        ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg'
                        : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400'
                    }`}
                  >
                    Pilot Plan
                  </button>
                </div>
              </div>
            </div>

            {/* Plan Description */}
            <div className="text-center mb-8">
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                {activePlan === 'flow' 
                  ? 'Subscription Fee - Workflow Creation Only' 
                  : 'Full Monthly Subscription - All Inclusive'
                }
              </p>
            </div>
          </div>

          {/* Conditional Plan Rendering */}
          {activePlan === 'flow' && (
            <div className="transition-all duration-500 ease-in-out">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
            {/* Starter Plan */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800 rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    MOST POPULAR
                  </div>
                </div>

                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Starter
                  </h3>
                  <div className="text-4xl lg:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    $199
                    <span className="text-lg text-slate-500 dark:text-slate-400">
                      /month
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    For founders and freelancers with lean, high-impact needs.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "Up to 4 custom workflows",
                    "Simple logic and triggers",
                    "Email support",
                    "Workflow documentation & handoff",
                    "For small teams",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <a
                    href="https://form.jotform.com/252033789346059"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                  >
                    Get Free Trial 7 Days
                  </a>
                </div>
              </div>
            </div>

            {/* Growth Plan */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Growth
                  </h3>
                  <div className="text-4xl lg:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                    $599
                    <span className="text-lg text-slate-500 dark:text-slate-400">
                      /month
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    For startups, ops teams, or digital agencies.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "Up to 10 advanced workflows",
                    "API calls and conditional routing",
                    "Discord + email support",
                    "2 free change requests included",
                    "Workflow documentation & handoff",
                    "Ideal for scaling",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <a
                    href="https://form.jotform.com/252033789346059"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                  >
                    Get Free Trial 7 Days
                  </a>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="relative group md:col-span-2 lg:col-span-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-white dark:bg-slate-900 border-2 border-purple-300 dark:border-purple-700 rounded-2xl p-8 h-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                    ENTERPRISE
                  </div>
                </div>

                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Pro
                  </h3>
                  <div className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text mb-2">
                    $1299
                    <span className="text-lg text-slate-500 dark:text-slate-400">
                      /month
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    For complex systems with high-volume automations or custom
                    AI logic.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "Up to 20 complex workflows",
                    "Advanced logic: dynamic paths, external data sources",
                    "API integrations, multi-step chains",
                    "Priority support (Discord + calls)",
                    "Unlimited revision cycle during project",
                    "Advanced setups",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/50 dark:to-purple-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <a
                    href="https://form.jotform.com/252033789346059"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center"
                  >
                    Get Free Trial 7 Days
                  </a>
                 
                </div>
              </div>
            </div>
              </div>
            </div>
          )}

          {activePlan === 'pilot' && (
            <div className="transition-all duration-500 ease-in-out">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {/* Starter Plan */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800 rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    MOST POPULAR
                  </div>
                </div>

                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Starter
                  </h3>
                  <div className="text-4xl lg:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    $499
                    <span className="text-lg text-slate-500 dark:text-slate-400">
                      /month
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    For founders and freelancers with lean, high-impact needs.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "3 fully managed workflows",
                    "We subscribe to and manage automation tools (Zapier/Make, etc.)",
                    "2,000 AI credits/month",
                    "Hosted backend + secure endpoints",
                    "Email Support",
                    "Monthly performance report"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <a
                    href="https://form.jotform.com/252033789346059"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                  >
                    Get Free Trial 7 Days
                  </a>
             
                </div>
              </div>
            </div>

            {/* Growth Plan */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Growth
                  </h3>
                  <div className="text-4xl lg:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                    $799
                    <span className="text-lg text-slate-500 dark:text-slate-400">
                      /month
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    For startups, ops teams, or digital agencies.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "8 workflows, scalable across departments",
                    "Monthly optimization & change requests",
                    "API integrations & AI logic configuration",
                    "5,000 AI credits/month",
                    "Discord + email support",
                    "Advanced reporting dashboard"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <a
                    href="https://form.jotform.com/252033789346059"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                  >
                    Get Free Trial 7 Days
                  </a>
               
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="relative group md:col-span-2 lg:col-span-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-white dark:bg-slate-900 border-2 border-purple-300 dark:border-purple-700 rounded-2xl p-8 h-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                    ENTERPRISE
                  </div>
                </div>

                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Pro
                  </h3>
                  <div className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text mb-2">
                    $1599
                    <span className="text-lg text-slate-500 dark:text-slate-400">
                      /month
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    For complex systems with high-volume automations or custom
                    AI logic.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "20+ enterprise-grade workflows",
                    "Complex logic, external data calls, dynamic routing",
                    "10,000 AI credits/month",
                    "Performance tuning, secure hosting, & priority uptime",
                    "Dedicated support team",
                    "Priority onboarding & live check-ins"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/50 dark:to-purple-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <a
                    href="https://form.jotform.com/252033789346059"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center"
                  >
                    Get Free Trial 7 Days
                  </a>
                 
                </div>
              </div>
            </div>
              </div>
            </div>
          )}

          {/* Add-ons Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    Add-Ons
                  </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {[
                    "Extra Workflow: $150–250 (one-time)",
                    "Additional AI Credits: $30 per 1,000 credits",
                    "Advanced API Integration: Custom quote",
                  ].map((addon, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {addon}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl border border-purple-200 dark:border-purple-800 mb-6">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    AI credits are used for tasks like GPT-powered logic, AI
                    agents, auto-responses, or smart document parsing. Each plan
                    includes free credits monthly. If your usage exceeds the
                    included amount, you can easily purchase more.
                  </p>
                </div>

                <div className="flex justify-center">
                  <a
                    href="https://form.jotform.com/252033789346059"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-emerald-600 to-purple-600 hover:from-emerald-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                  >
                    Get Free Trial 7 Days
                  </a>
             
                </div>
              </div>
            </div>
          </div>         
        </div>
      </section>

      {/* Use Cases */}
      <section id="results" className="px-6 py-20 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Real Results
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                See how Flow Pilot has helped other businesses
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Case Study 1 */}
            <ScrollAnimation animation="slide-in-left">
              <Card className="bg-card shadow-card hover:shadow-elegant transition-smooth group h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Startup CRM</CardTitle>
                  </div>
                  <CardDescription className="text-lg">
                    <strong>Problem:</strong> Leads were getting lost between
                    Typeform and CRM
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-lg">
                    <strong>Solution:</strong> Built workflow using Make + AI
                    routing logic to assign leads by category and alert sales
                    via Discord
                  </div>
                  <div className="flex items-center gap-3 text-primary font-semibold text-lg">
                    <TrendingUp className="w-6 h-6" />
                    <span>
                      Result: Saved ~5 hours per week, 40% faster follow-ups
                    </span>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Case Study 2 */}
            <ScrollAnimation animation="slide-in-right">
              <Card className="bg-card shadow-card hover:shadow-elegant transition-smooth group h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <BarChart3 className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">E-commerce Brand</CardTitle>
                  </div>
                  <CardDescription className="text-lg">
                    <strong>Problem:</strong> Manual order updates and customer
                    replies
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-lg">
                    <strong>Solution:</strong> Created backend system to sync
                    orders + AI agent to auto-reply to tracking requests via
                    email
                  </div>
                  <div className="flex items-center gap-3 text-primary font-semibold text-lg">
                    <TrendingUp className="w-6 h-6" />
                    <span>
                      Result: 80% less manual work, improved response time and
                      customer satisfaction
                    </span>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* About Section */}
      <ScrollAnimation>
        <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"></div>
          </div>

          <div className="px-6 relative">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <ScrollAnimation animation="fade-in-up">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
                    About Flow Pilot
                  </h2>
                </ScrollAnimation>
                <ScrollAnimation animation="fade-in-up" delay={200}>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                    A focused team helping founders and growing businesses run
                    smarter through automation
                  </p>
                </ScrollAnimation>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                {/* Company Profile Card */}
                <ScrollAnimation animation="slide-in-left">
                  <div className="relative">
                    <div className="glass rounded-3xl p-8 shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 group">
                      <div className="flex items-center mb-8">
                        <div className="w-20 h-20 bg-hero-gradient rounded-2xl flex items-center justify-center text-3xl text-white mr-6">
                          FP
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-1">
                            Flow Pilot
                          </h3>
                          <p className="text-primary font-semibold text-lg">
                            Automation Specialists
                          </p>
                        </div>
                      </div>

                      <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                        We build smart, reliable automation systems that
                        eliminate repetitive work and connect your tools — so
                        you can focus on growth.
                      </p>

                      <div className="space-y-6">
                        <div className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors">
                          <Users className="w-6 h-6 mr-4 text-primary" />
                          <span className="text-lg">
                            Small, focused team of experts
                          </span>
                        </div>
                        <div className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors">
                          <Target className="w-6 h-6 mr-4 text-primary" />
                          <span className="text-lg">
                            End-to-end automation solutions
                          </span>
                        </div>
                        <div className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors">
                          <Rocket className="w-6 h-6 mr-4 text-primary" />
                          <span className="text-lg">
                            Setup, hosting, monitoring & support
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* What Makes Us Different */}
                <ScrollAnimation animation="slide-in-right">
                  <div className="space-y-8">
                    <div className="glass rounded-2xl p-8 hover:shadow-glow transition-all duration-500 group">
                      <div className="flex items-center mb-6">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mr-6 group-hover:bg-primary/20 transition-colors">
                          <Brain className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-2xl font-semibold">
                          What Makes Us Different
                        </h3>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        We don't just "set up a Zap" — we design thoughtful,
                        long-lasting systems that actually save time, reduce
                        errors, and scale with your business.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 group">
                        <Cog className="w-10 h-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <h4 className="font-semibold mb-2 text-lg">
                          Full Service
                        </h4>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          Strategy to delivery
                        </p>
                      </div>
                      <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 group">
                        <Zap className="w-10 h-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <h4 className="font-semibold mb-2 text-lg">Reliable</h4>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          Never left in the dark
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                      <h3 className="text-2xl font-semibold mb-4 flex items-center">
                        <Lightbulb className="w-7 h-7 mr-3 text-primary group-hover:scale-110 transition-transform" />
                        Our Mission
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        To help small businesses operate like big ones — without
                        needing a full-time tech team.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Team Structure */}
              <ScrollAnimation animation="fade-in-up" delay={400}>
                <div className="mt-20">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
                    Our Team
                  </h3>
                  <p className="text-lg text-center mb-12 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    We’re a focused, hands-on automation team that brings together strategy,
                    execution, communication, and growth. Here's who makes the magic happen
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Gabriel */}
                    <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group">
                      <div className="w-16 h-16 bg-hero-gradient rounded-2xl flex items-center justify-center text-2xl text-white mb-4 mx-auto">
                        GM
                      </div>
                      <h4 className="text-xl font-semibold text-center mb-2">
                        Gabriel Maturan
                      </h4>
                      <p className="text-primary text-center font-medium mb-3">
                        Founder & CEO
                      </p>
                      <p className="text-sm text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors">
                        Leads strategy and oversees all automation implementations
                      </p>
                      <p className="text-sm text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors">
                        Vision, leadership, and architecture
                      </p>
                    </div>

                    {/* Project Manager */}
                    <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group md:col-span-2 lg:col-span-1">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-2xl text-white mb-4 mx-auto">
                        R
                      </div>
                      <h4 className="text-xl font-semibold text-center mb-2">
                        Russel
                      </h4>
                      <p className="text-primary text-center font-medium mb-3">
                        Project Manager
                      </p>
                      <p className="text-sm text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors">
                        Keeps communication and delivery smooth throughout your project
                      </p>
                    </div>

                    {/* Sales Lead */}
                    <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group md:col-span-2 lg:col-span-1">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-2xl text-white mb-4 mx-auto">
                        E
                      </div>
                      <h4 className="text-xl font-semibold text-center mb-2">
                        Erish Joshua
                      </h4>
                      <p className="text-primary text-center font-medium mb-3">
                        Sales Lead
                      </p>
                      <p className="text-sm text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors">
                        Works directly with clients to scope, quote, and align the right solutions for their needs
                      </p>
                    </div>

                    {/* Marketing & Outreach */}
                    <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group md:col-span-2 lg:col-span-1">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-2xl text-white mb-4 mx-auto">
                        M
                      </div>
                      <h4 className="text-xl font-semibold text-center mb-2">
                        Mark
                      </h4>
                      <p className="text-primary text-center font-medium mb-3">
                        Marketing & Outreach
                      </p>
                      <p className="text-sm text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors">
                        Responsible for client education, brand strategy, and lead generation
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Developers */}
              <ScrollAnimation animation="fade-in-up" delay={400}>
                <div className="mt-20">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
                    Automation Developers
                  </h3>
                  <p className="text-lg text-center mb-12 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    6 Specialists Experts in Zapier, Make, n8n, and custom integrations
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Tim */}
                    <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group">
                      <div className="w-16 h-16 bg-hero-gradient rounded-2xl flex items-center justify-center text-2xl text-white mb-4 mx-auto">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-center mb-2">
                        Tim
                      </h4>
                      <p className="text-primary text-center font-medium mb-3">
                        Lead Integrations
                      </p>
                    </div>

                    {/* Darrel */}
                    <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center text-2xl text-white mb-4 mx-auto">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-center mb-2">
                        Darrel
                      </h4>
                      <p className="text-primary text-center font-medium mb-3">
                        Workflow Architect
                      </p>
                    </div>

                    {/* Gelo */}
                    <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group md:col-span-2 lg:col-span-1">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-2xl text-white mb-4 mx-auto">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-center mb-2">
                        Gelo
                      </h4>
                      <p className="text-primary text-center font-medium mb-3">
                        Backend Logic & Data Sync
                      </p>
                    </div>

                    {/* Ram */}
                    <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group md:col-span-2 lg:col-span-1">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-2xl text-white mb-4 mx-auto">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-center mb-2">
                        Ram
                      </h4>
                      <p className="text-primary text-center font-medium mb-3">
                        Multi-platform Automation
                      </p>
                    </div>

                    {/* Ton */}
                    <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group md:col-span-2 lg:col-span-1">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-2xl text-white mb-4 mx-auto">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-center mb-2">
                        Ton
                      </h4>
                      <p className="text-primary text-center font-medium mb-3">
                        API & Webhook Specialist
                      </p>
                    </div>

                    {/* Randell  */}
                    <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group md:col-span-2 lg:col-span-1">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-2xl text-white mb-4 mx-auto">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-center mb-2">
                        Randell
                      </h4>
                      <p className="text-primary text-center font-medium mb-3">
                        QA + Performance Optimization
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Our Values */}
              <ScrollAnimation animation="fade-in-up" delay={500}>
                <div className="mt-20">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
                    Our Values
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="glass rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                        Clarity over complexity
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        Simple solutions that actually work
                      </p>
                    </div>

                    <div className="glass rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                        Automation should save time — not create confusion
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        Designed for efficiency, not complexity
                      </p>
                    </div>

                    <div className="glass rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                        Good systems are invisible — they just work
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        Seamless automation that runs in the background
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Reviews */}
              <ScrollAnimation animation="fade-in-up" delay={500}>
                <div className="mt-20">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
                    What People Are Saying
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="glass rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                        “Clear, simple, and effective”
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        “I finally understand how everything fits together. No jargon, no fluff — just clear answers.”
                      </p>
                    </div>

                    <div className="glass rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                        “A massive time-saver”
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        “What used to take me hours now runs on autopilot. I barely have to think about it.”
                      </p>
                    </div>

                    <div className="glass rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                        “It just works — seamlessly”
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        “The automation is invisible and flawless. I don’t even notice it running — and that’s the best part.”
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

                {/* 
                What We Work With - Workflows Created Section
                This section displays workflow examples and platforms used
                Currently hidden/disabled
                
                <ScrollAnimation animation="fade-in-up" delay={600}>
                  <div className="mt-20">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
                      Workflows Created
                    </h3>

                    <div className="space-y-8 max-w-4xl mx-auto">
                      <div className="glass rounded-2xl p-8 hover:shadow-glow transition-all duration-500 group">
                        <h4 className="text-xl font-semibold mb-4 flex items-center">
                          <Cog className="w-6 h-6 mr-3 text-primary group-hover:scale-110 transition-transform" />
                          Workflow Title
                        </h4>
                        <div className="flex flex-wrap gap-4">
                          {["Zapier", "Make (Integromat)", "n8n"].map(
                            (platform, index) => (
                              <div
                                key={platform}
                                className="bg-primary/10 rounded-full px-6 py-3 hover:bg-primary/20 transition-all duration-300 hover:scale-105 group/item"
                                style={{ animationDelay: `${index * 0.1}s` }}
                              >
                                <span className="font-semibold text-primary group-hover/item:text-primary transition-colors">
                                  {platform}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      <div className="glass rounded-2xl p-8 hover:shadow-glow transition-all duration-500 group">
                        <h4 className="text-xl font-semibold mb-4 flex items-center">
                          <Cog className="w-6 h-6 mr-3 text-primary group-hover:scale-110 transition-transform" />
                          Workflow Title
                        </h4>
                        <div className="flex flex-wrap gap-4">
                          {["Zapier", "Make (Integromat)", "n8n"].map(
                            (platform, index) => (
                              <div
                                key={platform}
                                className="bg-primary/10 rounded-full px-6 py-3 hover:bg-primary/20 transition-all duration-300 hover:scale-105 group/item"
                                style={{ animationDelay: `${index * 0.1}s` }}
                              >
                                <span className="font-semibold text-primary group-hover/item:text-primary transition-colors">
                                  {platform}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-center mt-12">
                      <div className="glass rounded-2xl p-8 max-w-2xl mx-auto hover:shadow-glow transition-all duration-500 group">
                        <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                          <strong className="text-primary">
                            Whether you need 1 automation or a fully-managed
                            backend system, we've got it covered.
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
                */}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Final CTA */}
      <section
        id="contact"
        className="px-6 py-20 lg:py-32 bg-hero-gradient text-primary-foreground relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative text-white">
          <ScrollAnimation animation="fade-in-up">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
              Ready to automate your operations — and add AI power behind the
              scenes?
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-up" delay={200}>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
              Let's automate your business — the smart way.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-in" delay={400}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={() => window.open("https://form.jotform.com/252033789346059", "_blank")}
                variant="secondary"
                size="lg"
                className="text-lg px-10 py-6 animate-pulse-glow"
              >
                Book a Free Call
                <ArrowRight className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-3 opacity-90">
                <Mail className="w-5 h-5" />
                <span className="text-lg">flowpilot25@gmail.com</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-secondary/30 text-center border-t border-border/50">
        <p className="text-foreground text-lg">
          © 2024 Flow Pilot. Automation services for small teams and solo
          founders.
        </p>
      </footer>
    </div>
  );
};

export default Index;
