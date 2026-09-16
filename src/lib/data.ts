export const roadmaps = [
  { id: "1", title: "Junior Penetration Tester", description: "Start your journey in ethical hacking and security testing", level: "Beginner", modules: 12, estimatedTime: "6-8 months", color: "#00f3ff", longDesc: "Foundational path covering Linux basics, networking, OWASP Top 10, and hands-on labs. Perfect for beginners with zero experience." },
  { id: "2", title: "Security Analyst", description: "Learn threat detection, analysis, and incident response", level: "Intermediate", modules: 16, estimatedTime: "8-12 months", color: "#10b981", longDesc: "Blue-team focused: SIEM, SOC workflows, threat hunting, log analysis, and IR playbooks." },
  { id: "3", title: "Senior Security Architect", description: "Master advanced security design and implementation", level: "Advanced", modules: 20, estimatedTime: "12-18 months", color: "#f59e0b", longDesc: "Design secure architectures at scale — zero trust, cloud hardening, and enterprise governance." },
];

export const ebooks = [
  { id: "1", title: "Introduction to Penetration Testing", author: "John Doe", pages: 256, category: "Penetration Testing", downloads: 1234, level: "Beginner", image: "https://placehold.co/300x400/08157D/00f3ff?text=Penetration+Testing", desc: "Fundamentals of ethical hacking, recon, exploitation and reporting — with lab exercises." },
  { id: "2", title: "Advanced Network Security", author: "Jane Smith", pages: 312, category: "Network Security", downloads: 892, level: "Advanced", image: "https://placehold.co/300x400/08157D/00f3ff?text=Network+Security", desc: "Deep dive into IDS/IPS, segmentation, and encrypted traffic analysis." },
  { id: "3", title: "Web Application Security", author: "Alice Johnson", pages: 198, category: "Web Security", downloads: 1567, level: "Intermediate", image: "https://placehold.co/300x400/08157D/00f3ff?text=Web+Security", desc: "Secure SDLC, auth pitfalls, SSRF/XSS and modern WAF bypasses." },
  { id: "4", title: "Cloud Security Fundamentals", author: "Bob Wilson", pages: 289, category: "Cloud Security", downloads: 756, level: "Intermediate", image: "https://placehold.co/300x400/08157D/00f3ff?text=Cloud+Security", desc: "IAM, misconfiguration hunting, and cloud-native defense on AWS/Azure/GCP." },
];

export const webinars = [
  { id: "1", title: "Introduction to Ethical Hacking", instructor: "John Doe", date: "2026-09-20", time: "14:00 - 16:00", duration: "2 hours", attendees: 156, level: "Beginner", type: "Live" as const, desc: "Live demo: recon to shell with Q&A." },
  { id: "2", title: "Advanced Network Security", instructor: "Jane Smith", date: "2026-09-22", time: "10:00 - 12:00", duration: "2 hours", attendees: 89, level: "Intermediate", type: "Live" as const, desc: "Network threat modeling and defense." },
  { id: "3", title: "Web Application Security Best Practices", instructor: "Alice Johnson", date: "2026-09-25", time: "15:00 - 17:00", duration: "2 hours", attendees: 203, level: "Advanced", type: "Live" as const, desc: "Secure your apps against the OWASP Top 10." },
  { id: "4", title: "Introduction to Cybersecurity", instructor: "Bob Wilson", date: "2026-09-18", time: "13:00 - 15:00", duration: "2 hours", attendees: 312, level: "Beginner", type: "Recorded" as const, desc: "Recorded starter kit — available on demand." },
];

export const threads = [
  { id: "1", title: "Tips for passing OSCP exam?", author: "John Doe", authorRole: "Expert" as const, replies: 24, views: 1567, lastActivity: "2 hours ago", category: "Certifications", body: "Share your OSCP prep routine — labs, notes, and exam-day tips." },
  { id: "2", title: "Best resources for learning Cloud Security?", author: "Jane Smith", authorRole: "Member" as const, replies: 18, views: 892, lastActivity: "5 hours ago", category: "Learning Resources", body: "Looking for hands-on cloud labs beyond docs — any recommendations?" },
  { id: "3", title: "Incident response best practices", author: "Alice Johnson", authorRole: "Moderator" as const, replies: 42, views: 2341, lastActivity: "1 day ago", category: "Incident Response", body: "IR checklist discussion: containment, eradication, lessons learned." },
  { id: "4", title: "Network security monitoring tools", author: "Bob Wilson", authorRole: "Member" as const, replies: 15, views: 678, lastActivity: "2 days ago", category: "Tools & Software", body: "Compare Zeek, Suricata, Wazuh — what are you running in prod?" },
];

export const blogPosts = [
  { id: "1", title: "Introduction to Penetration Testing", excerpt: "Learn the fundamentals of ethical hacking and security testing in this comprehensive guide.", author: "John Doe", date: "2026-09-10", readTime: "8 min read", category: "Penetration Testing", image: "https://placehold.co/600x400/08157D/00f3ff?text=Penetration+Testing", body: "Full article: methodology, tools, and first lab walkthrough." },
  { id: "2", title: "Cybersecurity Threats in 2026", excerpt: "Stay ahead of the curve with the latest threat landscape analysis and mitigation strategies.", author: "Jane Smith", date: "2026-09-08", readTime: "6 min read", category: "Threat Analysis", image: "https://placehold.co/600x400/08157D/00f3ff?text=Threat+Analysis", body: "Ransomware 2.0, AI phishing, and supply-chain risks — what to watch." },
  { id: "3", title: "Web Application Security Best Practices", excerpt: "Essential security measures every developer should know to protect their applications.", author: "Alice Johnson", date: "2026-09-05", readTime: "10 min read", category: "Web Security", image: "https://placehold.co/600x400/08157D/00f3ff?text=Web+Security", body: "Headers, CSP, auth hardening, and secure coding patterns." },
];

export const webinarById = (id:string)=>webinars.find(w=>w.id===id);
export const ebookById = (id:string)=>ebooks.find(e=>e.id===id);
export const threadById = (id:string)=>threads.find(t=>t.id===id);
export const postById = (id:string)=>blogPosts.find(b=>b.id===id);
export const roadmapById = (id:string)=>roadmaps.find(r=>r.id===id);
