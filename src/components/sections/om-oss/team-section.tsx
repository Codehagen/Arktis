"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

const members = [
  {
    name: "Anders Johansen",
    role: "Medgründer - Daglig leder",
    avatar: "https://alt.tailus.io/images/team/member-one.webp",
    email: "anders@arktis.ai",
    phone: "+47 915 23 678",
    linkedin: "https://linkedin.com/in/andersjohansen",
  },
  {
    name: "Marte Svendsen",
    role: "Medgründer - Teknologidirektør",
    avatar: "https://alt.tailus.io/images/team/member-two.webp",
    email: "marte@arktis.ai",
    phone: "+47 922 45 789",
    linkedin: "https://linkedin.com/in/martesvendsen",
  },
  {
    name: "Jonas Berg",
    role: "Salgssjef",
    avatar: "https://alt.tailus.io/images/team/member-three.webp",
    email: "jonas@arktis.ai",
    phone: "+47 934 67 890",
    linkedin: "https://linkedin.com/in/jonasberg",
  },
  {
    name: "Sofie Larsen",
    role: "AI-utvikler",
    avatar: "https://alt.tailus.io/images/team/member-four.webp",
    email: "sofie@arktis.ai",
    phone: "+47 941 78 901",
    linkedin: "https://linkedin.com/in/sofielarsen",
  },
  {
    name: "Erik Hansen",
    role: "Dataingeniør",
    avatar: "https://alt.tailus.io/images/team/member-five.webp",
    email: "erik@arktis.ai",
    phone: "+47 957 89 012",
    linkedin: "https://linkedin.com/in/erikhansen",
  },
  {
    name: "Ingrid Olsen",
    role: "Prosjektleder",
    avatar: "https://alt.tailus.io/images/team/member-six.webp",
    email: "ingrid@arktis.ai",
    phone: "+47 968 90 123",
    linkedin: "https://linkedin.com/in/ingridolsen",
  },
];

export function TeamSection() {
  const [copiedItems, setCopiedItems] = useState<Record<string, boolean>>({});

  const copyToClipboard = async (text: string, itemKey: string) => {
    try {
      await navigator.clipboard.writeText(text);

      // Set this item as copied
      setCopiedItems((prev) => ({ ...prev, [itemKey]: true }));

      // Reset after 2 seconds
      setTimeout(() => {
        setCopiedItems((prev) => ({ ...prev, [itemKey]: false }));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-5xl border-t px-6">
        <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">
          Team
        </span>
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-2/5">
            <h2 className="text-3xl font-bold sm:text-4xl">Vårt drømmeteam</h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p>
              Vi samarbeider tett med kunden gjennom hele prosessen for å sikre
              at løsningene vi skaper passer perfekt til deres behov og
              utfordringer.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, idx) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-gray-900/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                <div className="relative aspect-h-1 aspect-w-1">
                  <img
                    className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                    src={member.avatar}
                    alt={`${member.name}, ${member.role}`}
                  />
                </div>

                <div className="p-4">
                  <div className="relative flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="mt-1 opacity-70 transition-opacity duration-300">
                        {member.role}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">{`_0${
                      idx + 1
                    }`}</span>
                  </div>

                  <div className="mt-2 space-y-1 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <button
                      className="flex w-full items-center justify-between text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded px-2 py-1 transition-colors"
                      onClick={() =>
                        copyToClipboard(member.email, `${member.name}-email`)
                      }
                    >
                      <div>
                        <span className="font-medium">E-post: </span>
                        <span className="hover:underline">{member.email}</span>
                      </div>
                      {copiedItems[`${member.name}-email`] ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 opacity-50" />
                      )}
                    </button>

                    <button
                      className="flex w-full items-center justify-between text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded px-2 py-1 transition-colors"
                      onClick={() =>
                        copyToClipboard(member.phone, `${member.name}-phone`)
                      }
                    >
                      <div>
                        <span className="font-medium">Telefon: </span>
                        <span className="hover:underline">{member.phone}</span>
                      </div>
                      {copiedItems[`${member.name}-phone`] ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 opacity-50" />
                      )}
                    </button>

                    <div className="pt-2">
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium hover:underline"
                      >
                        LinkedIn Profil
                        <svg
                          className="ml-1 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
