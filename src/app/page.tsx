"use client";

import React, { useState, useEffect } from 'react';
import LoadingPage from "@/components/sections/loading";
import { Navigation } from "@/components/sections/navigation";
import { Header } from "@/components/sections/header";
import { Certificates } from "@/components/sections/certificates";
import { Projects } from "@/components/sections/projects";
import { Skillset } from "@/components/sections/skillset";
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
        <Navigation />
        <Header />
        <Certificates />
        <Projects />
        <Skillset />
        <Footer />
      </main>
    </div>
  );
}
