"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, LogIn, LogOut, FileText, Calendar, MessageSquare, Mail } from "lucide-react";
import { useAuth } from "@/lib/auth";

export default function Navbar(){
  const [isOpen,setIsOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  const pathname=usePathname();
  const router=useRouter();
  const {user,logout}=useAuth();
  useEffect(()=>{
    const h=()=>setScrolled(window.scrollY>20);
    window.addEventListener("scroll",h);
    return ()=>window.removeEventListener("scroll",h);
  },[]);
  const navLinks=[
    { name:"Home", path:"/" },
    { name:"Roadmap", path:"/roadmap" },
    { name:"Ebooks", path:"/ebooks" },
    { name:"Webinars", path:"/webinars" },
    { name:"Forum", path:"/forum" },
    { name:"Blog", path:"/blog" },
    { name:"Contact", path:"/contact" },
  ];
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled?"bg-black/80 backdrop-blur-md border-b border-cyan-500/10 shadow-lg":"bg-black border-b border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center group">
            <img src="/logo-cysec-sm.png" alt="CYSEC Logo" className="h-16 w-16 object-contain group-hover:scale-110 transition-transform duration-300" width={64} height={64} />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link=>(
              <Link key={link.name} href={link.path} className={`flex items-center gap-2 text-sm font-medium transition-colors hover:scale-105 transform duration-200 ${pathname===link.path?"text-[#00f3ff]":"text-gray-300 hover:text-cyan-400"}`}>{link.name}</Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            {!user ? (
              <>
                <Link href="/login" className="px-4 py-2 text-sm font-mono text-gray-300 hover:text-white">Login</Link>
                <Link href="/register" className="px-5 py-2 bg-gradient-to-r from-[#08157D] to-[#00f3ff] text-white font-mono font-medium rounded hover:from-[#00f3ff] hover:to-[#08157D] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] flex items-center gap-2">
                  <LogIn className="w-4 h-4"/>Sign Up</Link>
              </>
            ):(
              <>
                <Link href="/member" className="px-4 py-2 text-sm font-mono text-[#00f3ff] border border-[#00f3ff]/30 rounded hover:bg-[#00f3ff]/10">{user.name}</Link>
                <button onClick={()=>{logout(); router.push("/");}} className="px-4 py-2 text-sm font-mono text-gray-300 hover:text-white flex items-center gap-1"><LogOut className="w-4 h-4"/>Logout</button>
              </>
            )}
          </div>
          <button onClick={()=>setIsOpen(!isOpen)} className="md:hidden text-cyan-500 hover:text-cyan-400">
            {isOpen?<X className="w-6 h-6"/>:<Menu className="w-6 h-6"/>}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-black border-b border-cyan-500/20">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map(link=>(
              <Link key={link.name} href={link.path} onClick={()=>setIsOpen(false)} className={`flex items-center gap-3 text-base font-medium p-2 hover:bg-cyan-500/10 rounded ${pathname===link.path?"text-[#00f3ff]":"text-gray-300 hover:text-cyan-400"}`}>{link.name}</Link>
            ))}
            {!user ? (
              <>
                <Link href="/login" onClick={()=>setIsOpen(false)} className="mt-2 px-6 py-3 bg-gray-900 border border-gray-800 text-white font-mono font-medium rounded text-center">Login</Link>
                <Link href="/register" onClick={()=>setIsOpen(false)} className="px-6 py-3 bg-gradient-to-r from-[#08157D] to-[#00f3ff] text-white font-mono font-medium rounded text-center">Sign Up</Link>
              </>
            ):(
              <>
                <Link href="/member" onClick={()=>setIsOpen(false)} className="mt-2 px-6 py-3 bg-[#00f3ff]/10 border border-[#00f3ff]/30 text-[#00f3ff] font-mono rounded text-center">Dashboard — {user.name}</Link>
                <button onClick={()=>{setIsOpen(false); logout(); router.push("/");}} className="px-6 py-3 bg-black border border-gray-800 text-gray-300 rounded">Logout</button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
