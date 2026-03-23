/** Tech-category SVG illustrations: IT Outsourcing, Mobile App, Testing, Data Services, ERP. */

interface IllustrationProps {
  className?: string;
}

export function AppDevelopmentIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="200" cy="160" r="138" fill="#e0e7ff" opacity="0.55" />
      {/* Laptop Base */}
      <rect x="70" y="80" width="260" height="150" rx="8" fill="#1e1b4b" />
      <rect x="70" y="80" width="260" height="24" rx="8" fill="#312e81" />
      <rect x="70" y="94" width="260" height="10" fill="#312e81" />
      {/* Browser dots */}
      <circle cx="86" cy="92" r="4" fill="#ef4444" opacity="0.8" />
      <circle cx="100" cy="92" r="4" fill="#f59e0b" opacity="0.8" />
      <circle cx="114" cy="92" r="4" fill="#10b981" opacity="0.8" />
      
      {/* Code / Window Layout */}
      <rect x="80" y="115" width="80" height="10" rx="3" fill="#818cf8" opacity="0.6" />
      <rect x="80" y="135" width="130" height="6" rx="3" fill="#c7d2fe" opacity="0.4" />
      <rect x="80" y="147" width="110" height="6" rx="3" fill="#c7d2fe" opacity="0.4" />
      <rect x="80" y="159" width="120" height="6" rx="3" fill="#c7d2fe" opacity="0.4" />

      {/* Code / Window Sidebar */}
      <rect x="230" y="115" width="80" height="80" rx="6" fill="#4f46e5" opacity="0.8" />
      <rect x="240" y="125" width="60" height="6" rx="3" fill="#white" opacity="0.8" />
      <rect x="240" y="137" width="40" height="6" rx="3" fill="#white" opacity="0.5" />
      
      <path d="M50,230 L350,230 L360,240 L40,240 Z" fill="#6366f1" />
      <rect x="170" y="230" width="60" height="4" fill="#a5b4fc" />
    </svg>
  );
}

export function ITOutsourcingIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="200" cy="140" r="138" fill="#e0e7ff" opacity="0.55" />
      {/* Cloud */}
      <path d="M126,118 C126,96 142,80 162,80 C168,68 182,60 200,60 C222,60 240,75 244,95 C258,96 270,107 270,122 C270,138 258,150 244,150 L140,150 C131,150 124,140 126,118 Z" fill="#4f46e5" />
      <path d="M126,118 C126,96 142,80 162,80 C168,68 182,60 200,60" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      {/* Gear on cloud */}
      <circle cx="200" cy="108" r="14" fill="white" opacity="0.25" />
      <circle cx="200" cy="108" r="8" fill="white" opacity="0.4" />
      {/* Connection lines down */}
      <line x1="126" y1="168" x2="80" y2="220" stroke="#818cf8" strokeWidth="2" strokeDasharray="5 4" />
      <line x1="200" y1="168" x2="200" y2="220" stroke="#818cf8" strokeWidth="2" strokeDasharray="5 4" />
      <line x1="274" y1="168" x2="320" y2="220" stroke="#818cf8" strokeWidth="2" strokeDasharray="5 4" />
      {/* Laptop 1 (left) */}
      <rect x="54" y="220" width="52" height="34" rx="4" fill="#c7d2fe" />
      <rect x="58" y="224" width="44" height="24" rx="2" fill="#6366f1" opacity="0.5" />
      <rect x="48" y="254" width="64" height="5" rx="2" fill="#a5b4fc" />
      {/* Laptop 2 (center) */}
      <rect x="174" y="220" width="52" height="34" rx="4" fill="#c7d2fe" />
      <rect x="178" y="224" width="44" height="24" rx="2" fill="#4f46e5" opacity="0.5" />
      <rect x="168" y="254" width="64" height="5" rx="2" fill="#a5b4fc" />
      {/* Laptop 3 (right) */}
      <rect x="294" y="220" width="52" height="34" rx="4" fill="#c7d2fe" />
      <rect x="298" y="224" width="44" height="24" rx="2" fill="#6366f1" opacity="0.5" />
      <rect x="288" y="254" width="64" height="5" rx="2" fill="#a5b4fc" />
      {/* Data arrows */}
      <path d="M118,165 L118,175 L84,175 L84,215" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" markerEnd="url(#arr)" />
      <path d="M200,163 L200,213" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M282,165 L282,175 L316,175 L316,213" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="84" cy="190" r="4" fill="#4f46e5" opacity="0.6" />
      <circle cx="200" cy="190" r="4" fill="#4f46e5" opacity="0.6" />
      <circle cx="316" cy="190" r="4" fill="#4f46e5" opacity="0.6" />
    </svg>
  );
}

