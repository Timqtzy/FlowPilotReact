import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Cog, Rocket, ArrowRight, CheckCircle, Users, TrendingUp, Clock, Target, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="animate-float mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-primary/20 rounded-full">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Automation Services</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Automate Your Work.<br />
            Scale Without Chaos.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Flow Pilot helps small teams and solo founders eliminate busywork with smart automations using Zapier, Make, and n8n.
          </p>
          
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Book a Free Automation Call
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I design and build automation systems that save you time and eliminate repetitive tasks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card-gradient border-0 shadow-card hover:shadow-elegant transition-smooth">
              <CardHeader>
                <Clock className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Automate Daily Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Turn repetitive work into automated workflows</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card-gradient border-0 shadow-card hover:shadow-elegant transition-smooth">
              <CardHeader>
                <Target className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Connect Your Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Link Notion, Airtable, Slack, CRMs, Google Sheets</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card-gradient border-0 shadow-card hover:shadow-elegant transition-smooth">
              <CardHeader>
                <Cog className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">End-to-End Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Build complete workflows in Zapier, Make, or n8n</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card-gradient border-0 shadow-card hover:shadow-elegant transition-smooth">
              <CardHeader>
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Reduce Errors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Eliminate manual errors and wasted hours</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Packages</h2>
            <p className="text-xl text-muted-foreground">Choose the right automation solution for your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Flow */}
            <Card className="bg-card shadow-card hover:shadow-elegant transition-smooth">
              <CardHeader className="text-center">
                <Badge className="self-center mb-4">Most Popular</Badge>
                <CardTitle className="text-2xl">Starter Flow</CardTitle>
                <div className="text-3xl font-bold text-primary">$300</div>
                <CardDescription>Perfect for small fixes or your first automation system</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>3 custom automations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>1-hour consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Documentation & setup support</span>
                  </div>
                </div>
                <Button variant="default" className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            {/* Flow Audit */}
            <Card className="bg-card shadow-card hover:shadow-elegant transition-smooth">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Flow Audit</CardTitle>
                <div className="text-3xl font-bold text-primary">$150</div>
                <CardDescription>Full review of your current tools and workflows</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>1-hour deep dive call</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Full process review</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Written action plan</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            {/* Full System Build */}
            <Card className="bg-card shadow-card hover:shadow-elegant transition-smooth">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Full System Build</CardTitle>
                <div className="text-3xl font-bold text-primary">Custom</div>
                <CardDescription>Complete, scalable automation system</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>5–10 advanced automations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Workflow planning & architecture</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Ongoing support & training</span>
                  </div>
                </div>
                <Button variant="premium" className="w-full">Get Quote</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">Not sure what you need?</p>
            <Button variant="cta" size="lg">
              Book a free consult call
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results</h2>
            <p className="text-xl text-muted-foreground">See how Flow Pilot has helped other businesses</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <Card className="bg-card shadow-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-primary" />
                  <CardTitle>Startup CRM</CardTitle>
                </div>
                <CardDescription className="text-base">
                  <strong>Problem:</strong> Losing leads between forms and CRM
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <strong>Solution:</strong> Built automation in Make to tag and route leads to CRM + Slack
                </div>
                <div className="flex items-center gap-3 text-primary font-semibold">
                  <TrendingUp className="w-5 h-5" />
                  <span>Result: Saved ~5 hours per week</span>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 2 */}
            <Card className="bg-card shadow-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Rocket className="w-6 h-6 text-primary" />
                  <CardTitle>E-commerce Brand</CardTitle>
                </div>
                <CardDescription className="text-base">
                  <strong>Problem:</strong> Manual order notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <strong>Solution:</strong> Used Zapier to sync orders to Sheets and email customers automatically
                </div>
                <div className="flex items-center gap-3 text-primary font-semibold">
                  <TrendingUp className="w-5 h-5" />
                  <span>Result: 80% less manual effort</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Flow Pilot</h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="text-xl mb-6">
              Hey! I'm <strong className="text-foreground">Gabriel Maturan</strong>, founder of Flow Pilot.
            </p>
            <p className="text-lg mb-6">
              I help founders, teams, and digital businesses build automation systems that work quietly in the background — saving time, money, and stress.
            </p>
            <p className="text-lg mb-8">
              If you're stuck doing manual tasks or jumping between tools all day, let's fix that.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
              <div>
                <h3 className="text-foreground font-semibold mb-2">My Mission</h3>
                <p className="text-sm">To help small businesses run like big ones — without needing a full tech team.</p>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-2">My Values</h3>
                <p className="text-sm">Clarity over complexity. Automation should save time — not create confusion.</p>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-2">My Promise</h3>
                <p className="text-sm">Good systems are invisible — they just work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-hero-gradient text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to save 10+ hours a week?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's automate your business — the smart way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              Book a Free Call
              <ArrowRight className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2 opacity-90">
              <Mail className="w-4 h-4" />
              <span>hello@flowpilot.io</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-secondary/30 text-center">
        <p className="text-muted-foreground">
          © 2024 Flow Pilot. Automation services for small teams and solo founders.
        </p>
      </footer>
    </div>
  );
};

export default Index;
