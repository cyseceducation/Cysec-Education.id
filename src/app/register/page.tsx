"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { UserPlus, Mail, Lock, User, Shield } from "lucide-react";
import { useAuth } from "@/lib/auth";
export default function RegisterPage(){
  const {register,user}=useAuth();
  const router=useRouter();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [confirm,setConfirm]=useState("");
  const [err,setErr]=useState("");
  if(user) { router.replace("/member"); return null; }
  const submit=(e:React.FormEvent)=>{
    e.preventDefault(); setErr("");
    if(pass!==confirm){ setErr("Konfirmasi password tidak cocok"); return; }
    const msg=register(name,email,pass);
    if(msg) setErr(msg); else router.push("/member");
  };
  return (
    <div className="min-h-[calc(100vh-5rem)] bg-black py-20 px-4 flex items-center justify-center">
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#08157D]/20 to-[#00f3ff]/20 border border-[#00f3ff]/30 rounded-full text-[#00f3ff] mb-4"><Shield className="w-4 h-4"/><span className="text-xs font-mono">JOIN CYSEC</span></div>
          <h1 className="text-4xl font-bold text-white mb-2">Create account</h1>
          <p className="text-gray-400">Sign up — gratis, langsung akses member portal</p>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
          <form onSubmit={submit} className="space-y-5">
            <div className="space-y-2"><label className="text-sm text-gray-400">Full Name</label><div className="relative"><User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"/><input value={name} onChange={e=>setName(e.target.value)} required placeholder="Budi Hacker" className="w-full pl-12 pr-4 py-3 bg-black border border-gray-800 rounded-lg focus:border-[#00f3ff]/50 text-white outline-none"/></div></div>
            <div className="space-y-2"><label className="text-sm text-gray-400">Email</label><div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"/><input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="you@cysec.id" className="w-full pl-12 pr-4 py-3 bg-black border border-gray-800 rounded-lg focus:border-[#00f3ff]/50 text-white outline-none"/></div></div>
            <div className="space-y-2"><label className="text-sm text-gray-400">Password (min 6)</label><div className="relative"><Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"/><input type="password" value={pass} onChange={e=>setPass(e.target.value)} required placeholder="••••••••" className="w-full pl-12 pr-4 py-3 bg-black border border-gray-800 rounded-lg focus:border-[#00f3ff]/50 text-white outline-none"/></div></div>
            <div className="space-y-2"><label className="text-sm text-gray-400">Confirm Password</label><div className="relative"><Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"/><input type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} required placeholder="••••••••" className="w-full pl-12 pr-4 py-3 bg-black border border-gray-800 rounded-lg focus:border-[#00f3ff]/50 text-white outline-none"/></div></div>
            {err && <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">{err}</p>}
            <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#08157D] to-[#00f3ff] text-white font-bold rounded hover:from-[#00f3ff] hover:to-[#08157D] transition-all flex items-center justify-center gap-2"><UserPlus className="w-5 h-5"/>Sign Up</button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-6">Sudah punya akun? <Link href="/login" className="text-[#00f3ff] hover:underline">Login</Link></p>
        </div>
      </motion.div>
    </div>
  );
}
