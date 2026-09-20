"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header({overlay=false}:{overlay?:boolean}) {
  const [open,setOpen]=useState(false); const path=usePathname();
  return <header className={`header ${overlay?"header-overlay":""}`}>
    <Link href="/" className="brand" aria-label="步容空间首页"><strong>步 容 空 间</strong><span>BURONG SPACE</span></Link>
    <button className="menu-button" onClick={()=>setOpen(!open)} aria-label="菜单"><i/><i/></button>
    <nav className={open?"open":""}>{[["/projects","项目"],["/about","关于"],["/contact","联系"]].map(([href,label])=><Link key={href} className={path.startsWith(href)?"active":""} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<span className="language"><b>CN</b> / EN</span></nav>
  </header>
}
