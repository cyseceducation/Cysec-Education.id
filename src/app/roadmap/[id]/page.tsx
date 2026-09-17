import { roadmaps, roadmapById } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, CheckCircle, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
export function generateStaticParams(){ return roadmaps.map(r=>({id:r.id})); }
export async function generateMetadata({params}:{params:Promise<{id:string}>}):Promise<Metadata>{
  const {id}=await params;
  const r=roadmapById(id);
  if(!r) return {};
  return {
    title: `${r.title} Roadmap`,
    description: r.longDesc,
    alternates: { canonical: `/roadmap/${r.id}` },
    openGraph: { title: `${r.title} Roadmap | CYSEC`, description: r.longDesc },
  };
}
export default async function RoadmapDetail({params}:{params:Promise<{id:string}>}){
  const {id}=await params;
  const r=roadmapById(id);
  if(!r) notFound();
  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/roadmap" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#00f3ff] mb-8"><ArrowLeft className="w-4 h-4"/>Back to Roadmaps</Link>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
          <span className="px-3 py-1 rounded-full text-xs font-bold" style={{backgroundColor:`${r.color}20`,color:r.color}}>{r.level}</span>
          <h1 className="text-4xl font-bold text-white mt-4 mb-3">{r.title}</h1>
          <p className="text-gray-400 mb-6">{r.description}</p>
          <p className="text-gray-300 mb-8 leading-relaxed">{r.longDesc}</p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-black/30 rounded-lg p-4 text-center border border-gray-800"><Clock className="w-6 h-6 text-[#00f3ff] mx-auto mb-2"/><div className="text-white font-bold">{r.estimatedTime}</div><div className="text-xs text-gray-500">Estimated time</div></div>
            <div className="bg-black/30 rounded-lg p-4 text-center border border-gray-800"><CheckCircle className="w-6 h-6 text-[#00f3ff] mx-auto mb-2"/><div className="text-white font-bold">{r.modules} Modules</div><div className="text-xs text-gray-500">Hands-on labs</div></div>
          </div>
          <Link href="/register" className="w-full py-4 bg-gradient-to-r from-[#08157D] to-[#00f3ff] text-white font-bold rounded flex items-center justify-center hover:from-[#00f3ff] hover:to-[#08157D] transition-all">Enroll — Free</Link>
        </div>
      </div>
    </div>
  );
}
