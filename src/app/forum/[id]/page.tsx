import { threads, threadById } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, User, Clock, MessageSquare } from "lucide-react";
export function generateStaticParams(){ return threads.map(t=>({id:t.id})); }
export default async function ThreadDetail({params}:{params:Promise<{id:string}>}){
  const {id}=await params;
  const t=threadById(id);
  if(!t) notFound();
  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/forum" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#00f3ff] mb-8"><ArrowLeft className="w-4 h-4"/>Back to Forum</Link>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
          <div className="flex items-center gap-2 mb-4"><span className="px-3 py-1 rounded-full text-xs font-bold bg-[#08157D]/20 text-[#00f3ff]">{t.category}</span><span className={`px-3 py-1 rounded-full text-xs font-bold ${t.authorRole==="Expert"?"bg-green-500/20 text-green-400":t.authorRole==="Moderator"?"bg-purple-500/20 text-purple-400":"bg-gray-800 text-gray-400"}`}>{t.authorRole}</span></div>
          <h1 className="text-3xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-gray-300 leading-relaxed mb-6">{t.body}</p>
          <div className="flex items-center gap-6 text-sm text-gray-400 border-t border-gray-800 pt-6">
            <span className="flex items-center gap-2"><User className="w-4 h-4 text-[#00f3ff]"/>{t.author}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#00f3ff]"/>{t.lastActivity}</span>
            <span className="flex items-center gap-2"><MessageSquare className="w-4 h-4 text-[#00f3ff]"/>{t.replies} replies · {t.views} views</span>
          </div>
          <div className="mt-8 p-4 bg-black/30 border border-gray-800 rounded-lg text-sm text-gray-500">Login to reply — <Link href="/login" className="text-[#00f3ff] hover:underline">Login</Link> · <Link href="/register" className="text-[#00f3ff] hover:underline">Sign up</Link></div>
        </div>
      </div>
    </div>
  );
}
