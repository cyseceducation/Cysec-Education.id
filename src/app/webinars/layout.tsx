import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cyber Security Webinars",
  description:
    "Live and recorded cybersecurity webinars from industry experts. Register free and level up your security skills.",
  openGraph: {
    title: "Cyber Security Webinars | CYSEC",
    description:
      "Live and recorded cybersecurity webinars from industry experts.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}