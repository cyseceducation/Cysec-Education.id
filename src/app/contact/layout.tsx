import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have questions about CYSEC, our learning programs, or the community? Get in touch with the CYSEC team.",
  openGraph: {
    title: "Contact Us | CYSEC",
    description: "Get in touch with the CYSEC team.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}