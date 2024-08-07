import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Subash Kumar Yadav",
  description: "A web developer portfolio",
  name:"viewport",
  content:"width=device-width, initial-scale=1.0",
  icons:{
    icon:"./favicon.ico"
    
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
         <TransitionProvider >{children} </TransitionProvider>
    
        </body>
    </html>
  );
}
