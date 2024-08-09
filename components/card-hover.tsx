import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16 bg-black">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Support SDG Goal 14: Life Below Water
      </h2>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Oceana",
    description:
      "An international advocacy organization focused on protecting and restoring the world's oceans.",
    link: "https://oceana.org",
  },
  {
    title: "Marine Conservation Society",
    description:
      "A UK-based charity dedicated to protecting our oceans and seas.",
    link: "https://mcsuk.org",
  },
  {
    title: "The Ocean Cleanup",
    description:
      "An innovative project aimed at removing plastic pollution from the ocean.",
    link: "https://theoceancleanup.com",
  },
  {
    title: "WWF - Oceans",
    description:
      "The World Wildlife Fund works to protect the ocean and its wildlife through various initiatives.",
    link: "https://worldwildlife.org/initiatives/oceans",
  },
  {
    title: "Blue Marine Foundation",
    description:
      "A UK-based charity dedicated to creating marine reserves and establishing sustainable fisheries.",
    link: "https://bluemarinefoundation.com",
  },
  {
    title: "Seacology",
    description:
      "An organization focused on preserving island environments and the oceans that surround them.",
    link: "https://seacology.org",
  },
];
