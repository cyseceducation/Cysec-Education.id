"use client";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Play, ChevronRight, Search } from "lucide-react";
import Link from "next/link";
import { webinars } from "@/lib/data";
import { useState } from "react";
export default function WebinarsPage(){
  const [q,setQ]=useState("");
  const filtered=webinars.filter(w=>!q||w.title.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#08157D]/20 to-[#00f3ff]/20 border border-[#00f3ff]/30 rounded-full text-[#00f3ff] mb-6"><Calendar className="w-4 h-4"/><span className="text-sm font-mono">UPCOMING EVENTS</span></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Cybersecurity <span className="text-[#00f3ff]">Webinars</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Live and recorded cybersecurity webinars from industry experts</p>
        </motion.div>
        <div className="mb-10"><div className="relative max-w-2xl mx-auto"><Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search webinars..." className="w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg focus:border-[#00f3ff]/50 focus:ring-1 focus:ring-[#00f3ff]/50 text-white outline-none"/></div></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filtered.map((w,i)=>(
            <motion.div key={w.id} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:i*0.08}} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-[#00f3ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] group">
              <div className="flex items-center justify-between mb-4"><span className={`px-3 py-1 rounded-full text-xs font-bold ${w.type==="Live"?"bg-[#00f3ff]/20 text-[#00f3ff]":"bg-gray-800 text-gray-400"}`}>{w.type}</span><span className="px-3 py-1 rounded-full text-xs font-bold bg-black/30 text-gray-500">{w.level}</span></div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00f3ff]">{w.title}</h3>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-400"><User className="w-4 h-4 text-[#00f3ff]"/><span>{w.instructor}</span></div>
                <div className="flex items-center gap-3 text-sm text-gray-400"><Calendar className="w-4 h-4 text-[#00f3ff]"/><span>{w.date}</span></div>
                <div className="flex items-center gap-3 text-sm text-gray-400"><Clock className="w-4 h-4 text-[#00f3ff]"/><span>{w.time} ({w.duration})</span></div>
                <div className="flex items-center gap-3 text-sm text-gray-400"><Play className="w-4 h-4 text-[#00f3ff]"/><span>{w.attendees} attendees</span></div>
              </div>
              <Link href={`/webinars/${w.id}`} className="w-full py-3 bg-gradient-to-r from-[#08157D] to-[#00f3ff] text-white font-bold rounded hover:from-[#00f3ff] hover:to-[#08157D] transition-all flex items-center justify-center gap-2">Register Now <ChevronRight className="w-4 h-4"/></Link>
            </motion.div>
          ))}
        </div>
        {filtered.length===0 && <p className="text-center text-gray-500 mb-20">No webinars found.</p>}
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="bg-gradient-to-br from-[#08157D] to-[#0a0a0a] p-12 rounded-2xl border border-[#08157D]/30">
          <div className="text-center max-w-3xl mx-auto"><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want to Host a Webinar?</h2><p className="text-gray-300 mb-8 text-lg">Share your expertise with the CYSEC community.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><button className="px-8 py-4 bg-[#00f3ff] text-[#08157D] font-bold rounded hover:bg-white">Submit Proposal</button><button className="px-8 py-4 bg-black border border-[#00f3ff]/30 text-[#00f3ff] font-bold rounded hover:bg-[#00f3ff]/10">View Guidelines</button></div></div>
        </motion.div>
      </div>
    </div>
  );
}
