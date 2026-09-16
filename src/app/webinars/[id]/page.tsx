import { webinars, webinarById } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, Play } from "lucide-react";
export function generateStaticParams(){ return webinars.map(w=>({id:w.id})); }
export default async function WebinarDetail({params}:{params:Promise<{id:string}>}){
  const {id}=await params;
  const w=webinarById(id);
  if(!w) notFound();
  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/webinars" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#00f3ff] mb-8"><ArrowLeft className="w-4 h-4"/>Back to Webinars</Link>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${w.type==="Live"?"bg-[#00f3ff]/20 text-[#00f3ff]":"bg-gray-800 text-gray-400"}`}>{w.type}</span>
          <h1 className="text-3xl font-bold text-white mt-4 mb-3">{w.title}</h1>
          <p className="text-gray-400 mb-6">{w.desc}</p>
          <div className="space-y-3 mb-8 text-sm text-gray-300">
            <div className="flex items-center gap-3"><User className="w-4 h-4 text-[#00f3ff]"/>{w.instructor}</div>
            <div className="flex items-center gap-3"><Calendar className="w-4 h-4 text-[#00f3ff]"/>{w.date}</div>
            <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-[#00f3ff]"/>{w.time} · {w.duration}</div>
            <div className="flex items-center gap-3"><Play className="w-4 h-4 text-[#00f3ff]"/>{w.attendees} registered</div>
          </div>
          <Link href="/register" className="w-full py-4 bg-gradient-to-r from-[#08157D] to-[#00f3ff] text-white font-bold rounded flex items-center justify-center hover:from-[#00f3ff] hover:to-[#08157D]">Register — Free</Link>
        </div>
      </div>
    </div>
  );
}
