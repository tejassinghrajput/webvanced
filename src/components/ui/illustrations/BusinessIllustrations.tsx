/** Business-category SVG illustrations: Social Media, Graphic Design, Local SEO. */

interface IllustrationProps {
  className?: string;
}

export function SocialMediaIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="200" cy="160" r="138" fill="#e0e7ff" opacity="0.55" />
      {/* Central hub node */}
      <circle cx="200" cy="160" r="34" fill="#4f46e5" />
      <circle cx="200" cy="160" r="22" fill="white" opacity="0.25" />
      <circle cx="200" cy="148" r="8" fill="white" opacity="0.7" />
      <rect x="188" y="158" width="24" height="14" rx="7" fill="white" opacity="0.7" />
      {/* Connection lines */}
      <line x1="200" y1="126" x2="200" y2="76" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 3" />
      <line x1="200" y1="194" x2="200" y2="244" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 3" />
      <line x1="166" y1="144" x2="124" y2="112" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 3" />
      <line x1="234" y1="144" x2="276" y2="112" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 3" />
      <line x1="166" y1="176" x2="112" y2="200" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 3" />
      <line x1="234" y1="176" x2="288" y2="200" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 3" />
      {/* Satellite nodes */}
      <circle cx="200" cy="60" r="24" fill="#6366f1" />
      <circle cx="200" cy="52" r="7" fill="white" opacity="0.7" />
      <rect x="190" y="60" width="20" height="12" rx="6" fill="white" opacity="0.7" />
      <circle cx="200" cy="260" r="24" fill="#6366f1" />
      <circle cx="200" cy="252" r="7" fill="white" opacity="0.7" />
      <rect x="190" y="260" width="20" height="12" rx="6" fill="white" opacity="0.7" />
      <circle cx="110" cy="96" r="22" fill="#818cf8" />
      <circle cx="110" cy="89" r="6" fill="white" opacity="0.7" />
      <rect x="101" y="97" width="18" height="10" rx="5" fill="white" opacity="0.7" />
      <circle cx="290" cy="96" r="22" fill="#818cf8" />
      <circle cx="290" cy="89" r="6" fill="white" opacity="0.7" />
      <rect x="281" y="97" width="18" height="10" rx="5" fill="white" opacity="0.7" />
      <circle cx="96" cy="210" r="20" fill="#c7d2fe" />
      <circle cx="304" cy="210" r="20" fill="#c7d2fe" />
      {/* Heart badges on some nodes */}
      <rect x="294" y="74" width="26" height="20" rx="6" fill="#ef4444" opacity="0.85" />
      <path d="M307,80 C307,77 304,75 302,77 C300,75 297,77 297,80 C297,84 307,89 307,89 C307,89 317,84 317,80 C317,77 314,75 312,77 C310,75 307,77 307,80 Z" fill="white" opacity="0.9" transform="translate(-7,-1) scale(0.8)" />
      <rect x="76" y="184" width="26" height="20" rx="6" fill="#10b981" opacity="0.85" />
      <text x="89" y="198" textAnchor="middle" fontSize="11" fill="white" fontFamily="system-ui" fontWeight="bold">♥</text>
    </svg>
  );
}