export function MobileAppIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="200" cy="160" r="138" fill="#e0e7ff" opacity="0.55" />
      {/* Phone shadow */}
      <rect x="126" y="36" width="148" height="258" rx="24" fill="#c7d2fe" opacity="0.4" transform="translate(4,4)" />
      {/* Phone body */}
      <rect x="126" y="36" width="148" height="258" rx="24" fill="white" stroke="#c7d2fe" strokeWidth="2.5" />
      {/* Status bar */}
      <rect x="126" y="36" width="148" height="28" rx="24" fill="#f1f5f9" />
      <rect x="126" y="52" width="148" height="12" fill="#f1f5f9" />
      {/* Notch */}
      <rect x="172" y="40" width="56" height="14" rx="7" fill="#e2e8f0" />
      {/* Bottom home indicator */}
      <rect x="168" y="276" width="64" height="5" rx="2.5" fill="#c7d2fe" />
      {/* App grid — 3x3 */}
      {[0,1,2].map(col => [0,1,2].map(row => {
        const colors = ["#4f46e5","#06b6d4","#f59e0b","#10b981","#ef4444","#8b5cf6","#f97316","#3b82f6","#ec4899"];
        const x = 150 + col * 46;
        const y = 78 + row * 52;
        const color = colors[row * 3 + col];
        return (
          <g key={`${col}-${row}`}>
            <rect x={x} y={y} width="34" height="34" rx="10" fill={color} opacity="0.85" />
            <rect x={x+4} y={y+4} width="26" height="26" rx="6" fill="white" opacity="0.15" />
          </g>
        );
      }))}
      {/* Nav dots */}
      <circle cx="188" cy="262" r="4" fill="#4f46e5" />
      <circle cx="200" cy="262" r="4" fill="#c7d2fe" />
      <circle cx="212" cy="262" r="4" fill="#c7d2fe" />
    </svg>
  );
}

export function TestingIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="200" cy="160" r="138" fill="#e0e7ff" opacity="0.55" />
      {/* Terminal window */}
      <rect x="48" y="64" width="220" height="185" rx="14" fill="#1e1b4b" />
      <rect x="48" y="64" width="220" height="34" rx="14" fill="#312e81" />
      <rect x="48" y="84" width="220" height="14" fill="#312e81" />
      <circle cx="70" cy="81" r="5" fill="#ef4444" opacity="0.7" />
      <circle cx="88" cy="81" r="5" fill="#f59e0b" opacity="0.7" />
      <circle cx="106" cy="81" r="5" fill="#10b981" opacity="0.7" />
      {/* Code lines */}
      <rect x="64" y="110" width="90" height="6" rx="3" fill="#818cf8" opacity="0.6" />
      <rect x="72" y="122" width="130" height="6" rx="3" fill="#c7d2fe" opacity="0.4" />
      <rect x="72" y="134" width="110" height="6" rx="3" fill="#c7d2fe" opacity="0.4" />
      <rect x="64" y="146" width="80" height="6" rx="3" fill="#818cf8" opacity="0.6" />
      <rect x="72" y="158" width="142" height="6" rx="3" fill="#c7d2fe" opacity="0.4" />
      <rect x="72" y="170" width="100" height="6" rx="3" fill="#c7d2fe" opacity="0.4" />
      <rect x="64" y="182" width="60" height="6" rx="3" fill="#10b981" opacity="0.8" />
      <rect x="72" y="194" width="120" height="6" rx="3" fill="#c7d2fe" opacity="0.4" />
      <rect x="72" y="206" width="90" height="6" rx="3" fill="#c7d2fe" opacity="0.4" />
      {/* Magnifying glass overlay */}
      <circle cx="260" cy="148" r="62" fill="white" stroke="#c7d2fe" strokeWidth="3" opacity="0.95" />
      <circle cx="260" cy="148" r="50" fill="white" />
      <line x1="301" y1="189" x2="330" y2="220" stroke="#4f46e5" strokeWidth="6" strokeLinecap="round" />
      {/* Checklist inside magnifier */}
      <circle cx="246" cy="128" r="9" fill="#10b981" />
      <polyline points="241,128 245,132 253,124" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="260" y="122" width="40" height="5" rx="2.5" fill="#c7d2fe" />
      <circle cx="246" cy="148" r="9" fill="#10b981" />
      <polyline points="241,148 245,152 253,144" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="260" y="142" width="32" height="5" rx="2.5" fill="#c7d2fe" />
      <circle cx="246" cy="168" r="9" fill="#ef4444" />
      <line x1="241" y1="163" x2="251" y2="173" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="251" y1="163" x2="241" y2="173" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="260" y="162" width="36" height="5" rx="2.5" fill="#c7d2fe" />
    </svg>
  );
}

