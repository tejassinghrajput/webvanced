import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import navigationData from "@/mockData/navigation.json";
import { cn } from "@/lib/utils";
import { ShimmerEffect } from "../ui/Sparkles";
import logo from "/assets/logo.png";

interface NavCategory {
  title: string;
  items: { label: string; href: string; description: string }[];
}

/** Desktop mega-menu panel rendered on hover over "Services". */
function MegaMenu({ categories, onClose }: { categories: NavCategory[]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] rounded-2xl bg-white border border-gray-100 shadow-2xl shadow-gray-900/10 overflow-hidden z-50"
    >
      {/* Top bar link to /services overview */}
      <Link
        to={navigationData.servicesMenu.href}
        onClick={onClose}
        className="flex items-center justify-between px-6 py-4 bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
      >
        <span className="text-sm font-bold uppercase tracking-widest">All Services</span>
        <ChevronRight className="h-4 w-4" />
      </Link>
      <div className="grid grid-cols-2 divide-x divide-gray-100 p-4 gap-0">
        {categories.map((cat) => (
          <div key={cat.title} className="px-3 py-2">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-3 px-3">
              {cat.title}
            </p>
            <ul className="flex flex-col gap-0.5">
              {cat.items.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className="group flex flex-col rounded-xl px-3 py-2.5 hover:bg-indigo-50 transition-colors"
                  >
                    <span className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {item.label}
                    </span>
                    <span className="text-xs text-gray-500 mt-0.5 leading-snug">{item.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleServicesEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };

  const handleServicesLeave = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 150);
  };

  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-100 overflow-visible">
      <ShimmerEffect />
      <motion.div
        key={location.pathname}
        initial={{ width: "0%", opacity: 1 }}
        animate={{ width: "100%", opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-[2px] bg-indigo-600 z-50"
      />
      <div className="mx-auto flex h-14 md:h-16 w-full items-center justify-between px-6 lg:px-12 xl:px-20">
        <Link to="/" className="shrink-0 group" aria-label={navigationData.logo}>
          <img
            src={logo}
            alt={navigationData.logo}
            className="h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {/* Services mega-menu trigger */}
          <div
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button
              className={cn(
                "relative flex items-center gap-1 text-xs lg:text-sm font-bold uppercase tracking-widest transition-all hover:text-indigo-600 py-2",
                isServicesActive ? "text-indigo-600" : "text-gray-500"
              )}
              aria-haspopup="true"
              aria-expanded={megaOpen}
            >
              {navigationData.servicesMenu.label}
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", megaOpen && "rotate-180")} />
            </button>
            {isServicesActive && (
              <motion.div
                layoutId="navbar-active"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <AnimatePresence>
              {megaOpen && (
                <MegaMenu
                  categories={navigationData.servicesMenu.categories}
                  onClose={() => setMegaOpen(false)}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Regular nav links */}
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
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 px-6 py-8 flex flex-col gap-2 overflow-hidden"
          >
            {/* Mobile Services accordion */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={cn(
                "flex items-center justify-between text-sm font-bold uppercase tracking-widest py-2 transition-all",
                isServicesActive ? "text-indigo-600" : "text-gray-500"
              )}
            >
              {navigationData.servicesMenu.label}
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", mobileServicesOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {mobileServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden pl-4 flex flex-col gap-3"
                >
                  <Link
                    to={navigationData.servicesMenu.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-bold text-indigo-600 uppercase tracking-widest py-1"
                  >
                    All Services →
                  </Link>
                  {navigationData.servicesMenu.categories.map((cat) => (
                    <div key={cat.title}>
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-2">
                        {cat.title}
                      </p>
                      {cat.items.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-1.5 text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mobile regular links */}
            {navigationData.links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest transition-all py-2",
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
