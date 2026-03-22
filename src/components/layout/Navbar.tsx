import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import navigationData from "@/mockData/navigation.json";
import { cn } from "@/lib/utils";
import { ShimmerEffect, GlitterText } from "../ui/Sparkles";

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-gray-100 overflow-hidden">
      <ShimmerEffect />
      <motion.div
        key={location.pathname}
        initial={{ width: "0%", opacity: 1 }}
        animate={{ width: "100%", opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-[2px] bg-indigo-600 z-50"
      />
      <div className="mx-auto flex h-20 md:h-24 w-full items-center justify-between px-6 lg:px-12 xl:px-20">
        <Link to="/" className="text-xl md:text-2xl font-bold tracking-tighter text-gray-900 group shrink-0">
          <GlitterText className="text-indigo-600 transition-transform group-hover:scale-110 inline-block mr-1">M</GlitterText>
          {navigationData.logo.slice(1)}
        </Link>
        
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navigationData.links.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  "relative text-xs lg:text-sm font-bold uppercase tracking-widest transition-all hover:text-indigo-600 py-2",
                  isActive ? "text-indigo-600" : "text-gray-500"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden sm:block">
            <Link
              to={navigationData.cta.href}
              className="rounded-full bg-gray-900 px-6 md:px-8 py-2.5 md:py-3 text-xs md:text-sm font-bold text-white uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg"
            >
              {navigationData.cta.label}
            </Link>
          </motion.div>

          <button 
            className="md:hidden p-2 text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 px-6 py-8 flex flex-col gap-6"
          >
            {navigationData.links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest transition-all",
                  location.pathname === link.href ? "text-indigo-600" : "text-gray-500"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={navigationData.cta.href}
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-full bg-gray-900 px-8 py-4 text-sm font-bold text-white text-center uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg"
            >
              {navigationData.cta.label}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
