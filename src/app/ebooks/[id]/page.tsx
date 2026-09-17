import { ebooks, ebookById } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, User, Clock, Download, BookOpen } from "lucide-react";
import type { Metadata } from "next";
export function generateStaticParams(){ return ebooks.map(e=>({id:e.id})); }
export async function generateMetadata({params}:{params:Promise<{id:string}>}):Promise<Metadata>{
  const {id}=await params;
  const e=ebookById(id);
  if(!e) return {};
  return {
    title: e.title,
    description: e.desc,
    alternates: { canonical: `/ebooks/${e.id}` },
    openGraph: { title: `${e.title} | CYSEC`, description: e.desc, images: [{ url: e.image, alt: e.title }] },
  };
}
export default async function EbookDetail({params}:{params:Promise<{id:string}>}){
  const {id}=await params;
  const e=ebookById(id);
  if(!e) notFound();
  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <Link href="/ebooks" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#00f3ff] mb-8"><ArrowLeft className="w-4 h-4"/>Back to Library</Link>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden border border-gray-800 bg-gray-900/50"><img src={e.image} alt={e.title} className="w-full object-cover"/></div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <span className="px-3 py-1 bg-[#08157D]/80 border border-[#00f3ff]/30 text-[#00f3ff] text-xs font-bold rounded-full">{e.category}</span>
            <h1 className="text-3xl font-bold text-white mt-4 mb-2">{e.title}</h1>
            <p className="text-gray-400 flex items-center gap-2 mb-4"><User className="w-4 h-4"/>{e.author} · {e.level}</p>
            <p className="text-gray-300 leading-relaxed mb-6">{e.desc}</p>
            <div className="flex gap-4 text-sm text-gray-500 mb-8"><span className="flex items-center gap-1"><Clock className="w-4 h-4"/>{e.pages} pages</span><span className="flex items-center gap-1"><Download className="w-4 h-4"/>{e.downloads} downloads</span></div>
            <button className="w-full py-4 bg-gradient-to-r from-[#08157D] to-[#00f3ff] text-white font-bold rounded hover:from-[#00f3ff] hover:to-[#08157D] transition-all flex items-center justify-center gap-2"><Download className="w-5 h-5"/>Download PDF</button>
            <p className="text-xs text-gray-500 text-center mt-3 flex items-center justify-center gap-1"><BookOpen className="w-3 h-3"/>Login required for download</p>
          </div>
        </div>
      </div>
    </div>
  );
}
