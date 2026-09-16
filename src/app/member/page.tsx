"use client";
import { motion } from "framer-motion";
import { Shield, FileText, Calendar, MessageSquare, User, Clock, TrendingUp, Award, LogOut, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function MemberPage(){
  const {user,logout}=useAuth();
  const router=useRouter();
  useEffect(()=>{ if(user===null) { const s=typeof window!=="undefined"?localStorage.getItem("cysec_user"):null; if(!s) router.replace("/login"); } },[user,router]);
  if(!user) return <div className="min-h-screen bg-black grid place-items-center text-gray-500">Redirecting to login...</div>;
  const stats=[
    {label:"Modules Completed",value:"8",total:"12",icon:CheckCircle,color:"#00f3ff"},
    {label:"Hours Learned",value:"42",icon:Clock,color:"#10b981"},
    {label:"Rank",value:"Junior Hacker",icon:TrendingUp,color:"#f59e0b"},
    {label:"Certificates",value:"3",icon:Award,color:"#7c3aed"},
  ];
  const recentActivity=[
    {id:1,action:"Completed Introduction to Penetration Testing",time:"2 hours ago",icon:CheckCircle,type:"success"},
    {id:2,action:"Joined Security Analysis Webinar",time:"1 day ago",icon:Calendar,type:"info"},
    {id:3,action:"Posted in Forum: Web Security Tips",time:"2 days ago",icon:MessageSquare,type:"info"},
    {id:4,action:"Started Advanced Ethical Hacking",time:"3 days ago",icon:FileText,type:"warning"},
  ];
  const learningPath=[
    {id:1,title:"Introduction to Penetration Testing",status:"Completed",progress:100},
    {id:2,title:"Network Security Fundamentals",status:"Completed",progress:100},
    {id:3,title:"Web Application Security",status:"In Progress",progress:65,current:true},
    {id:4,title:"Cloud Security Fundamentals",status:"Pending",progress:0},
    {id:5,title:"Incident Response & Handling",status:"Pending",progress:0},
  ];
  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Welcome, <span className="text-[#00f3ff]">{user.name}</span></h1>
          <p className="text-gray-400">Member Dashboard — {user.email}</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.1}} className="col-span-1 lg:col-span-3 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat,i)=>(
                <motion.div key={i} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.15+i*0.08}} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:border-[#00f3ff]/30">
                  <div className="flex items-start justify-between mb-4"><stat.icon className="w-8 h-8" style={{color:stat.color}}/>{stat.total && <span className="text-sm text-gray-500 font-mono">{stat.total}</span>}</div>
                  <div className="text-3xl font-bold text-white mb-1" style={{color:stat.color}}>{stat.value}</div><div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.4}} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-gray-800 flex items-center justify-between"><h3 className="text-xl font-bold text-white flex items-center gap-3"><FileText className="w-6 h-6 text-[#00f3ff]"/>Your Learning Path</h3></div>
              <div className="divide-y divide-gray-800">{learningPath.map(m=>(
                <div key={m.id} className="p-6 hover:bg-black/30"><div className="flex items-center gap-4 mb-3"><div className={`w-3 h-3 rounded-full ${m.current||m.progress===100?"bg-[#00f3ff]":"bg-gray-700"}`}/><h4 className="text-white font-medium flex-1">{m.title}</h4><span className={`px-3 py-1 rounded-full text-xs font-bold ${m.progress===100?"bg-green-500/20 text-green-400":m.current?"bg-[#00f3ff]/20 text-[#00f3ff]":"bg-gray-800 text-gray-500"}`}>{m.status}</span></div><div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden"><motion.div initial={{width:0}} animate={{width:`${m.progress}%`}} transition={{duration:0.8,delay:0.4}} className={`h-full rounded-full ${m.progress===100?"bg-green-500":m.current?"bg-[#00f3ff]":"bg-gray-700"}`}/></div></div>
              ))}</div>
            </motion.div>
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.5}} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-gray-800"><h3 className="text-xl font-bold text-white flex items-center gap-3"><Clock className="w-6 h-6 text-[#00f3ff]"/>Recent Activity</h3></div>
              <div className="divide-y divide-gray-800">{recentActivity.map(a=>(
                <div key={a.id} className="p-6 hover:bg-black/30 flex items-start gap-4"><div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${a.type==="success"?"bg-green-500/20 text-green-400":"bg-[#00f3ff]/20 text-[#00f3ff]"}`}><a.icon className="w-5 h-5"/></div><div><p className="text-white mb-1">{a.action}</p><p className="text-sm text-gray-500">{a.time}</p></div></div>
              ))}</div>
            </motion.div>
          </motion.div>
          <motion.div initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{duration:0.6,delay:0.2}} className="col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-[#08157D] to-[#0a0a0a] p-8 rounded-xl border border-[#08157D]/30 text-center">
              <User className="w-20 h-20 text-[#00f3ff] mx-auto mb-4 rounded-full border-4 border-[#00f3ff]/20 p-4"/>
              <h3 className="text-xl font-bold text-white mb-2">{user.name}</h3><p className="text-[#00f3ff] mb-4 text-sm">{user.email}</p>
              <p className="text-gray-400 mb-6 text-sm">Junior Penetration Tester</p>
              <span className="inline-block px-3 py-1 bg-black/30 rounded-full border border-[#00f3ff]/20 text-xs text-gray-400 mb-6">Member ID: {user.email.slice(0,4).toUpperCase()}-001</span>
              <button onClick={()=>{logout(); router.push("/");}} className="w-full py-3 bg-white text-[#08157D] font-bold rounded hover:bg-gray-200 flex items-center justify-center gap-2"><LogOut className="w-4 h-4"/>Logout</button>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><MessageSquare className="w-5 h-5 text-[#00f3ff]"/>Quick Links</h3>
              <div className="space-y-3">{[{name:"My Profile",icon:User},{name:"Learning Path",icon:FileText},{name:"Certificates",icon:Award},{name:"Forum",icon:MessageSquare},{name:"Settings",icon:Shield}].map((link,i)=>(
                <Link key={i} href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#00f3ff]/10 text-gray-300 hover:text-[#00f3ff]"><link.icon className="w-5 h-5"/>{link.name}</Link>
              ))}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
