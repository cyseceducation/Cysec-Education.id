"use client";
import { motion } from "framer-motion";
import { FileText, User, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
export default function BlogPage(){
  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#08157D]/20 to-[#00f3ff]/20 border border-[#00f3ff]/30 rounded-full text-[#00f3ff] mb-6"><FileText className="w-4 h-4"/><span className="text-sm font-mono">LATEST ARTICLES</span></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Cybersecurity <span className="text-[#00f3ff]">Blog</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Expert insights, tutorials, and the latest news from the cybersecurity community</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {blogPosts.map((p,i)=>(
            <motion.div key={p.id} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:i*0.08}} className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-[#00f3ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)]">
              <div className="relative overflow-hidden h-48"><div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"/><img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/><div className="absolute top-4 left-4 z-20"><span className="px-3 py-1 bg-[#08157D]/80 backdrop-blur-sm border border-[#00f3ff]/30 text-[#00f3ff] text-xs font-bold rounded-full">{p.category}</span></div></div>
              <div className="p-6"><div className="flex items-center gap-4 text-sm text-gray-500 mb-4"><span className="flex items-center gap-1"><User className="w-3 h-3"/>{p.author}</span><span className="flex items-center gap-1"><Clock className="w-3 h-3"/>{p.readTime}</span></div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00f3ff]">{p.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-2">{p.excerpt}</p>
                <Link href={`/blog/${p.id}`} className="flex items-center gap-2 text-[#00f3ff] font-medium hover:gap-3 transition-all">Read More <ChevronRight className="w-4 h-4"/></Link>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="bg-gradient-to-br from-[#08157D] to-[#0a0a0a] p-12 rounded-2xl border border-[#08157D]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00f3ff]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"/>
          <div className="relative z-10 text-center max-w-3xl mx-auto"><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want to Contribute?</h2><p className="text-gray-300 mb-8 text-lg">Share your knowledge with the community. Submit your articles, tutorials, and security research.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><button className="px-8 py-4 bg-[#00f3ff] text-[#08157D] font-bold rounded hover:bg-white flex items-center gap-2">Submit Article</button><button className="px-8 py-4 bg-black border border-[#00f3ff]/30 text-[#00f3ff] font-bold rounded hover:bg-[#00f3ff]/10">Review Guidelines</button></div></div>
        </motion.div>
      </div>
    </div>
  );
}
