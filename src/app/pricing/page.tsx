"use client";
import React from 'react';
import { Container, Wrapper } from "@/components";
import SectionBadge from "@/components/ui/section-badge";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import Navbar from '@/components/navigation/navbar';

const PricingPage = () => {
    const pricingPlans = [
      {
        name: "TheBoringNotch (Free)",
        price: "$0.00",
        features: ["Access all free features"],
        isFree: true,
      },
      {
        name: "TheBoringCalendar (Extension)",
        price: "$0.99",
        features: ["Access to Calendar"],
      },

      {
        name: "TheBoringHUDs (Extension)",
        price: "$3.99",
        features: ["Brightness Control", "Volume Control", "Backlight Control"],
      },
      {
        name: "TheBoringClipboard (Extension)",
        price: "$5.99",
        features: ["All Pro features", "Feature 6", "Feature 7"],
      },
      {
        name: "TheBoringNotch Bundle (All Extensions in one)",
        price: "$9.99",
        features: ["Acess to HUDs","Access to Calendar" ,"Acess to Clipboard"],
      },
    ];

  return (
    <>
    <Navbar />
    <section className="w-full relative flex flex-col items-center justify-center px-2 md:px-0 py-8">
      <Wrapper>
        <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

              <Container>
                  
          <div className="flex flex-col items-center justify-center py-20 h-full">
            <div className="max-w-md mx-auto text-center">
              <SectionBadge title=" Pricing" />
              <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
               Boring Plans
              </h2>
              <p className="text-muted-foreground mt-6">
                Simple , Boring & transparent pricing that grows with you. Try our Free plan without any limits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full max-w-4xl">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={plan.name} 
                  className={`relative flex flex-col p-6 bg-white/5 backdrop-blur-lg rounded-lg border border-foreground/10 ${
                    index === pricingPlans.length - 1 ? 'overflow-hidden' : ''
                  } ${
                    plan.isFree ? 'col-span-full' : ''
                  }`}
                >
                  {index === pricingPlans.length - 1 && (
                    <BorderBeam size={400} duration={5} delay={100} />
                  )}
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <p className="text-3xl font-bold mt-2">{plan.price}</p>
                  <p className="text-sm text-muted-foreground mt-1">per Lifetime</p>
                  <ul className="mt-6 space-y-2 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-8">Choose Plan</Button>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
    </>
  );
};

export default PricingPage;