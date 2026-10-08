type P = { className?: string };
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const HelpIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01" /></svg>
);
export const BriefcaseIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" /></svg>
);
export const UserIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.5-6 8-6s8 2 8 6z" /></svg>
);
export const PinIcon = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className}><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
export const CalendarIcon = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className}><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M3 9h18" /></svg>
);
export const FiltersIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><circle cx="7" cy="7" r="2.2" /><path d="M11 7h9M4 17h9" /><circle cx="17" cy="17" r="2.2" /></svg>
);
export const ListIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01" /></svg>
);
export const MapIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z" /><path d="M9 4v14M15 6v14" /></svg>
);
export const ChevronDown = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} strokeWidth={2.4} className={className}><path d="M5 9l7 7 7-7" /></svg>
);
export const ChevronLeft = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} strokeWidth={2.6} className={className}><path d="M15 5l-7 7 7 7" /></svg>
);
export const ChevronRight = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} strokeWidth={2.6} className={className}><path d="M9 5l7 7-7 7" /></svg>
);
export const ArrowRight = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} strokeWidth={2.4} className={className}><path d="M4 12h16M14 6l6 6-6 6" /></svg>
);
export const StarIcon = ({ className = "h-3.5 w-3.5" }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 2l3 6.9 7.5.7-5.7 5 1.7 7.4L12 18l-6.5 4 1.7-7.4-5.7-5 7.5-.7z" /></svg>
);
export const CheckIcon = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} strokeWidth={3} className={className}><path d="M5 12.5l4.5 4.5L19 7" /></svg>
);
export const GlobeIcon = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 17.9A8 8 0 0 1 4.1 11H8c0 1 .5 2 1.3 2.7L11 15.5zm6.9-2.5A2 2 0 0 0 16 16h-1v-3a1 1 0 0 0-1-1H9v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.4a8 8 0 0 1 1.9 12.8z" /></svg>
);

export const Facebook = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" />
    <path fill="#1c1c1c" d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.5c0-.8.3-1.4 1.4-1.4h1.4V5.7c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2H8.5V14h2.3v7z" />
  </svg>
);
export const Instagram = () => (
  <svg {...base} strokeWidth={2.2} className="h-5 w-5"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r=".6" fill="currentColor" /></svg>
);
export const XIcon = () => (
  <svg {...base} strokeWidth={2.4} className="h-5 w-5"><path d="M4 4l16 16M20 4L4 20" /></svg>
);
export const LinkedIn = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" />
    <path fill="#1c1c1c" d="M6.3 10.5V18h2.5v-7.5zM7.5 6.5a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8zM10.8 10.5V18h2.5v-4c0-1 .5-1.7 1.4-1.7s1.3.7 1.3 1.7v4H18v-4.5c0-2-1-3.2-2.7-3.2-1 0-1.7.5-2.1 1.1v-.9z" />
  </svg>
);
export const YouTube = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M21.5 7.2a2.5 2.5 0 0 0-1.7-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4A2.5 2.5 0 0 0 2.5 7.2C2 8.700 2 12 2 12s0 3.300.5 4.800a2.500 2.500 0 0 0 1.700 1.800C5.700 19 12 19 12 19s6.300 0 7.800-.400a2.500 2.500 0 0 0 1.700-1.800c.5-1.500.5-4.800.5-4.800s0-3.300-.5-4.800zM10 15V9l5.200 3z" /></svg>
);
