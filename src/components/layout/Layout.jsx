import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import '../../App.css'

const Layout = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0b0f1a]">

  {/* 🌌 Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f3a] to-[#05070f]"></div>

  {/* ✨ Glow Aura */}
  <div className="absolute top-[-200px] left-1/2 w-[600px] h-[600px] bg-purple-600 opacity-20 blur-[200px] -translate-x-1/2"></div>

  {/* ✨ Star Layer 1 */}
  <div className="absolute inset-0 opacity-30 
    bg-[radial-gradient(white_1px,transparent_1px)] 
    [background-size:50px_50px]">
  </div>

  {/* ✨ Star Layer 2 */}
  <div className="absolute inset-0 opacity-20 stars-animate 
    bg-[radial-gradient(white_1px,transparent_1px)] 
    [background-size:20px_20px]">
  </div>

  {/* 🧊 App Content */}
  <div className="relative z-10 flex">

    <Sidebar />

    <div className="flex-1 flex flex-col ml-64">
      <Header />

      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>

  </div>
</div>
  );
};

export default Layout;