"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
type User = { name:string; email:string; password:string };
type AuthUser = { name:string; email:string };
type Ctx = { user:AuthUser|null; login:(e:string,p:string)=>string|null; register:(n:string,e:string,p:string)=>string|null; logout:()=>void };
const AuthCtx = createContext<Ctx>({ user:null, login:()=>null, register:()=>null, logout:()=>{} });
export function AuthProvider({children}:{children:ReactNode}){
  const [user,setUser]=useState<AuthUser|null>(null);
  useEffect(()=>{
    try{ const s=localStorage.getItem("cysec_user"); if(s) setUser(JSON.parse(s)); }catch{}
  },[]);
  const users = ():User[]=>{ try{ return JSON.parse(localStorage.getItem("cysec_users")||"[]"); }catch{return []} };
  const saveUsers=(u:User[])=>localStorage.setItem("cysec_users",JSON.stringify(u));
  const login=(email:string,pass:string)=>{
    const u=users().find(x=>x.email.toLowerCase()===email.toLowerCase() && x.password===pass);
    if(!u) return "Email atau password salah";
    const au={name:u.name,email:u.email};
    localStorage.setItem("cysec_user",JSON.stringify(au)); setUser(au); return null;
  };
  const register=(name:string,email:string,pass:string)=>{
    if(!name.trim()||!email.trim()||pass.length<6) return "Lengkapi data, password min 6";
    if(users().some(x=>x.email.toLowerCase()===email.toLowerCase())) return "Email sudah terdaftar — silakan login";
    const u=[...users(),{name:name.trim(),email:email.trim().toLowerCase(),password:pass}];
    saveUsers(u);
    const au={name:name.trim(),email:email.trim().toLowerCase()};
    localStorage.setItem("cysec_user",JSON.stringify(au)); setUser(au); return null;
  };
  const logout=()=>{ localStorage.removeItem("cysec_user"); setUser(null); };
  return <AuthCtx.Provider value={{user,login,register,logout}}>{children}</AuthCtx.Provider>;
}
export const useAuth=()=>useContext(AuthCtx);
