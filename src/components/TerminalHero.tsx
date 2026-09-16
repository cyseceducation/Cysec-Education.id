"use client";
import { motion } from "framer-motion";
import { ArrowDown, Terminal, Shield, Code, Users } from "lucide-react";
import Link from "next/link";
export default function TerminalHero(){
  return (
    <div className="min-h-[calc(100vh-5rem)] bg-black flex items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_,i)=>(
          <div key={i} className="absolute text-green-500/20 font-mono text-sm md:text-base select-none matrix-char" style={{left:`${(i*47)%100}%`,top:`${(i*31)%100}%`,animationDelay:`${(i%5)}s`,animationDuration:`${8+(i%5)}s`}}>
            {String.fromCharCode(0x30a0 + (i*7)%96)}
          </div>
        ))}
      </div>
      <div className="max-w-7xl w-full z-10 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#08157D]/20 to-[#00f3ff]/20 border border-[#00f3ff]/30 rounded-full text-[#00f3ff] mb-6">
                <Terminal className="w-4 h-4"/><span className="text-sm font-mono">SECURE. CONNECT. LEARN.</span>
              </div>
            </motion.div>
            <motion.h1 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.2}} className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Master the Art of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] to-[#08157D]">Cybersecurity</span>
            </motion.h1>
            <motion.p initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.4}} className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
              Join the premier cybersecurity community. Learn from experts, track your progress, and stay ahead of emerging threats.
            </motion.p>
            <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.6}} className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Link href="/roadmap" className="px-8 py-4 bg-gradient-to-r from-[#08157D] to-[#00f3ff] text-white font-mono font-bold rounded hover:from-[#00f3ff] hover:to-[#08157D] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] flex items-center gap-3 group">Start Learning <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform"/></Link>
              <Link href="/contact" className="px-8 py-4 bg-black border border-[#00f3ff]/30 text-[#00f3ff] font-mono font-bold rounded hover:bg-[#00f3ff]/10 transition-all duration-300 hover:border-[#00f3ff]/60">Join Community</Link>
            </motion.div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6,delay:0.8}} className="hidden md:flex items-center gap-8 mt-8">
              <div className="text-center"><div className="text-3xl font-bold text-[#00f3ff]">500+</div><div className="text-sm text-gray-500">Members</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-[#00f3ff]">50+</div><div className="text-sm text-gray-500">Resources</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-[#00f3ff]">24/7</div><div className="text-sm text-gray-500">Support</div></div>
            </motion.div>
          </div>
          <motion.div initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{duration:0.6,delay:0.4}} className="flex-1 w-full max-w-xl">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#08157D] to-[#00f3ff] rounded-lg blur-2xl opacity-30 pulse-glow"/>
              <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-lg overflow-hidden border border-[#00f3ff]/20 shadow-[0_0_40px_rgba(0,243,255,0.2)]">
                <div className="bg-gray-800/50 px-4 py-3 border-b border-gray-700 flex items-center gap-2">
                  <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500/50"/><div className="w-3 h-3 rounded-full bg-yellow-500/50"/><div className="w-3 h-3 rounded-full bg-green-500/50"/></div>
                  <span className="text-gray-400 text-sm ml-2 font-mono">cysec@terminal:~</span>
                </div>
                <div className="p-6 font-mono text-sm md:text-base space-y-3">
                  <div className="flex items-start gap-3"><Shield className="w-6 h-6 text-[#00f3ff] mt-1 flex-shrink-0"/><div><p className="text-gray-300">Welcome to CYSEC v2.0</p><p className="text-gray-500 text-sm mt-1">Your cybersecurity journey begins here</p></div></div>
                  <div className="flex items-start gap-3"><Code className="w-6 h-6 text-[#00f3ff] mt-1 flex-shrink-0"/><div><p className="text-gray-300">Access real-world labs</p><p className="text-gray-500 text-sm mt-1">Practice skills in safe environments</p></div></div>
                  <div className="flex items-start gap-3"><Users className="w-6 h-6 text-[#00f3ff] mt-1 flex-shrink-0"/><div><p className="text-gray-300">Connect with experts</p><p className="text-gray-500 text-sm mt-1">Learn from industry professionals</p></div></div>
                  <div className="mt-4 animate-pulse text-[#00f3ff]">_</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}} className="absolute -bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400"/>
        </motion.div>
      </div>
    </div>
  );
}
