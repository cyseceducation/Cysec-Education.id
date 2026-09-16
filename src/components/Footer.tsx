import Link from "next/link";
import { Shield, Mail, MapPin, Phone } from "lucide-react";
export default function Footer(){
  return (
    <footer className="bg-black border-t border-[#00f3ff]/10 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#00f3ff]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"/>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#08157D]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"/>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo-cysec.png" alt="CYSEC Logo" className="h-10 w-10 object-contain"/>
              <span className="text-2xl font-mono font-bold text-white">CYSEC</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">Your premier destination for cybersecurity education, community, and growth. Join thousands of security professionals and enthusiasts.</p>
            <div className="flex items-center gap-4 pt-4">
              {[
                {label:"X",char:"𝕏"},
                {label:"GH",char:"GH"},
                {label:"IN",char:"IN"},
                {label:"FB",char:"FB"},
              ].map((s)=>(
                <a key={s.label} href="#" aria-label={s.label} className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#00f3ff] hover:border-[#00f3ff]/50 hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all duration-300 text-xs font-mono font-bold">
                  {s.char}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2"><Shield className="w-5 h-5 text-[#00f3ff]"/>Resources</h4>
            <ul className="space-y-3">
              {[
                {name:"Learning Roadmaps",path:"/roadmap"},
                {name:"Ebook Library",path:"/ebooks"},
                {name:"Webinars",path:"/webinars"},
                {name:"Community Forum",path:"/forum"},
                {name:"Blog",path:"/blog"},
              ].map(item=>(
                <li key={item.name}><Link href={item.path} className="text-gray-400 hover:text-[#00f3ff] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-[#00f3ff]"/><span>{item.name}</span></Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2"><Mail className="w-5 h-5 text-[#00f3ff]"/>Quick Links</h4>
            <ul className="space-y-3">
              {[
                {name:"About Us",path:"/"},
                {name:"Membership",path:"/member"},
                {name:"Contact",path:"/contact"},
                {name:"Privacy Policy",path:"/"},
                {name:"Terms",path:"/"},
              ].map(item=>(
                <li key={item.name}><Link href={item.path} className="text-gray-400 hover:text-[#00f3ff] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-[#00f3ff]"/><span>{item.name}</span></Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2"><MapPin className="w-5 h-5 text-[#00f3ff]"/>Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400"><MapPin className="w-5 h-5 text-[#00f3ff] mt-0.5 flex-shrink-0"/><span>Cybersecurity District<br/>Jakarta, Indonesia 12345</span></li>
              <li className="flex items-center gap-3 text-gray-400"><Mail className="w-5 h-5 text-[#00f3ff] flex-shrink-0"/><span>contact@cysec.com</span></li>
              <li className="flex items-center gap-3 text-gray-400"><Phone className="w-5 h-5 text-[#00f3ff] flex-shrink-0"/><span>+62 21 1234 5678</span></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} CYSEC. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#00f3ff]">Privacy</Link>
            <Link href="/" className="hover:text-[#00f3ff]">Terms</Link>
            <Link href="/" className="hover:text-[#00f3ff]">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
