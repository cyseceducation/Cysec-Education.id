import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Learning Roadmaps",
  description:
    "Curated cybersecurity learning paths from beginner to expert — penetration testing, security analysis, and security architecture.",
  openGraph: {
    title: "Learning Roadmaps | CYSEC",
    description:
      "Curated cybersecurity learning paths from beginner to expert.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}