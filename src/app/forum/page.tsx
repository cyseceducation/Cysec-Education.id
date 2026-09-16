"use client";
import { motion } from "framer-motion";
import { MessageSquare, User, Clock, Search, ChevronRight } from "lucide-react";
import Link from "next/link";
import { threads } from "@/lib/data";
import { useState } from "react";
export default function ForumPage(){
  const [q,setQ]=useState("");
  const filtered=threads.filter(t=>!q||t.title.toLowerCase().includes(q.toLowerCase()));
  const categories=["All Discussions","Announcements","Learning Resources","Certifications","Tools & Software","Incident Response"];
  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#08157D]/20 to-[#00f3ff]/20 border border-[#00f3ff]/30 rounded-full text-[#00f3ff] mb-6"><MessageSquare className="w-4 h-4"/><span className="text-sm font-mono">COMMUNITY FORUM</span></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Community <span className="text-[#00f3ff]">Forum</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Discuss cybersecurity topics, share knowledge, and connect with the community</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <motion.div initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6}} className="col-span-1 space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl">
              <div className="relative mb-4"><Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search forums..." className="w-full pl-12 pr-4 py-3 bg-black border border-gray-800 rounded-lg focus:border-[#00f3ff]/50 text-white outline-none"/></div>
              <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
              <div className="space-y-2">{categories.map((c,i)=>(
                <div key={c} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#00f3ff]/10 transition-colors cursor-pointer group"><span className="text-gray-300 group-hover:text-[#00f3ff] text-sm">{c}</span>{i>0 && <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">{Math.floor(Math.random()*40+5)}</span>}</div>
              ))}</div>
            </div>
            <div className="bg-gradient-to-br from-[#08157D] to-[#0a0a0a] p-6 rounded-xl border border-[#08157D]/30 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Start a Discussion</h3><p className="text-gray-400 text-sm mb-4">Have a question or topic to share?</p>
              <Link href="/forum/1" className="w-full py-3 bg-[#00f3ff] text-[#08157D] font-bold rounded hover:bg-white transition-colors block">Create Thread</Link>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{duration:0.6}} className="col-span-1 lg:col-span-3 space-y-6">
            {filtered.map((t,i)=>(
              <motion.div key={t.id} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.4,delay:i*0.05}} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:border-[#00f3ff]/30 transition-all hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] group">
                <div className="flex items-center gap-2 mb-4"><span className="px-3 py-1 rounded-full text-xs font-bold bg-[#08157D]/20 text-[#00f3ff]">{t.category}</span>{t.authorRole==="Expert"&&<span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-400">Expert</span>}{t.authorRole==="Moderator"&&<span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400">Moderator</span>}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00f3ff]">{t.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-4"><span className="flex items-center gap-2"><User className="w-4 h-4 text-[#00f3ff]"/>{t.author}</span><span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#00f3ff]"/>{t.lastActivity}</span></div>
                  <div className="flex items-center gap-4"><span>{t.replies} replies</span><span>{t.views} views</span></div>
                </div>
                <Link href={`/forum/${t.id}`} className="mt-4 inline-flex items-center gap-2 text-[#00f3ff] font-medium hover:gap-3 transition-all">Read Thread <ChevronRight className="w-4 h-4"/></Link>
              </motion.div>
            ))}
            {filtered.length===0 && <p className="text-gray-500 text-center py-12">No threads.</p>}
            <div className="bg-gradient-to-br from-[#08157D] to-[#0a0a0a] p-8 rounded-2xl border border-[#08157D]/30 text-center"><h2 className="text-2xl font-bold text-white mb-4">Join the Discussion</h2><p className="text-gray-300 mb-6">Participate in conversations, share your knowledge.</p><Link href="/login" className="px-8 py-3 bg-[#00f3ff] text-[#08157D] font-bold rounded hover:bg-white inline-block">Log In to Participate</Link></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
