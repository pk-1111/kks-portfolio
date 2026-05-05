// app/page.tsx
"use client";

import HeroSection from "@/components/HeroSection/HeroSection";
import InfoSection from "@/components/InfoSection/InfoSection";
import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import OutSection from "@/components/OutSection/OutSection";
import StatsSection from "@/components/Code_Journey/CodeJourney";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BottomNavbar />
      <section className="min-h-[120vh] flex flex-col items-center justify-center bg-amber-50/10 relative overflow-hidden">
        <HeroSection />
        <InfoSection />
        <OutSection />
        <StatsSection />
      </section>
    </main>
  );
}