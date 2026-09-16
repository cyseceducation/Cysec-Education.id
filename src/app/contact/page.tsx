"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, User, Send, CheckCircle } from "lucide-react";
export default function ContactPage(){
  const [form,setForm]=useState({name:"",email:"",subject:"",message:""});
  const [submitting,setSubmitting]=useState(false);
  const [success,setSuccess]=useState(false);
  const submit=(e:React.FormEvent)=>{
    e.preventDefault(); setSubmitting(true);
    setTimeout(()=>{ setSubmitting(false); setSuccess(true); setForm({name:"",email:"",subject:"",message:""}); setTimeout(()=>setSuccess(false),3000); },1200);
  };
  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#08157D]/20 to-[#00f3ff]/20 border border-[#00f3ff]/30 rounded-full text-[#00f3ff] mb-6"><Mail className="w-4 h-4"/><span className="text-sm font-mono">GET IN TOUCH</span></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Contact <span className="text-[#00f3ff]">Us</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Have questions? We&apos;d love to hear from you.</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6}} className="space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-xl hover:border-[#00f3ff]/30 transition-all">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><Mail className="w-6 h-6 text-[#00f3ff]"/>Send Message</h3>
              <form onSubmit={submit} className="space-y-6">
                <div className="space-y-2"><label className="text-sm font-medium text-gray-400">Name</label><div className="relative"><User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"/><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required placeholder="Your name" className="w-full pl-12 pr-4 py-3 bg-black border border-gray-800 rounded-lg focus:border-[#00f3ff]/50 text-white outline-none"/></div></div>
                <div className="space-y-2"><label className="text-sm font-medium text-gray-400">Email</label><input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required placeholder="your@email.com" className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:border-[#00f3ff]/50 text-white outline-none"/></div>
                <div className="space-y-2"><label className="text-sm font-medium text-gray-400">Subject</label><input value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} required placeholder="How can we help?" className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:border-[#00f3ff]/50 text-white outline-none"/></div>
                <div className="space-y-2"><label className="text-sm font-medium text-gray-400">Message</label><textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required rows={5} placeholder="Your message..." className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:border-[#00f3ff]/50 text-white outline-none resize-none"/></div>
                <button type="submit" disabled={submitting} className={`w-full py-4 bg-gradient-to-r from-[#08157D] to-[#00f3ff] text-white font-bold rounded hover:from-[#00f3ff] hover:to-[#08157D] transition-all flex items-center justify-center gap-2 ${submitting?"opacity-50":""}`}>
                  {submitting?"Sending...":success?<><CheckCircle className="w-5 h-5"/>Message Sent!</> :<>Send Message <Send className="w-5 h-5"/></>}
                </button>
              </form>
            </div>
          </motion.div>
          <div className="space-y-8">
            <motion.div initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{duration:0.6}} className="bg-gradient-to-br from-[#08157D] to-[#0a0a0a] p-12 rounded-2xl border border-[#08157D]/30">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4"><div className="w-12 h-12 rounded-lg bg-black/30 flex items-center justify-center border border-[#00f3ff]/20 flex-shrink-0"><MapPin className="w-6 h-6 text-[#00f3ff]"/></div><div><h4 className="text-white font-medium mb-1">Our Location</h4><p className="text-gray-400 text-sm">Cybersecurity District<br/>Jakarta, Indonesia 12345</p></div></div>
                <div className="flex items-start gap-4"><div className="w-12 h-12 rounded-lg bg-black/30 flex items-center justify-center border border-[#00f3ff]/20 flex-shrink-0"><Mail className="w-6 h-6 text-[#00f3ff]"/></div><div><h4 className="text-white font-medium mb-1">Email Us</h4><p className="text-gray-400 text-sm">contact@cysec.com</p><p className="text-gray-400 text-sm">support@cysec.com</p></div></div>
                <div className="flex items-start gap-4"><div className="w-12 h-12 rounded-lg bg-black/30 flex items-center justify-center border border-[#00f3ff]/20 flex-shrink-0"><Phone className="w-6 h-6 text-[#00f3ff]"/></div><div><h4 className="text-white font-medium mb-1">Call Us</h4><p className="text-gray-400 text-sm">+62 21 1234 5678</p><p className="text-gray-400 text-sm">+62 812 3456 7890</p></div></div>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{duration:0.6,delay:0.15}} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Office Hours</h3>
              <div className="space-y-3">
                {[
                  {day:"Monday - Friday",time:"09:00 - 18:00"},
                  {day:"Saturday",time:"10:00 - 16:00"},
                  {day:"Sunday",time:"Closed"},
                ].map(item=>(
                  <div key={item.day} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0"><span className="text-gray-300">{item.day}</span><span className="text-[#00f3ff] font-mono">{item.time}</span></div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
