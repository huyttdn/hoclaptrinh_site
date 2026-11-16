import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: "false" as const,
    ...props,
  };
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function CheckCircle(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function Star(props: IconProps) {
  return (
    <svg {...base({ strokeWidth: 0, fill: "currentColor", ...props })}>
      <path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9L12 2.6Z" />
    </svg>
  );
}

export function Quote(props: IconProps) {
  return (
    <svg {...base({ strokeWidth: 0, fill: "currentColor", ...props })}>
      <path d="M9.5 5.5C6.4 6.8 4.6 9.4 4.6 12.4c0 3 1.7 5.1 4.2 5.1 2.2 0 3.8-1.5 3.8-3.6 0-2-1.4-3.4-3.3-3.4-.3 0-.7 0-1 .2.4-1.4 1.4-2.6 2.8-3.4l-1.6-1.8Zm9 0c-3.1 1.3-4.9 3.9-4.9 6.9 0 3 1.7 5.1 4.2 5.1 2.2 0 3.8-1.5 3.8-3.6 0-2-1.4-3.4-3.3-3.4-.3 0-.7 0-1 .2.4-1.4 1.4-2.6 2.8-3.4l-1.6-1.8Z" />
    </svg>
  );
}

export function ChevronLeft(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m15 6-6 6 6 6" />
    </svg>
  );
}

export function ChevronRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function Compass(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2.1 5-4.9 2 2.1-5 4.9-2Z" />
    </svg>
  );
}

export function Layers(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </svg>
  );
}

export function Code(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m14 5-4 14" />
    </svg>
  );
}

export function TrendingUp(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  );
}

export function Users(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
      <path d="M16 3.1a4 4 0 0 1 0 7.8" />
    </svg>
  );
}

export function Target(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

export function ShieldCheck(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3 4.5 6v5.5c0 4.4 3 8.5 7.5 9.5 4.5-1 7.5-5.1 7.5-9.5V6L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Sparkles(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m12 3 1.2 3.6L17 8l-3.8 1.4L12 13l-1.2-3.6L7 8l3.8-1.4L12 3Z" />
      <path d="m18.5 14 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
      <path d="m5 14 .6 1.9 1.9.6-1.9.6L5 19l-.6-1.9L2.5 16.5l1.9-.6L5 14Z" />
    </svg>
  );
}

export function Heart(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 22l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6.6 3h2.7l1.4 4-2 1.4a13 13 0 0 0 6.9 6.9l1.4-2 4 1.4v2.7A2.6 2.6 0 0 1 18.4 20 15.4 15.4 0 0 1 3 4.6 2.6 2.6 0 0 1 5.6 2h1Z" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 10c0 5.2-8 12-8 12S4 15.2 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function Clock(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function Linkedin(props: IconProps) {
  return (
    <svg {...base({ strokeWidth: 1.6, ...props })}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7" />
      <path d="M8 7v.01" />
      <path d="M12 17v-4a3 3 0 0 1 6 0v4" />
      <path d="M12 10v7" />
    </svg>
  );
}

export function XSocial(props: IconProps) {
  return (
    <svg {...base({ strokeWidth: 0, fill: "currentColor", ...props })}>
      <path d="M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.8-6.2L5.4 21H2.3l7.3-8.3L2 3h6.4l4.3 5.7L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z" />
    </svg>
  );
}

export function Dribbble(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M5.4 7.5c3.7 1.2 8.5 1 12.8-1" />
      <path d="M3.7 13.5c4.5-2.7 9.6-2.3 14.6 1.6" />
      <path d="M8.5 3.5c3 3.6 5.5 8.5 6.5 16" />
    </svg>
  );
}

export function Instagram(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5v.01" />
    </svg>
  );
}

export function Terminal(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="m7.5 9 3 3-3 3" />
      <path d="M13 15h4" />
    </svg>
  );
}

export function Database(props: IconProps) {
  return (
    <svg {...base(props)}>
      <ellipse cx="12" cy="5.5" rx="7" ry="3" />
      <path d="M5 5.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      <path d="M5 11.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  );
}

export function Rocket(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3c3.5 1.5 5.5 4.7 5.5 8.5 0 1.6-.3 3-1 4.3l-4.5-1.3-4.5 1.3c-.7-1.3-1-2.7-1-4.3C6.5 7.7 8.5 4.5 12 3Z" />
      <circle cx="12" cy="9.5" r="1.7" />
      <path d="M9.5 15.5 8 21l4-1.5 4 1.5-1.5-5.5" />
    </svg>
  );
}

export function GraduationCap(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m12 4 9 4.5-9 4.5-9-4.5L12 4Z" />
      <path d="M7 10.5V16c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-5.5" />
      <path d="M21 8.5V14" />
    </svg>
  );
}

export function BookOpen(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 6.5C10.5 5.2 8.3 4.5 5 4.5v13c3.3 0 5.5.7 7 2 1.5-1.3 3.7-2 7-2v-13c-3.3 0-5.5.7-7 2Z" />
      <path d="M12 6.5v13" />
    </svg>
  );
}

export function Facebook(props: IconProps) {
  return (
    <svg {...base({ strokeWidth: 0, fill: "currentColor", ...props })}>
      <path d="M13.5 21v-7h2.4l.4-2.9h-2.8V9.3c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8v2.9h2.5V21h3Z" />
    </svg>
  );
}

export function Youtube(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="6" width="18" height="12" rx="3.5" />
      <path d="m11 9.5 4 2.5-4 2.5v-5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Github(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 19c-4.5 1.4-4.5-2.3-6-2.8m12 5.3v-3.6c0-1 .1-1.4-.5-2 2.8-.3 5.6-1.4 5.6-6.1 0-1.2-.4-2.3-1.1-3.1.3-.9.2-2-.1-2.8 0 0-.9-.3-3 1.1a10.4 10.4 0 0 0-5.6 0C7.3 3.6 6.4 3.9 6.4 3.9c-.3.8-.4 1.9-.1 2.8-.7.8-1.1 1.9-1.1 3.1 0 4.7 2.8 5.8 5.6 6.1-.4.4-.5.9-.5 1.5V21" />
    </svg>
  );
}

export function Trash(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
      <path d="M6 7v12a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19V7" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </svg>
  );
}

export function Download(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

export function LogOut(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3" />
      <path d="M10 12H3" />
      <path d="m6 9-3 3 3 3" />
    </svg>
  );
}

export function Lock(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4.5" y="10.5" width="15" height="9.5" rx="2.5" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
      <path d="M12 14.5v2" />
    </svg>
  );
}

export function RefreshCw(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M21 12a9 9 0 0 1-15.4 6.4L3 16" />
      <path d="M3 12a9 9 0 0 1 15.4-6.4L21 8" />
      <path d="M21 4v4h-4" />
      <path d="M3 20v-4h4" />
    </svg>
  );
}

export function Search(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

export function UsersPlus(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M15 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <path d="M18 8v6" />
      <path d="M15 11h6" />
    </svg>
  );
}
