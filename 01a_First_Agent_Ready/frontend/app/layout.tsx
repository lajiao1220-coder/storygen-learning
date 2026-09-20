import type {Metadata} from "next"; import "./globals.css";
export const metadata:Metadata={metadataBase:new URL("https://burong.space"),title:{default:"步容空间 | BURONG SPACE DESIGN",template:"%s | 步容空间"},description:"深圳步容空间设计有限公司——让空间，有从容发生的余地。",keywords:["步容空间","深圳空间设计","Burong Space Design"],openGraph:{title:"步容空间 BURONG SPACE DESIGN",description:"Space, with room to breathe.",type:"website",locale:"zh_CN"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