export function GraphicDesignIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="200" cy="160" r="138" fill="#e0e7ff" opacity="0.55" />
      {/* Color palette circles (overlapping) */}
      <circle cx="160" cy="150" r="64" fill="#4f46e5" opacity="0.85" />
      <circle cx="220" cy="150" r="64" fill="#06b6d4" opacity="0.7" />
      <circle cx="190" cy="200" r="64" fill="#f59e0b" opacity="0.65" />
      {/* Overlap mixing colors (approximate — use mix-blend but plain is fine) */}
      <circle cx="190" cy="170" r="22" fill="#6366f1" opacity="0.5" />
      {/* Pencil / stylus */}
      <rect x="310" y="64" width="18" height="76" rx="5" fill="#4f46e5" transform="rotate(35, 319, 102)" />
      <polygon points="310,140 328,140 319,158" fill="#3730a3" transform="rotate(35, 319, 149)" />
      <rect x="310" y="64" width="18" height="14" rx="4" fill="#fbbf24" transform="rotate(35, 319, 71)" />
      {/* Color swatch row */}
      <circle cx="110" cy="66" r="14" fill="#4f46e5" />
      <circle cx="138" cy="66" r="14" fill="#06b6d4" />
      <circle cx="166" cy="66" r="14" fill="#f59e0b" />
      <circle cx="194" cy="66" r="14" fill="#10b981" />
      <circle cx="222" cy="66" r="14" fill="#ef4444" />
      {/* Geometric shapes top-right */}
      <polygon points="325,80 355,130 295,130" fill="#6366f1" opacity="0.25" stroke="#4f46e5" strokeWidth="2" />
      <rect x="295" y="150" width="60" height="60" rx="6" fill="#818cf8" opacity="0.2" stroke="#6366f1" strokeWidth="2" />
      {/* Star sparkle */}
      <path d="M350,240 L354,228 L358,240 L370,244 L358,248 L354,260 L350,248 L338,244 Z" fill="#818cf8" opacity="0.7" />
      <path d="M64,240 L67,233 L70,240 L77,243 L70,246 L67,253 L64,246 L57,243 Z" fill="#c7d2fe" opacity="0.8" />
    </svg>
  );
}

export function LocalSEOIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="200" cy="168" r="138" fill="#e0e7ff" opacity="0.55" />
      {/* Map background card */}
      <rect x="50" y="60" width="300" height="210" rx="16" fill="white" stroke="#c7d2fe" strokeWidth="2" />
      {/* Grid lines on map */}
      <line x1="50" y1="103" x2="350" y2="103" stroke="#e0e7ff" strokeWidth="1.5" />
      <line x1="50" y1="145" x2="350" y2="145" stroke="#e0e7ff" strokeWidth="1.5" />
      <line x1="50" y1="187" x2="350" y2="187" stroke="#e0e7ff" strokeWidth="1.5" />
      <line x1="50" y1="229" x2="350" y2="229" stroke="#e0e7ff" strokeWidth="1.5" />
      <line x1="117" y1="60" x2="117" y2="270" stroke="#e0e7ff" strokeWidth="1.5" />
      <line x1="183" y1="60" x2="183" y2="270" stroke="#e0e7ff" strokeWidth="1.5" />
      <line x1="250" y1="60" x2="250" y2="270" stroke="#e0e7ff" strokeWidth="1.5" />
      <line x1="316" y1="60" x2="316" y2="270" stroke="#e0e7ff" strokeWidth="1.5" />
      {/* Search radius circles (dashed) */}
      <circle cx="200" cy="168" r="60" stroke="#6366f1" strokeWidth="2" strokeDasharray="5 4" opacity="0.5" />
      <circle cx="200" cy="168" r="100" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.35" />
      {/* Small buildings */}
      <rect x="80" y="148" width="20" height="28" rx="2" fill="#c7d2fe" />
      <polygon points="80,148 100,148 90,136" fill="#818cf8" />
      <rect x="290" y="155" width="24" height="22" rx="2" fill="#c7d2fe" />
      <polygon points="290,155 314,155 302,143" fill="#818cf8" />
      <rect x="148" y="220" width="16" height="18" rx="2" fill="#c7d2fe" />
      <polygon points="148,220 164,220 156,211" fill="#818cf8" />
      {/* Location pin */}
      <circle cx="200" cy="155" r="22" fill="#4f46e5" />
      <circle cx="200" cy="152" r="9" fill="white" opacity="0.9" />
      <polygon points="188,168 212,168 200,193" fill="#4f46e5" />
      {/* Pin shine */}
      <circle cx="195" cy="148" r="3" fill="white" opacity="0.5" />
    </svg>
  );
}
