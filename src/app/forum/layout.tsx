import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Community Forum",
  description:
    "Discuss cybersecurity topics, share knowledge, and connect with the CYSEC community — certifications, tools, incident response, and more.",
  openGraph: {
    title: "Community Forum | CYSEC",
    description:
      "Discuss cybersecurity topics, share knowledge, and connect with the CYSEC community.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}