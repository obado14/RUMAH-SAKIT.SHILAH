import React from "react";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { HeroBanner } from "@/components/sites/hopkinsmedicine/HeroBanner";
import { QuickAccessCards } from "@/components/sites/hopkinsmedicine/QuickAccessCards";
import { BillingAssistance } from "@/components/sites/hopkinsmedicine/BillingAssistance";
import { CareCallout } from "@/components/sites/hopkinsmedicine/CareCallout";
import { RankingsSection } from "@/components/sites/hopkinsmedicine/RankingsSection";
import { AlertBanner } from "@/components/sites/hopkinsmedicine/AlertBanner";
import { ResearchSavesLives } from "@/components/sites/hopkinsmedicine/ResearchSavesLives";
import { NewsFeatures } from "@/components/sites/hopkinsmedicine/NewsFeatures";
import { FurtherReading } from "@/components/sites/hopkinsmedicine/FurtherReading";
import { SchoolOfMedicine } from "@/components/sites/hopkinsmedicine/SchoolOfMedicine";
import { ResearchSpotlight } from "@/components/sites/hopkinsmedicine/ResearchSpotlight";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333]">
      {/* Navigation Header */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-1 w-full overflow-hidden">
        {/* Hero Banner */}
        <HeroBanner />

        {/* Quick Access Action Cards */}
        <QuickAccessCards />

        {/* Payments and Billing Assistance */}
        <BillingAssistance />

        {/* Feeling Sick / Care Guide Callout */}
        <CareCallout />

        {/* Top Rankings Cards */}
        <RankingsSection />

        {/* UnitedHealthcare Notice Alert Banner */}
        <AlertBanner />

        {/* Research Saves Lives Framed Block */}
        <ResearchSavesLives />

        {/* News and Features */}
        <NewsFeatures />

        {/* Further Reading CTAs */}
        <FurtherReading />

        {/* School of Medicine Spotlight */}
        <SchoolOfMedicine />

        {/* Research at Johns Hopkins Spotlight */}
        <ResearchSpotlight />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Cookie Consent Banner */}
      <CookieBanner />
    </div>
  );
}
