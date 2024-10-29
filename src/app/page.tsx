"use client";

import React, { useState, useEffect } from 'react';
import LoadingPage from "@/components/sections/loading";
import { TopNavigation } from '@/components/sections/top-navigation';
import { Navigation } from "@/components/sections/navigation";
import { Header } from "@/components/sections/header";
import { Certificates } from "@/components/sections/certificates";
import { Projects } from "@/components/sections/projects";
import { Skillset } from "@/components/sections/skillset";
import Contact from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Set this timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <main className="bg-black">
        <TopNavigation />
        <Navigation />
        <Header />
        <Certificates />
        <Projects />
        <Skillset />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
