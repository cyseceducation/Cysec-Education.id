import { blogPosts, postById } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, User, Clock } from "lucide-react";
export function generateStaticParams(){ return blogPosts.map(b=>({id:b.id})); }
export default async function BlogDetail({params}:{params:Promise<{id:string}>}){
  const {id}=await params;
  const p=postById(id);
  if(!p) notFound();
  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#00f3ff] mb-8"><ArrowLeft className="w-4 h-4"/>Back to Blog</Link>
        <div className="rounded-xl overflow-hidden border border-gray-800 mb-8"><img src={p.image} alt={p.title} className="w-full h-64 md:h-80 object-cover"/></div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
          <span className="px-3 py-1 bg-[#08157D]/80 border border-[#00f3ff]/30 text-[#00f3ff] text-xs font-bold rounded-full">{p.category}</span>
          <h1 className="text-3xl font-bold text-white mt-4 mb-3">{p.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6"><span className="flex items-center gap-1"><User className="w-3 h-3"/>{p.author}</span><span className="flex items-center gap-1"><Clock className="w-3 h-3"/>{p.date} · {p.readTime}</span></div>
          <p className="text-gray-400 mb-2">{p.excerpt}</p>
          <p className="text-gray-300 leading-relaxed mt-6">{p.body}</p>
          <p className="text-gray-500 leading-relaxed mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a placeholder for the full article body — replace with CMS content when needed. Content stays styled 1:1 with original Tailwind sans.</p>
        </div>
      </div>
    </div>
  );
}
