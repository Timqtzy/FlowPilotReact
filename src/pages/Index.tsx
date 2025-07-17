import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Zap, Cog, Rocket, ArrowRight, CheckCircle, Users, TrendingUp, Clock, Target, Mail, Star, Sparkles, BarChart3, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-hero-gradient rounded-lg">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Flow Pilot
            </span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
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
              Automate Your Work.<br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Scale Without Chaos.</span>
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in-up" delay={400}>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Flow Pilot helps small teams and solo founders eliminate busywork with smart automations using 
              <span className="text-primary font-semibold"> Zapier, Make, and n8n.</span>
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animation="scale-in" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="text-lg px-10 py-6 animate-pulse-glow">
                Book a Free Automation Call
                <ArrowRight className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm">Trusted by 50+ businesses</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-20 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">What Flow Pilot Does</h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
                I design and build automation systems that save you time and eliminate repetitive tasks.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Automate Daily Tasks", desc: "Turn repetitive work into automated workflows", delay: 0 },
              { icon: Target, title: "Connect Your Tools", desc: "Link Notion, Airtable, Slack, CRMs, Google Sheets", delay: 100 },
              { icon: Cog, title: "End-to-End Systems", desc: "Build complete workflows in Zapier, Make, or n8n", delay: 200 },
              { icon: CheckCircle, title: "Reduce Errors", desc: "Eliminate manual errors and wasted hours", delay: 300 }
            ].map((service, index) => (
              <ScrollAnimation key={index} animation="fade-in-up" delay={service.delay}>
                <Card className="bg-card-gradient border-0 shadow-card hover:shadow-elegant transition-smooth group hover:scale-105 h-full">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                      <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{service.desc}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="px-6 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Service Packages</h2>
              <p className="text-xl md:text-2xl text-muted-foreground">Choose the right automation solution for your needs</p>
            </div>
          </ScrollAnimation>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Flow */}
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <Card className="bg-card shadow-card hover:shadow-elegant transition-smooth group hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader className="text-center relative">
                  <Badge className="self-center mb-4 bg-primary/10 text-primary border-primary/20">Most Popular</Badge>
                  <CardTitle className="text-2xl lg:text-3xl">Starter Flow</CardTitle>
                  <div className="text-4xl lg:text-5xl font-bold text-primary">$300</div>
                  <CardDescription className="text-lg">Perfect for small fixes or your first automation system</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 relative">
                  <div className="space-y-4">
                    {["3 custom automations", "1-hour consultation", "Documentation & setup support"].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="default" className="w-full text-lg py-6">Get Started</Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Flow Audit */}
            <ScrollAnimation animation="fade-in-up" delay={200}>
              <Card className="bg-card shadow-card hover:shadow-elegant transition-smooth group hover:scale-105">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl lg:text-3xl">Flow Audit</CardTitle>
                  <div className="text-4xl lg:text-5xl font-bold text-primary">$150</div>
                  <CardDescription className="text-lg">Full review of your current tools and workflows</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {["1-hour deep dive call", "Full process review", "Written action plan"].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full text-lg py-6">Learn More</Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Full System Build */}
            <ScrollAnimation animation="fade-in-up" delay={400}>
              <Card className="bg-card shadow-card hover:shadow-elegant transition-smooth group hover:scale-105 border-2 border-primary/20 hover:border-primary/40">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl">Full System Build</CardTitle>
                  <div className="text-4xl lg:text-5xl font-bold text-primary">Custom</div>
                  <CardDescription className="text-lg">Complete, scalable automation system</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {["5–10 advanced automations", "Workflow planning & architecture", "Ongoing support & training"].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="premium" className="w-full text-lg py-6">Get Quote</Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
          
          <ScrollAnimation animation="fade-in-up" delay={600}>
            <div className="text-center mt-16">
              <p className="text-xl text-muted-foreground mb-6">Not sure what you need?</p>
              <Button variant="cta" size="lg" className="text-lg px-10 py-6">
                Book a free consult call
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 py-20 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Real Results</h2>
              <p className="text-xl md:text-2xl text-muted-foreground">See how Flow Pilot has helped other businesses</p>
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
                    <strong>Problem:</strong> Losing leads between forms and CRM
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-lg">
                    <strong>Solution:</strong> Built automation in Make to tag and route leads to CRM + Slack
                  </div>
                  <div className="flex items-center gap-3 text-primary font-semibold text-lg">
                    <TrendingUp className="w-6 h-6" />
                    <span>Result: Saved ~5 hours per week</span>
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
                    <strong>Problem:</strong> Manual order notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-lg">
                    <strong>Solution:</strong> Used Zapier to sync orders to Sheets and email customers automatically
                  </div>
                  <div className="flex items-center gap-3 text-primary font-semibold text-lg">
                    <TrendingUp className="w-6 h-6" />
                    <span>Result: 80% less manual effort</span>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">About Flow Pilot</h2>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in-up" delay={200}>
            <div className="text-center prose prose-lg mx-auto text-muted-foreground max-w-none">
              <p className="text-2xl md:text-3xl mb-8 leading-relaxed">
                Hey! I'm <strong className="text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Gabriel Maturan</strong>, founder of Flow Pilot.
              </p>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                I help founders, teams, and digital businesses build automation systems that work quietly in the background — saving time, money, and stress.
              </p>
              <p className="text-xl md:text-2xl mb-12 leading-relaxed">
                If you're stuck doing manual tasks or jumping between tools all day, let's fix that.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in-up" delay={400}>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                { title: "My Mission", desc: "To help small businesses run like big ones — without needing a full tech team." },
                { title: "My Values", desc: "Clarity over complexity. Automation should save time — not create confusion." },
                { title: "My Promise", desc: "Good systems are invisible — they just work." }
              ].map((item, i) => (
                <Card key={i} className="bg-card-gradient border-0 shadow-card hover:shadow-elegant transition-smooth text-center group hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-smooth">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 lg:py-32 bg-hero-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative">
          <ScrollAnimation animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to save 10+ hours a week?
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in-up" delay={200}>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
              Let's automate your business — the smart way.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animation="scale-in" delay={400}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="secondary" size="lg" className="text-lg px-10 py-6 animate-pulse-glow">
                Book a Free Call
                <ArrowRight className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-3 opacity-90">
                <Mail className="w-5 h-5" />
                <span className="text-lg">hello@flowpilot.io</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-secondary/30 text-center border-t border-border/50">
        <ScrollAnimation animation="fade-in-up">
          <p className="text-muted-foreground text-lg">
            © 2024 Flow Pilot. Automation services for small teams and solo founders.
          </p>
        </ScrollAnimation>
      </footer>
    </div>
  );
};

export default Index;
