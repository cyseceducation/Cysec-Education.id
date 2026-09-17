import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cyber Security Blog",
  description:
    "Expert insights, tutorials, and the latest news from the cybersecurity community — threats, tools, and hands-on guides.",
  openGraph: {
    title: "Cyber Security Blog | CYSEC",
    description:
      "Expert insights, tutorials, and the latest news from the cybersecurity community.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}