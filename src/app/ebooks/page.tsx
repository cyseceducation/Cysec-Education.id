"use client";
import { motion } from "framer-motion";
import { BookOpen, Download, Clock, User, Search } from "lucide-react";
import Link from "next/link";
import { ebooks } from "@/lib/data";
import { useState } from "react";
export default function EbooksPage(){
  const [q,setQ]=useState("");
  const [cat,setCat]=useState("All");
  const cats=["All","Penetration Testing","Network Security","Web Security","Cloud Security","Incident Response"];
  const filtered=ebooks.filter(e=>{
    const mCat=cat==="All"||e.category===cat;
    const mQ=!q||e.title.toLowerCase().includes(q.toLowerCase())||e.author.toLowerCase().includes(q.toLowerCase());
    return mCat&&mQ;
  });
  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#08157D]/20 to-[#00f3ff]/20 border border-[#00f3ff]/30 rounded-full text-[#00f3ff] mb-6"><BookOpen className="w-4 h-4"/><span className="text-sm font-mono">RESOURCE LIBRARY</span></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">eBook <span className="text-[#00f3ff]">Library</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Access hundreds of cybersecurity eBooks and technical documentation</p>
        </motion.div>
        <div className="mb-10 overflow-x-auto pb-2"><div className="flex gap-2 min-w-max mx-auto max-w-3xl">{cats.map(c=>(
          <button key={c} onClick={()=>setCat(c)} className={`px-4 py-2 rounded-lg border text-sm transition-all ${cat===c?"bg-[#00f3ff] text-black border-[#00f3ff]":"bg-gray-900/50 backdrop-blur-sm border-gray-800 text-gray-400 hover:text-[#00f3ff] hover:border-[#00f3ff]/30"}`}>{c}</button>
        ))}</div></div>
        <div className="mb-10"><div className="relative max-w-2xl mx-auto"><Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search eBooks..." className="w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg focus:border-[#00f3ff]/50 focus:ring-1 focus:ring-[#00f3ff]/50 text-white outline-none"/></div></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {filtered.map((e,i)=>(
            <motion.div key={e.id} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.05*i}} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-[#00f3ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] group">
              <div className="h-48 overflow-hidden relative"><img src={e.image} alt={e.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/><div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"><span className="px-2 py-1 bg-[#08157D]/80 backdrop-blur-sm border border-[#00f3ff]/30 text-[#00f3ff] text-xs font-bold rounded">{e.category}</span></div></div>
              <div className="p-6"><h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00f3ff] line-clamp-2">{e.title}</h3><p className="text-gray-400 text-sm mb-4 flex items-center gap-2"><User className="w-3 h-3"/>{e.author}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4"><span className="flex items-center gap-1"><Clock className="w-3 h-3"/>{e.pages} pages</span><span className="flex items-center gap-1"><Download className="w-3 h-3"/>{e.downloads}</span></div>
                <Link href={`/ebooks/${e.id}`} className="w-full py-3 bg-gradient-to-r from-[#08157D] to-[#00f3ff] text-white font-bold rounded hover:from-[#00f3ff] hover:to-[#08157D] transition-all flex items-center justify-center gap-2">View Detail <Download className="w-4 h-4"/></Link>
              </div>
            </motion.div>
          ))}
        </div>
        {filtered.length===0 && <p className="text-center text-gray-500 mb-20">No eBooks found.</p>}
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="bg-gradient-to-br from-[#08157D] to-[#0a0a0a] p-12 rounded-2xl border border-[#08157D]/30">
          <div className="text-center max-w-3xl mx-auto"><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Have an eBook to Share?</h2><p className="text-gray-300 mb-8 text-lg">Contribute to the community by sharing your knowledge.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><button className="px-8 py-4 bg-[#00f3ff] text-[#08157D] font-bold rounded hover:bg-white transition-colors">Submit eBook</button><button className="px-8 py-4 bg-black border border-[#00f3ff]/30 text-[#00f3ff] font-bold rounded hover:bg-[#00f3ff]/10">Review Guidelines</button></div></div>
        </motion.div>
      </div>
    </div>
  );
}
