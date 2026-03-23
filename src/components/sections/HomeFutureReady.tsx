import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Brain, Cloud, Cpu, Database, HelpCircle } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ComponentType } from "react";
import data from "@/mockData/futureReady.json";

const FUTURE_ICONS: Record<string, ComponentType<LucideProps>> = {
  Brain, Cloud, Cpu, Database,
};
import { NetworkBackground } from "../ui/VisualDecorations";
import { cn } from "@/lib/utils";
import { ShimmerEffect, GlowText, GlitterCard, Sparkles } from "../ui/Sparkles";

export function HomeFutureReady() {
  const [cards, setCards] = useState(data.cards);

  const handleSwipe = (direction: "left" | "right") => {
    setCards((prev) => {
      const newCards = [...prev];
      const movedCard = newCards.shift();
      if (movedCard) newCards.push(movedCard);
      return newCards;
    });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="bg-gray-950 pt-16 pb-44 relative">
        <NetworkBackground />
        <div className="mx-auto w-full px-6 lg:px-12 xl:px-20 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl leading-[1.1] max-w-3xl"
          >
            <GlowText>{data.hero.title}</GlowText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm text-gray-400 max-w-xl font-medium"
          >
            {data.hero.subtitle}
          </motion.p>
        </div>
      </div>

        <div className="mx-auto w-full px-6 lg:px-12 xl:px-20 -mt-32 relative z-20 pb-12">
        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {data.cards.map((card, idx) => {
            const IconComponent = FUTURE_ICONS[card.icon] || HelpCircle;
            const colors: Record<string, string> = {
              indigo: "text-blue-600",
              emerald: "text-emerald-500",
              violet: "text-purple-600",
              teal: "text-cyan-500"
            };
            const colorClass = colors[card.color] || "text-indigo-500";

            const cardVariants = {
              initial: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
              hover: { y: -12, transition: { duration: 0.4, ease: "easeOut" as const } }
            };

            const neonVariants = {
              initial: { opacity: 0, strokeDashoffset: 0 },
              hover: { 
                opacity: 1, 
                strokeDashoffset: -301.6, // Full circumference rotation
                transition: { 
                  strokeDashoffset: { duration: 0.8, ease: "linear" as const, repeat: Infinity },
                  opacity: { duration: 0.3 }
                }
              }
            };

            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                initial="initial"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-white p-6 rounded-[1.5rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] transition-all duration-500 text-center overflow-hidden"
              >
                <ShimmerEffect />
                <div className="relative mb-6 mx-auto h-20 w-20 flex items-center justify-center">
                  {/* Loading-Style Glowing Border UI */}
                  <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100">
                    {/* Static Base Border (Dim) */}
                    <circle 
                      cx="50" cy="50" r="48" 
                      fill="none" stroke="currentColor" 
                      strokeWidth="1.5" 
                      className={cn("opacity-10", colorClass)} 
                    />
                    
                    {/* Orbiting Glow Segment 1 */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="48"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeDasharray="40 261.6" // Small segment (40px) of the ~301.6px circumference
                      strokeLinecap="round"
                      variants={neonVariants}
                      style={{ filter: "drop-shadow(0 0 12px currentColor) drop-shadow(0 0 4px currentColor)" }}
                      className={colorClass}
                    />

                    {/* Orbiting Glow Segment 2 (Offset by 180 degrees) */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="48"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeDasharray="40 261.6"
                      strokeDashoffset={150.8} // Start half-way
                      strokeLinecap="round"
                      variants={{
                        initial: { opacity: 0, strokeDashoffset: 150.8 },
                        hover: { 
                          opacity: 1, 
                          strokeDashoffset: 150.8 - 301.6,
                          transition: { 
                            strokeDashoffset: { duration: 0.8, ease: "linear", repeat: Infinity },
                            opacity: { duration: 0.3 }
                          }
                        }
                      }}
                      style={{ filter: "drop-shadow(0 0 12px currentColor) drop-shadow(0 0 4px currentColor)" }}
                      className={colorClass}
                    />
                  </svg>
                  
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 text-gray-900 group-hover:scale-110 group-hover:bg-white transition-all duration-500 shadow-sm">
                    <IconComponent className={cn("h-6 w-6", colorClass)} />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium text-sm">{card.description}</p>
                <div className={cn("mt-4 h-1 w-0 group-hover:w-full transition-all duration-700 mx-auto rounded-full bg-current opacity-20", colorClass)} />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Stacked Carousel Layout */}
        <div className="md:hidden relative h-[500px] w-full flex items-center justify-center perspective-1000">
          <AnimatePresence mode="popLayout">
            {cards.map((card, idx) => {
              const IconComponent = FUTURE_ICONS[card.icon] || HelpCircle;
              const isTop = idx === 0;
              const colors: Record<string, string> = {
                indigo: "text-indigo-500",
                emerald: "text-emerald-500",
                violet: "text-violet-500",
                teal: "text-teal-500"
              };
              const colorClass = colors[card.color] || "text-indigo-500";
              
              return (
                <motion.div
                  key={card.title}
                  style={{ zIndex: cards.length - idx }}
                  initial={{ scale: 0.8, opacity: 0, y: 40 }}
                  animate={{ 
                    scale: 1 - idx * 0.05, 
                    opacity: 1 - idx * 0.25,
                    y: idx * 20,
                    rotateX: idx * -2,
                    x: 0
                  }}
                  exit={{ 
                    x: isTop ? (Math.random() > 0.5 ? 800 : -800) : 0,
                    opacity: 0,
                    scale: 0.5,
                    rotate: isTop ? (Math.random() > 0.5 ? 15 : -15) : 0,
                    transition: { duration: 0.6, ease: "circOut" }
                  }}
                  drag={isTop ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (Math.abs(info.offset.x) > 150) {
                      handleSwipe(info.offset.x > 0 ? "right" : "left");
                    }
                  }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="w-full max-w-[340px] md:max-w-[400px] h-[450px] pointer-events-auto">
                    <GlitterCard className="rounded-[3rem] h-full shadow-2xl">
                      <div className="relative flex flex-col bg-white p-12 h-full overflow-hidden rounded-[3rem] border border-gray-100 text-center">
                        <Sparkles />
                        <div className="relative mb-10 mx-auto h-24 w-24 flex items-center justify-center">
                          <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 text-gray-900">
                            <IconComponent className={cn("h-8 w-8", colorClass)} />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed font-medium text-base">
                          {card.description}
                        </p>
                        <div className="mt-auto pt-8">
                          <span className={cn("inline-flex items-center rounded-full px-6 py-2 text-[10px] font-bold uppercase tracking-widest bg-gray-50 border border-gray-100", colorClass)}>
                            {card.color} strategy
                          </span>
                        </div>
                      </div>
                    </GlitterCard>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          <div className="absolute -bottom-12 left-0 right-0 flex flex-col items-center gap-4">
            <div className="flex gap-2">
              {data.cards.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 w-1 rounded-full transition-all duration-500 ${cards[0].title === data.cards[i].title ? 'w-4 bg-white' : 'bg-gray-600'}`} 
                />
              ))}
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] animate-pulse">
              Swipe to navigate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
