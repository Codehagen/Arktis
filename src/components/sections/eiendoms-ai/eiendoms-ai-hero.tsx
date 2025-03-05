"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EiendomsAIHero() {
  return (
    <section className="relative">
      <div className="relative py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
            <Link
              href="/losninger"
              className="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3"
            >
              <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
                Nyhet
              </span>
              <span className="text-sm">Arktis AI Løsninger</span>
              <span className="bg-(--color-border) block h-4 w-px"></span>
              <ArrowRight className="size-4" />
            </Link>

            <h1 className="mt-8 text-4xl font-semibold md:text-5xl xl:text-5xl xl:[line-height:1.125]">
              Boligprospekter på autopilot
              <br />
              med Eiendoms-AI
            </h1>
            <p className="mx-auto mt-8 hidden max-w-2xl text-wrap text-lg sm:block text-muted-foreground">
              Avansert AI Backoffice for salgsoppgaver og bildetekst. Med
              AI-tilkobling fra Eiendoms-AI får eiendomsbransjen en sømløs
              integrasjon som sikrer effektiv dataflyt og automatisering.
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-wrap sm:hidden text-muted-foreground">
              Effektiviserer eiendomssalg, sparer tid og øker kvaliteten på dine
              boligprospekter.
            </p>

            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/kontakt">
                  <span className="text-nowrap">Få en demo</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="x-auto relative mx-auto mt-12 max-w-2xl sm:mt-16">
            <div className="absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)] dark:opacity-10"></div>
            <div className="absolute inset-x-0 top-12 -z-[1] mx-auto h-1/3 w-2/3 rounded-full bg-blue-300 blur-3xl dark:bg-white/20"></div>

            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
              loop
              autoplay={{ delay: 5000 }}
              modules={[Autoplay, EffectCoverflow]}
            >
              <SwiperSlide className="px-2">
                <div className="bg-background rounded-(--radius) border p-9 shadow-sm">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M3 9.5v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-14a2 2 0 0 0-2 2z"></path>
                        <path d="M13 7V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2"></path>
                        <path d="M13 17v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2"></path>
                        <path d="M9 14v-4"></path>
                        <path d="M17 14h.01"></path>
                        <path d="m12 14 1.5-2"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">
                    30% tidsbesparelse
                  </h3>
                  <p className="text-center text-muted-foreground">
                    Reduser tiden det tar å generere fullstendige og tilpassede
                    boligprospekter med flere timer
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="px-2">
                <div className="bg-background rounded-(--radius) border p-9 shadow-sm">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.29 7 12 12 20.71 7"></polyline>
                        <line x1="12" y1="22" x2="12" y2="12"></line>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">
                    API-integrasjon
                  </h3>
                  <p className="text-center text-muted-foreground">
                    Integrert med Vitec Next og Visma Core, hvor tekstfeltene
                    fylles ut direkte i fagsystemene
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="px-2">
                <div className="bg-background rounded-(--radius) border p-9 shadow-sm">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">
                    15-30 minutter
                  </h3>
                  <p className="text-center text-muted-foreground">
                    Prosper AI kan redusere tiden for et fullstendig
                    boligprospekt helt ned til 15-30 minutter
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
