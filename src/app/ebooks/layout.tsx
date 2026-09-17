import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "eBook Library",
  description:
    "Access cybersecurity eBooks and technical documentation — penetration testing, network security, web security, cloud security, and incident response.",
  openGraph: {
    title: "eBook Library | CYSEC",
    description:
      "Access cybersecurity eBooks and technical documentation.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}