export function DataServicesIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="200" cy="160" r="138" fill="#e0e7ff" opacity="0.55" />
      {/* Database cylinder */}
      <ellipse cx="116" cy="98" rx="52" ry="14" fill="#4f46e5" />
      <rect x="64" y="98" width="104" height="90" fill="#4f46e5" />
      <ellipse cx="116" cy="188" rx="52" ry="14" fill="#3730a3" />
      <ellipse cx="116" cy="98" rx="52" ry="14" fill="#6366f1" />
      {/* DB stripes */}
      <ellipse cx="116" cy="128" rx="52" ry="8" fill="none" stroke="#818cf8" strokeWidth="1.5" opacity="0.5" />
      <ellipse cx="116" cy="158" rx="52" ry="8" fill="none" stroke="#818cf8" strokeWidth="1.5" opacity="0.5" />
      {/* Bar chart */}
      <line x1="190" y1="260" x2="310" y2="260" stroke="#c7d2fe" strokeWidth="2" />
      <rect x="197" y="210" width="20" height="50" rx="4" fill="#c7d2fe" />
      <rect x="224" y="190" width="20" height="70" rx="4" fill="#818cf8" />
      <rect x="251" y="168" width="20" height="92" rx="4" fill="#6366f1" />
      <rect x="278" y="148" width="20" height="112" rx="4" fill="#4f46e5" />
      {/* Pie chart */}
      <circle cx="116" cy="252" r="36" fill="#e0e7ff" />
      <path d="M116,252 L116,216 A36,36 0 0,1 152,252 Z" fill="#4f46e5" />
      <path d="M116,252 L152,252 A36,36 0 0,1 98,284 Z" fill="#6366f1" />
      <path d="M116,252 L98,284 A36,36 0 0,1 80,252 Z" fill="#818cf8" />
      <path d="M116,252 L80,252 A36,36 0 0,1 116,216 Z" fill="#c7d2fe" />
      {/* Data flow arrows */}
      <path d="M168,143 L190,200" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="4 3" strokeLinecap="round" />
      <polygon points="182,200 194,206 196,193" fill="#818cf8" opacity="0.6" />
    </svg>
  );
}

export function ERPIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="200" cy="160" r="138" fill="#e0e7ff" opacity="0.55" />
      {/* Hub lines */}
      <line x1="200" y1="160" x2="200" y2="62" stroke="#c7d2fe" strokeWidth="2" strokeDasharray="4 3" />
      <line x1="200" y1="160" x2="200" y2="258" stroke="#c7d2fe" strokeWidth="2" strokeDasharray="4 3" />
      <line x1="200" y1="160" x2="104" y2="108" stroke="#c7d2fe" strokeWidth="2" strokeDasharray="4 3" />
      <line x1="200" y1="160" x2="296" y2="108" stroke="#c7d2fe" strokeWidth="2" strokeDasharray="4 3" />
      <line x1="200" y1="160" x2="104" y2="212" stroke="#c7d2fe" strokeWidth="2" strokeDasharray="4 3" />
      <line x1="200" y1="160" x2="296" y2="212" stroke="#c7d2fe" strokeWidth="2" strokeDasharray="4 3" />
      {/* Central hub */}
      <circle cx="200" cy="160" r="36" fill="#4f46e5" />
      <circle cx="200" cy="160" r="24" fill="white" opacity="0.2" />
      <text x="200" y="156" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" fontFamily="system-ui">ERP</text>
      <text x="200" y="169" textAnchor="middle" fontSize="8" fill="white" opacity="0.7" fontFamily="system-ui">HUB</text>
      {/* Department nodes */}
      <rect x="166" y="38" width="68" height="48" rx="10" fill="#6366f1" />
      <text x="200" y="60" textAnchor="middle" fontSize="8" fill="white" fontFamily="system-ui" fontWeight="bold">HR</text>
      <text x="200" y="74" textAnchor="middle" fontSize="7" fill="white" opacity="0.8" fontFamily="system-ui">People</text>
      <rect x="70" y="84" width="68" height="48" rx="10" fill="#818cf8" />
      <text x="104" y="106" textAnchor="middle" fontSize="8" fill="white" fontFamily="system-ui" fontWeight="bold">Finance</text>
      <text x="104" y="118" textAnchor="middle" fontSize="7" fill="white" opacity="0.8" fontFamily="system-ui">Accounts</text>
      <rect x="262" y="84" width="68" height="48" rx="10" fill="#818cf8" />
      <text x="296" y="106" textAnchor="middle" fontSize="8" fill="white" fontFamily="system-ui" fontWeight="bold">Sales</text>
      <text x="296" y="118" textAnchor="middle" fontSize="7" fill="white" opacity="0.8" fontFamily="system-ui">CRM</text>
      <rect x="166" y="234" width="68" height="48" rx="10" fill="#6366f1" />
      <text x="200" y="256" textAnchor="middle" fontSize="8" fill="white" fontFamily="system-ui" fontWeight="bold">Inventory</text>
      <text x="200" y="268" textAnchor="middle" fontSize="7" fill="white" opacity="0.8" fontFamily="system-ui">Stock</text>
      <rect x="70" y="188" width="68" height="48" rx="10" fill="#a5b4fc" />
      <text x="104" y="210" textAnchor="middle" fontSize="8" fill="white" fontFamily="system-ui" fontWeight="bold">Reports</text>
      <text x="104" y="222" textAnchor="middle" fontSize="7" fill="white" opacity="0.8" fontFamily="system-ui">Analytics</text>
      <rect x="262" y="188" width="68" height="48" rx="10" fill="#a5b4fc" />
      <text x="296" y="210" textAnchor="middle" fontSize="8" fill="white" fontFamily="system-ui" fontWeight="bold">Auto</text>
      <text x="296" y="222" textAnchor="middle" fontSize="7" fill="white" opacity="0.8" fontFamily="system-ui">Workflow</text>
    </svg>
  );
}
