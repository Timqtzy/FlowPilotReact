"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/scroll-animation";
import { LucideIcon } from "lucide-react";

interface ConnectedCard {
  icon: LucideIcon;
  title: string;
  desc: string;
  delay: number;
}

interface ConnectedCardsProps {
  cards: ConnectedCard[];
}

export function ConnectedCards({ cards }: ConnectedCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative py-12">
      {/* Connection Lines with RGB Flowing Glow - Hidden on mobile */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
        style={{ zIndex: 1 }}
      >
        <defs>
          {/* Animated flowing gradient */}
          <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(190 100% 50%)" stopOpacity="0">
              <animate attributeName="stop-color" values="hsl(190 100% 50%);hsl(280 100% 50%);hsl(74 61% 58%);hsl(190 100% 50%)" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="30%" stopColor="hsl(190 100% 50%)" stopOpacity="1">
              <animate attributeName="offset" values="0;1;0" dur="3s" repeatCount="indefinite" />
              <animate attributeName="stop-color" values="hsl(190 100% 50%);hsl(280 100% 50%);hsl(74 61% 58%);hsl(190 100% 50%)" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="60%" stopColor="hsl(74 61% 58%)" stopOpacity="1">
              <animate attributeName="offset" values="0.3;1.3;0.3" dur="3s" repeatCount="indefinite" />
              <animate attributeName="stop-color" values="hsl(74 61% 58%);hsl(190 100% 50%);hsl(280 100% 50%);hsl(74 61% 58%)" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="hsl(280 100% 50%)" stopOpacity="0">
              <animate attributeName="stop-color" values="hsl(280 100% 50%);hsl(74 61% 58%);hsl(190 100% 50%);hsl(280 100% 50%)" dur="4s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(280 100% 50%)" stopOpacity="0">
              <animate attributeName="stop-color" values="hsl(280 100% 50%);hsl(74 61% 58%);hsl(190 100% 50%);hsl(280 100% 50%)" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="30%" stopColor="hsl(280 100% 50%)" stopOpacity="1">
              <animate attributeName="offset" values="0;1;0" dur="3.5s" repeatCount="indefinite" />
              <animate attributeName="stop-color" values="hsl(280 100% 50%);hsl(74 61% 58%);hsl(190 100% 50%);hsl(280 100% 50%)" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="60%" stopColor="hsl(190 100% 50%)" stopOpacity="1">
              <animate attributeName="offset" values="0.3;1.3;0.3" dur="3.5s" repeatCount="indefinite" />
              <animate attributeName="stop-color" values="hsl(190 100% 50%);hsl(280 100% 50%);hsl(74 61% 58%);hsl(190 100% 50%)" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="hsl(74 61% 58%)" stopOpacity="0">
              <animate attributeName="stop-color" values="hsl(74 61% 58%);hsl(190 100% 50%);hsl(280 100% 50%);hsl(74 61% 58%)" dur="4s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          <linearGradient id="flowGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(74 61% 58%)" stopOpacity="0">
              <animate attributeName="stop-color" values="hsl(74 61% 58%);hsl(190 100% 50%);hsl(280 100% 50%);hsl(74 61% 58%)" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="30%" stopColor="hsl(190 100% 50%)" stopOpacity="1">
              <animate attributeName="offset" values="0;1;0" dur="3s" repeatCount="indefinite" />
              <animate attributeName="stop-color" values="hsl(190 100% 50%);hsl(280 100% 50%);hsl(74 61% 58%);hsl(190 100% 50%)" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="60%" stopColor="hsl(280 100% 50%)" stopOpacity="1">
              <animate attributeName="offset" values="0.3;1.3;0.3" dur="3s" repeatCount="indefinite" />
              <animate attributeName="stop-color" values="hsl(280 100% 50%);hsl(74 61% 58%);hsl(190 100% 50%);hsl(280 100% 50%)" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="hsl(190 100% 50%)" stopOpacity="0">
              <animate attributeName="stop-color" values="hsl(190 100% 50%);hsl(280 100% 50%);hsl(74 61% 58%);hsl(190 100% 50%)" dur="4s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          {/* Strong glow filter */}
          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Row 1: Horizontal connections */}
        {/* Card 1 to Card 2 - Base line */}
        <line
          x1="23%"
          y1="22%"
          x2="39.5%"
          y2="22%"
          stroke="hsl(190 100% 50% / 0.2)"
          strokeWidth="2"
        />
        {/* Card 1 to Card 2 - Glowing animated line */}
        {isVisible && (
          <line
            x1="23%"
            y1="22%"
            x2="39.5%"
            y2="22%"
            stroke="url(#flowGradient1)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#strongGlow)"
          />
        )}

        {/* Card 2 to Card 3 - Base line */}
        <line
          x1="60.5%"
          y1="22%"
          x2="77%"
          y2="22%"
          stroke="hsl(74 61% 58% / 0.2)"
          strokeWidth="2"
        />
        {/* Card 2 to Card 3 - Glowing animated line */}
        {isVisible && (
          <line
            x1="60.5%"
            y1="22%"
            x2="77%"
            y2="22%"
            stroke="url(#flowGradient2)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#strongGlow)"
          />
        )}

        {/* Row 1 to Row 2: Vertical connection from Card 2 - Base line */}
        <line
          x1="50%"
          y1="38%"
          x2="50%"
          y2="62%"
          stroke="hsl(280 100% 50% / 0.2)"
          strokeWidth="2"
        />
        {/* Vertical - Glowing animated line */}
        {isVisible && (
          <line
            x1="50%"
            y1="38%"
            x2="50%"
            y2="62%"
            stroke="url(#flowGradient3)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#strongGlow)"
          />
        )}

        {/* Row 2: Horizontal connection - Base line */}
        <line
          x1="39.5%"
          y1="78%"
          x2="60.5%"
          y2="78%"
          stroke="hsl(190 100% 50% / 0.2)"
          strokeWidth="2"
        />
        {/* Card 4 to Card 5 - Glowing animated line */}
        {isVisible && (
          <line
            x1="39.5%"
            y1="78%"
            x2="60.5%"
            y2="78%"
            stroke="url(#flowGradient1)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#strongGlow)"
          />
        )}

        {/* Animated connection dots/nodes */}
        {isVisible && (
          <>
            {/* Top center node */}
            <circle cx="50%" cy="22%" r="5" fill="hsl(190 100% 50%)" opacity="0.8" filter="url(#strongGlow)">
              <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
              <animate attributeName="fill" values="hsl(190 100% 50%);hsl(280 100% 50%);hsl(74 61% 58%);hsl(190 100% 50%)" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="50%" cy="22%" r="3" fill="white" opacity="1">
              <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
            </circle>

            {/* Bottom center node */}
            <circle cx="50%" cy="78%" r="5" fill="hsl(74 61% 58%)" opacity="0.8" filter="url(#strongGlow)">
              <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
              <animate attributeName="fill" values="hsl(74 61% 58%);hsl(190 100% 50%);hsl(280 100% 50%);hsl(74 61% 58%)" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="50%" cy="78%" r="3" fill="white" opacity="1">
              <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
            </circle>
          </>
        )}
      </svg>

      {/* Cards Grid - 3 cards top row, 2 cards bottom row (centered) */}
      <div className="relative" style={{ zIndex: 2 }}>
        {/* Top Row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 mb-8 lg:mb-16">
          {cards.slice(0, 3).map((service, index) => (
            <ScrollAnimation
              key={index}
              animation="fade-in-up"
              delay={service.delay}
            >
              <Card className="bg-card/80 backdrop-blur-sm border-2 border-primary/30 shadow-card hover:shadow-elegant transition-all duration-500 group hover:scale-105 hover:border-primary/60 h-64 relative overflow-hidden">
                {/* Animated gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-flow" />

                <CardHeader className="text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500 group-hover:scale-110 shadow-lg">
                    <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* Bottom Row - 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-3xl mx-auto">
          {cards.slice(3, 5).map((service, index) => (
            <ScrollAnimation
              key={index + 3}
              animation="fade-in-up"
              delay={service.delay}
            >
              <Card className="bg-card/80 backdrop-blur-sm border-2 border-primary/30 shadow-card hover:shadow-elegant transition-all duration-500 group hover:scale-105 hover:border-primary/60 h-64 relative overflow-hidden">
                {/* Animated gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-flow" />

                <CardHeader className="text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500 group-hover:scale-110 shadow-lg">
                    <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}
