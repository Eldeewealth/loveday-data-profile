"use client";

import * as React from "react";
import { Paperclip, Sparkles } from "lucide-react";

const Hero1 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-x-hidden">
      {/* Gradient */}
      <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-40rem] right-[-30rem] z-[0] blur-[4rem] skew-[-40deg] opacity-50">
        <div className="w-[10rem] h-[20rem] bg-gradient-to-b from-primary to-accent"></div>
        <div className="w-[10rem] h-[20rem] bg-gradient-to-b from-primary to-accent"></div>
        <div className="w-[10rem] h-[20rem] bg-gradient-to-b from-primary to-accent"></div>
      </div>
      <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-50rem] right-[-50rem] z-[0] blur-[4rem] skew-[-40deg] opacity-50">
        <div className="w-[10rem] h-[20rem] bg-gradient-to-b from-primary to-accent"></div>
        <div className="w-[10rem] h-[20rem] bg-gradient-to-b from-primary to-accent"></div>
        <div className="w-[10rem] h-[20rem] bg-gradient-to-b from-primary to-accent"></div>
      </div>
      <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-60rem] right-[-60rem] z-[0] blur-[4rem] skew-[-40deg] opacity-50">
        <div className="w-[10rem] h-[30rem] bg-gradient-to-b from-primary to-accent"></div>
        <div className="w-[10rem] h-[30rem] bg-gradient-to-b from-primary to-accent"></div>
        <div className="w-[10rem] h-[30rem] bg-gradient-to-b from-primary to-accent"></div>
      </div>

      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div className="font-bold text-md">Loveday</div>
        </div>
        <button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-4 py-2 text-sm cursor-pointer font-semibold transition-colors">
          Get Started
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex-1 flex justify-center">
            <div className="bg-card rounded-full px-4 py-2 flex items-center gap-2 w-fit mx-4">
              <span className="text-xs flex items-center gap-2">
                <span className="bg-primary p-1 rounded-full text-xs">📊</span>
                Data Science & Product Management
              </span>
            </div>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Transform Data
            </span>
            <br />
            Into Business Insights
          </h1>

          {/* Subtitle */}
          <p className="text-md text-muted-foreground">
            MSc Data Analytics graduate with expertise in cloud-based data engineering, 
            machine learning, and product management.
          </p>

          {/* Search bar */}
          <div className="relative max-w-2xl mx-auto w-full">
            <div className="bg-card rounded-full p-3 flex items-center">
              <button className="p-2 rounded-full hover:bg-muted transition-all">
                <Paperclip className="w-5 h-5 text-muted-foreground" />
              </button>
              <button className="p-2 rounded-full hover:bg-muted transition-all">
                <Sparkles className="w-5 h-5 text-accent" />
              </button>
              <input
                type="text"
                placeholder="How can I help transform your data today?"
                className="bg-transparent flex-1 outline-none text-muted-foreground pl-4 placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Suggestion pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-12 max-w-2xl mx-auto">
            <button className="bg-card hover:bg-muted rounded-full px-4 py-2 text-sm transition-colors">
              Machine Learning Projects
            </button>
            <button className="bg-card hover:bg-muted rounded-full px-4 py-2 text-sm transition-colors">
              Data Engineering Solutions
            </button>
            <button className="bg-card hover:bg-muted rounded-full px-4 py-2 text-sm transition-colors">
              Product Strategy & Analytics
            </button>
            <button className="bg-card hover:bg-muted rounded-full px-4 py-2 text-sm transition-colors">
              Cloud Infrastructure Design
            </button>
            <button className="bg-card hover:bg-muted rounded-full px-4 py-2 text-sm transition-colors">
              Business Intelligence Dashboards
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export { Hero1 };