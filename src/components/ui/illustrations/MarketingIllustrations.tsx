/** Marketing-category SVG illustrations: Digital Marketing, SEO, PPC, Content Writing. */

interface IllustrationProps {
  className?: string;
}

export function DigitalMarketingIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="200" cy="160" r="138" fill="#e0e7ff" opacity="0.55" />
      {/* Megaphone body */}
      <polygon points="56,125 56,200 132,228 132,96" fill="#4f46e5" />
      {/* Megaphone horn */}
      <polygon points="132,96 132,228 220,272 220,48" fill="#6366f1" />
      {/* Handle */}
      <rect x="20" y="144" width="36" height="32" rx="8" fill="#3730a3" />
      {/* Sound waves */}
      <path d="M232,102 C268,132 268,190 232,218" stroke="#6366f1" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M250,80 C298,120 298,200 250,240" stroke="#818cf8" strokeWidth="3.5" strokeLinecap="round" opacity="0.75" />
      <path d="M268,60 C328,108 328,212 268,260" stroke="#c7d2fe" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      {/* Bar chart */}
      <line x1="296" y1="265" x2="398" y2="265" stroke="#c7d2fe" strokeWidth="2" />
      <rect x="302" y="200" width="18" height="65" rx="3" fill="#c7d2fe" />
      <rect x="326" y="178" width="18" height="87" rx="3" fill="#818cf8" />
      <rect x="350" y="155" width="18" height="110" rx="3" fill="#6366f1" />
      <rect x="374" y="130" width="18" height="135" rx="3" fill="#4f46e5" />
      {/* Floating social icons */}
      <rect x="20" y="36" width="42" height="42" rx="12" fill="#4f46e5" />
      <rect x="24" y="40" width="34" height="34" rx="8" fill="white" opacity="0.18" />
      <circle cx="41" cy="57" r="8" fill="white" opacity="0.5" />
      <rect x="338" y="36" width="42" height="42" rx="12" fill="#818cf8" />
      <rect x="342" y="40" width="34" height="34" rx="8" fill="white" opacity="0.18" />
      <circle cx="359" cy="57" r="8" fill="white" opacity="0.5" />
      <rect x="180" y="20" width="42" height="42" rx="12" fill="#6366f1" />
      <rect x="184" y="24" width="34" height="34" rx="8" fill="white" opacity="0.18" />
      <circle cx="201" cy="41" r="8" fill="white" opacity="0.5" />
    </svg>
  );
}

export function SEOIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="200" cy="160" r="138" fill="#e0e7ff" opacity="0.55" />
      {/* Browser frame */}
      <rect x="40" y="60" width="280" height="200" rx="14" fill="white" stroke="#c7d2fe" strokeWidth="2" />
      {/* Browser top bar */}
      <rect x="40" y="60" width="280" height="36" rx="14" fill="#e0e7ff" />
      <rect x="40" y="82" width="280" height="14" fill="#e0e7ff" />
      {/* Browser dots */}
      <circle cx="62" cy="78" r="5" fill="#4f46e5" opacity="0.5" />
      <circle cx="80" cy="78" r="5" fill="#6366f1" opacity="0.4" />
      <circle cx="98" cy="78" r="5" fill="#818cf8" opacity="0.4" />
      {/* Search bar */}
      <rect x="70" y="108" width="220" height="32" rx="16" fill="#f1f5f9" stroke="#c7d2fe" strokeWidth="1.5" />
      {/* Magnifying glass inside search bar */}
      <circle cx="94" cy="124" r="8" stroke="#6366f1" strokeWidth="2.5" />
      <line x1="100" y1="130" x2="107" y2="137" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" />
      {/* Ranking result rows */}
      <rect x="70" y="155" width="14" height="14" rx="3" fill="#4f46e5" />
      <rect x="92" y="157" width="80" height="6" rx="3" fill="#c7d2fe" />
      <rect x="92" y="167" width="120" height="4" rx="2" fill="#e0e7ff" />
      <rect x="70" y="182" width="14" height="14" rx="3" fill="#6366f1" opacity="0.7" />
      <rect x="92" y="184" width="70" height="6" rx="3" fill="#c7d2fe" />
      <rect x="92" y="194" width="100" height="4" rx="2" fill="#e0e7ff" />
      <rect x="70" y="209" width="14" height="14" rx="3" fill="#818cf8" opacity="0.6" />
      <rect x="92" y="211" width="60" height="6" rx="3" fill="#c7d2fe" />
      <rect x="92" y="221" width="90" height="4" rx="2" fill="#e0e7ff" />
      {/* Trending arrow (top right) */}
      <polyline points="310,230 330,200 350,215 370,175" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="370" cy="175" r="5" fill="#4f46e5" />
    </svg>
  );
}

