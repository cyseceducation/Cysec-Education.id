"use client";
import { motion } from "framer-motion";
export default function GlowEffect(){
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div animate={{x:[0,50,0],y:[0,30,0]}} transition={{duration:20,ease:"easeInOut",repeat:Infinity}} className="absolute top-0 left-1/4 w-96 h-96 bg-[#00f3ff]/10 rounded-full blur-[100px]"/>
      <motion.div animate={{x:[0,-50,0],y:[0,-30,0]}} transition={{duration:25,ease:"easeInOut",repeat:Infinity}} className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#08157D]/20 rounded-full blur-[100px]"/>
      <motion.div animate={{scale:[1,1.2,1],opacity:[0.1,0.15,0.1]}} transition={{duration:30,ease:"easeInOut",repeat:Infinity}} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#08157D] to-[#00f3ff]/5 rounded-full blur-[120px]"/>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"/>
    </div>
  );
}
