import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function ResearchSpotlight() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <div className="bg-[#005566] rounded overflow-hidden text-white shadow-md">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="flex-1 p-8 sm:p-12 lg:p-14">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-3">
              Research at Shilah
            </h2>
            <div className="w-12 h-0.5 bg-white/40 mb-6" />
            <p className="text-[15px] sm:text-[16px] text-white/90 leading-relaxed font-light mb-8 max-w-lg">
              Research is the foundation of Shilah Medicine, yielding new
              insights and better treatment. Learn more about our labs, research
              faculty and clinical trials.
            </p>

            <div>
              <Link
                href="https://www.hopkinsmedicine.org/research"
                className="inline-flex items-center space-x-2 px-6 py-3 border border-white text-white font-medium text-[15px] rounded hover:bg-white hover:text-[#005566] transition-colors"
              >
                <span>Research</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[45%] h-[260px] md:h-[380px] relative bg-[#004250]">
            <Image
              src="/sites/hopkinsmedicine/images/14_researcher-in-lab_jpg.png"
              alt="Researcher in laboratory with microscope"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
