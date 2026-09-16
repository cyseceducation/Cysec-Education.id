"use client";
import { motion } from "framer-motion";
import { FileText, CheckCircle, Lock, Unlock, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { roadmaps } from "@/lib/data";
export default function RoadmapPage(){
  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#08157D]/20 to-[#00f3ff]/20 border border-[#00f3ff]/30 rounded-full text-[#00f3ff] mb-6">
            <FileText className="w-4 h-4"/><span className="text-sm font-mono">LEARNING PATHS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Learning <span className="text-[#00f3ff]">Roadmap</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Curated cybersecurity learning paths from beginner to expert level</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {roadmaps.map((r,i)=>(
            <motion.div key={r.id} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:i*0.1}} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-[#00f3ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] group">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#08157D]/20 to-[#00f3ff]/10 group-hover:scale-110 transition-transform duration-300" style={{border:`1px solid ${r.color}20`}}>
                  {r.level==="Beginner"?<Lock className="w-7 h-7" style={{color:r.color}}/>:r.level==="Intermediate"?<Unlock className="w-7 h-7" style={{color:r.color}}/>:<CheckCircle className="w-7 h-7" style={{color:r.color}}/>}
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold" style={{backgroundColor:`${r.color}20`,color:r.color}}>{r.level}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00f3ff] transition-colors">{r.title}</h3>
              <p className="text-gray-400 mb-6">{r.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/30 rounded-lg p-3 text-center border border-gray-800"><Clock className="w-5 h-5 text-[#00f3ff] mx-auto mb-1"/><div className="text-sm text-gray-300 font-medium">{r.estimatedTime}</div><div className="text-xs text-gray-500">Est. Time</div></div>
                <div className="bg-black/30 rounded-lg p-3 text-center border border-gray-800"><CheckCircle className="w-5 h-5 text-[#00f3ff] mx-auto mb-1"/><div className="text-sm text-gray-300 font-medium">{r.modules}</div><div className="text-xs text-gray-500">Modules</div></div>
              </div>
              <Link href={`/roadmap/${r.id}`} className="w-full py-3 bg-gradient-to-r from-[#08157D] to-[#00f3ff] text-white font-bold rounded hover:from-[#00f3ff] hover:to-[#08157D] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] flex items-center justify-center gap-2">View Roadmap <ChevronRight className="w-4 h-4"/></Link>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="bg-gradient-to-br from-[#08157D] to-[#0a0a0a] p-12 rounded-2xl border border-[#08157D]/30">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {step:"1",title:"Choose Your Path",desc:"Select from multiple cybersecurity disciplines"},
              {step:"2",title:"Complete Modules",desc:"Work through hands-on labs and challenges"},
              {step:"3",title:"Earn Certifications",desc:"Demonstrate your skills with verifiable badges"},
              {step:"4",title:"Join Community",desc:"Connect with peers and mentors"},
            ].map((item,i)=>(
              <div key={i} className="relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#08157D] to-[#00f3ff] flex items-center justify-center shadow-lg z-10"><span className="text-2xl font-bold text-white">{item.step}</span></div>
                <div className="pt-8 text-center mt-8"><h3 className="text-xl font-bold text-white mb-2">{item.title}</h3><p className="text-gray-400 text-sm">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
