import React from "react";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { HeroBanner } from "@/components/sites/hopkinsmedicine/HeroBanner";
import { EmergencySection } from "@/components/sites/hopkinsmedicine/EmergencySection";
import { QuickAccessCards } from "@/components/sites/hopkinsmedicine/QuickAccessCards";
import { FindDoctorSection } from "@/components/sites/hopkinsmedicine/FindDoctorSection";
import { MedicalServicesSection } from "@/components/sites/hopkinsmedicine/MedicalServicesSection";
import { AppointmentWizardSection } from "@/components/sites/hopkinsmedicine/AppointmentWizardSection";
import { HospitalFacilitiesSection } from "@/components/sites/hopkinsmedicine/HospitalFacilitiesSection";
import { BillingAssistance } from "@/components/sites/hopkinsmedicine/BillingAssistance";
import { LocationFinderSection } from "@/components/sites/hopkinsmedicine/LocationFinderSection";
import { CareCallout } from "@/components/sites/hopkinsmedicine/CareCallout";
import { RankingsSection } from "@/components/sites/hopkinsmedicine/RankingsSection";
import { PatientStoriesSection } from "@/components/sites/hopkinsmedicine/PatientStoriesSection";
import { AboutShilahSection } from "@/components/sites/hopkinsmedicine/AboutShilahSection";
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
      {/* Navigation Header with Patient Navigation Strip */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-1 w-full overflow-hidden">
        {/* 0. Hero Banner with Quick Search */}
        <HeroBanner />

        {/* 1. Emergency Care 24/7 Live Banner */}
        <EmergencySection />

        {/* 2. Quick Access Action Cards (Preserved) */}
        <QuickAccessCards />

        {/* 3. Find the Right Doctor for You */}
        <FindDoctorSection />

        {/* 4. Our Medical Services / Specialties */}
        <MedicalServicesSection />

        {/* 5. Interactive 5-Step Appointment Booking Wizard */}
        <AppointmentWizardSection />

        {/* 6. Our Hospital & Modern Facilities */}
        <HospitalFacilitiesSection />

        {/* 7. Payments and Billing Assistance (BPJS & Insurance - Preserved) */}
        <BillingAssistance />

        {/* 8. Find a Shilah Location (Hospitals & Clinics Finder) */}
        <LocationFinderSection />

        {/* 9. Feeling Sick / Care Guide Callout (Preserved) */}
        <CareCallout />

        {/* 10. Top Rankings Cards (Preserved) */}
        <RankingsSection />

        {/* 11. Patient Stories & Testimonials */}
        <PatientStoriesSection />

        {/* 12. About Shilah Medicine (Mission, Pillars & Stats) */}
        <AboutShilahSection />

        {/* 13. Insurance Notice Alert Banner (Preserved) */}
        <AlertBanner />

        {/* 14. Research Saves Lives Framed Block (Preserved) */}
        <ResearchSavesLives />

        {/* 15. News and Features (Preserved) */}
        <NewsFeatures />

        {/* 16. Further Reading CTAs (Preserved) */}
        <FurtherReading />

        {/* 17. School of Medicine Spotlight (Preserved) */}
        <SchoolOfMedicine />

        {/* 18. Research at Shilah Spotlight (Preserved) */}
        <ResearchSpotlight />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Cookie Consent Banner */}
      <CookieBanner />
    </div>
  );
}
