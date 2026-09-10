/**
 * doodles
 * Kumpulan SVG doodle bergaya hand-drawn (garis tipis, sedikit tidak
 * sempurna, organik). Semua menggunakan currentColor / CSS var supaya
 * warnanya mengikuti tema. Dipakai lewat helper `doodle(name)` yang
 * mengembalikan markup SVG siap pakai.
 */
const doodles = {
  flowerSmall: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 22c-1-6-6-10-9-8s0 9 5 11" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M30 22c1-6 6-10 9-8s0 9-5 11" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M30 22c5-2 11 0 12 4s-6 6-11 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M30 22c-5-2-11 0-12 4s6 6 11 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    <circle cx="30.5" cy="24" r="3.4" stroke="currentColor" stroke-width="1.4"/>
    <path d="M29 30c-1 8-3 13-2 20" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
    <path d="M28 40c-3 0-6 2-7 5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
  </svg>`,

  leaf: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 46c8-1 24-6 30-24-14 2-27 8-30 24Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="M16 44c8-9 16-15 26-22" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
  </svg>`,

  heartSmall: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 33S6 24 6 14.5C6 9 10 6 14 6c3 0 5.5 1.8 6 4 0.5-2.2 3-4 6-4 4 0 8 3 8 8.5C34 24 20 33 20 33Z"
      stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  </svg>`,

  star: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6c1 6 2 8 8 9-6 1-7 3-8 9-1-6-2-8-8-9 6-1 7-3 8-9Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
    <path d="M31 24c0.5 2.5 1 3 3.5 3.5-2.5 0.5-3 1-3.5 3.5-0.5-2.5-1-3-3.5-3.5 2.5-0.5 3-1 3.5-3.5Z" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/>
  </svg>`,

  ring: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="34" r="11" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="38" cy="34" r="11" stroke="currentColor" stroke-width="1.5"/>
    <path d="M27 15l4 8 4-8-4-4-4 4Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
  </svg>`,

  envelope: `<svg viewBox="0 0 60 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="54" height="36" rx="2" stroke="currentColor" stroke-width="1.4"/>
    <path d="M4 6l26 20L56 6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  ribbon: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 14c-3-6-13-6-13 1 0 8 13 9 13 9s13-1 13-9c0-7-10-7-13-1Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="M30 24v22" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M30 46l-6 8M30 46l6 8" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
  </svg>`,

  bird: `<svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 26c4-8 12-12 18-9-2 1-4 3-4 5 6-2 12 0 15 6-5-1-8 0-10 3-6 3-14 2-19-5Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
    <circle cx="16" cy="20" r="1" fill="currentColor"/>
  </svg>`,

  cloud: `<svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 30c-7 0-11-8-4-11 1-6 11-9 15-3 5-4 14-1 13 5 6 0 8 8 1 9H18Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
  </svg>`,

  sun: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="10" stroke="currentColor" stroke-width="1.4"/>
    <path d="M30 8v6M30 46v6M8 30h6M46 30h6M14 14l4 4M42 42l4 4M46 14l-4 4M18 42l-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
  </svg>`,

  moon: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36 12c-11 1-19 10-19 21 0 11 9 20 20 20 6 0 11-2 15-6-14 1-24-10-24-22 0-6 3-11 8-13Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  </svg>`,

  house: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 30l18-14 18 14" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 27v18h28V27" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="M26 45V33h8v12" stroke="currentColor" stroke-width="1.3"/>
  </svg>`,

  wildflower: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 78c-2-20-1-34 3-52" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
    <path d="M31 26c-6-4-8-12-4-16 4-4 10 2 8 9" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
    <circle cx="31" cy="16" r="6" stroke="currentColor" stroke-width="1.3"/>
    <path d="M22 50c-5 1-9-2-9-6M22 50c1 5-2 9-6 9" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
  </svg>`,

  wave: `<svg viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12c8-9 16-9 24 0s16 9 24 0 16-9 24 0 16 9 24 0 16-9 24 0 16 9 24 0 16-9 24 0 16 9 24 0"
      stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
  </svg>`,

  sparkles: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 10c0.6 3 1.4 3.8 4.4 4.4-3 0.6-3.8 1.4-4.4 4.4-0.6-3-1.4-3.8-4.4-4.4C12.6 13.8 13.4 13 14 10Z" stroke="currentColor" stroke-width="1"/>
    <path d="M40 32c0.8 4 1.8 5 5.8 5.8-4 0.8-5 1.8-5.8 5.8-0.8-4-1.8-5-5.8-5.8 4-0.8 5-1.8 5.8-5.8Z" stroke="currentColor" stroke-width="1"/>
    <path d="M46 12c0.4 2 0.9 2.5 2.9 2.9-2 0.4-2.5 0.9-2.9 2.9-0.4-2-0.9-2.5-2.9-2.9 2-0.4 2.5-0.9 2.9-2.9Z" stroke="currentColor" stroke-width="1"/>
  </svg>`,

  couple: `<svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 70V50c0-9 7-14 10-14s10 5 10 14v20" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
    <circle cx="42" cy="28" r="7" stroke="currentColor" stroke-width="1.3"/>
    <path d="M58 70V50c0-9 7-14 10-14s10 5 10 14v20" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
    <circle cx="68" cy="28" r="7" stroke="currentColor" stroke-width="1.3"/>
    <path d="M50 58c1-2 3-2 4 0" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
  </svg>`,

  arrowCurved: `<svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8c20 0 30 14 20 30-6 10-20 12-30 6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
    <path d="M2 38l-6 8 10 2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  calendar: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="36" height="32" rx="3" stroke="currentColor" stroke-width="1.5"/>
    <path d="M6 19h36" stroke="currentColor" stroke-width="1.5"/>
    <path d="M15 6v8M33 6v8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M14 28l3 3 6-7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  clock: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="17" stroke="currentColor" stroke-width="1.5"/>
    <path d="M24 14v10l7 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  pin: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 44s14-14.5 14-24.5C38 11 32 5 24 5S10 11 10 19.5C10 29.5 24 44 24 44Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    <circle cx="24" cy="19" r="5" stroke="currentColor" stroke-width="1.4"/>
  </svg>`,
};

function doodle(name, className = "") {
  const markup = doodles[name] || "";
  return `<span class="doodle ${className}" aria-hidden="true">${markup}</span>`;
}