export function PPCIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="200" cy="160" r="138" fill="#e0e7ff" opacity="0.55" />
      {/* Ad card */}
      <rect x="60" y="70" width="220" height="170" rx="16" fill="white" stroke="#c7d2fe" strokeWidth="2" />
      {/* Ad label badge */}
      <rect x="74" y="84" width="38" height="18" rx="5" fill="#e0e7ff" />
      <rect x="76" y="88" width="22" height="6" rx="3" fill="#4f46e5" opacity="0.6" />
      {/* Ad image placeholder */}
      <rect x="74" y="108" width="192" height="70" rx="8" fill="#e0e7ff" />
      <circle cx="170" cy="143" r="18" fill="#c7d2fe" />
      <polygon points="164,136 164,150 178,143" fill="#4f46e5" opacity="0.6" />
      {/* Ad text lines */}
      <rect x="74" y="188" width="140" height="8" rx="4" fill="#c7d2fe" />
      <rect x="74" y="202" width="100" height="6" rx="3" fill="#e0e7ff" />
      {/* CTA button inside ad */}
      <rect x="74" y="218" width="96" height="10" rx="5" fill="#4f46e5" opacity="0.7" />
      {/* Cursor */}
      <polygon points="280,190 280,230 292,218 302,238 308,235 298,215 314,215" fill="#3730a3" />
      {/* Click ripples */}
      <circle cx="285" cy="205" r="18" stroke="#6366f1" strokeWidth="2" opacity="0.5" strokeDasharray="4 3" />
      <circle cx="285" cy="205" r="30" stroke="#818cf8" strokeWidth="1.5" opacity="0.3" strokeDasharray="4 3" />
      {/* Coins / ROI indicators */}
      <circle cx="340" cy="90" r="18" fill="#4f46e5" opacity="0.85" />
      <text x="340" y="96" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white" fontFamily="system-ui">$</text>
      <circle cx="370" cy="130" r="13" fill="#6366f1" opacity="0.7" />
      <text x="370" y="135" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white" fontFamily="system-ui">$</text>
      <circle cx="355" cy="168" r="10" fill="#818cf8" opacity="0.6" />
      {/* ROI arrow */}
      <polyline points="318,270 338,240 358,250 378,210" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="378" cy="210" r="4" fill="#4f46e5" />
    </svg>
  );
}

export function ContentWritingIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="200" cy="160" r="138" fill="#e0e7ff" opacity="0.55" />
      {/* Document shadow */}
      <rect x="120" y="60" width="175" height="215" rx="12" fill="#c7d2fe" opacity="0.4" transform="translate(6,6)" />
      {/* Document */}
      <rect x="120" y="60" width="175" height="215" rx="12" fill="white" stroke="#c7d2fe" strokeWidth="2" />
      {/* Fold corner */}
      <polygon points="271,60 295,84 271,84" fill="#e0e7ff" />
      <polygon points="271,60 295,84 295,60" fill="#c7d2fe" />
      {/* Heading line (wide, colored) */}
      <rect x="136" y="82" width="100" height="9" rx="4" fill="#4f46e5" opacity="0.8" />
      {/* Text lines */}
      <rect x="136" y="102" width="138" height="6" rx="3" fill="#c7d2fe" />
      <rect x="136" y="114" width="125" height="6" rx="3" fill="#c7d2fe" />
      <rect x="136" y="126" width="142" height="6" rx="3" fill="#c7d2fe" />
      {/* Highlighted paragraph */}
      <rect x="136" y="144" width="138" height="6" rx="3" fill="#818cf8" opacity="0.5" />
      <rect x="136" y="156" width="115" height="6" rx="3" fill="#818cf8" opacity="0.5" />
      <rect x="136" y="168" width="130" height="6" rx="3" fill="#818cf8" opacity="0.5" />
      {/* More text lines */}
      <rect x="136" y="188" width="110" height="6" rx="3" fill="#c7d2fe" />
      <rect x="136" y="200" width="138" height="6" rx="3" fill="#c7d2fe" />
      <rect x="136" y="212" width="95" height="6" rx="3" fill="#c7d2fe" />
      {/* Pencil */}
      <rect x="46" y="188" width="20" height="88" rx="4" fill="#4f46e5" transform="rotate(-38, 56, 232)" />
      <polygon points="46,264 66,264 56,284" fill="#3730a3" transform="rotate(-38, 56, 264)" />
      <rect x="46" y="188" width="20" height="14" rx="4" fill="#fbbf24" transform="rotate(-38, 56, 195)" />
      {/* Sparkles */}
      <circle cx="80" cy="80" r="5" fill="#818cf8" opacity="0.7" />
      <circle cx="330" cy="100" r="7" fill="#c7d2fe" opacity="0.8" />
      <circle cx="350" cy="240" r="5" fill="#818cf8" opacity="0.6" />
      <path d="M70,220 L74,210 L78,220 L88,224 L78,228 L74,238 L70,228 L60,224 Z" fill="#6366f1" opacity="0.5" />
      <path d="M345,165 L348,158 L351,165 L358,168 L351,171 L348,178 L345,171 L338,168 Z" fill="#818cf8" opacity="0.6" />
    </svg>
  );
}
