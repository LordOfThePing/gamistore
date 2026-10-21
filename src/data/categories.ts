export type CategoryKey =
  | 'iphone' | 'macbook' | 'ipad' | 'apple-watch' | 'airpods'
  | 'playstation' | 'nintendo' | 'samsung' | 'imac' | 'mac-mini'
  | 'mac-studio' | 'apple-tv' | 'homepod' | 'apple-pencil' | 'airtag'
  | 'accesorios' | 'joysticks' | 'gopro' | 'insta360' | 'meta'
  | 'google' | 'motorola' | 'notebooks' | 'baseus' | 'portal' | 'tom-ford';

export interface Category {
  key: CategoryKey;
  name: string;
  emoji: string;
  bgA: string;
  bgB: string;
  tagline: string;
}

export const categories: Record<CategoryKey, Category> = {
  'iphone':       { key: 'iphone',       name: 'iPhone',          emoji: '📱', bgA: '#1c1f26', bgB: '#0a0b0f', tagline: 'La nueva era del iPhone, siempre un paso adelante.' },
  'macbook':      { key: 'macbook',      name: 'MacBook',         emoji: '💻', bgA: '#2a1a2e', bgB: '#0b060e', tagline: 'Potencia extrema. Portabilidad absoluta.' },
  'ipad':         { key: 'ipad',         name: 'iPad',            emoji: '📲', bgA: '#1a2a3a', bgB: '#06101a', tagline: 'Tu lienzo digital, más grande que nunca.' },
  'apple-watch':  { key: 'apple-watch',  name: 'Apple Watch',     emoji: '⌚', bgA: '#2e1a1a', bgB: '#0e0606', tagline: 'Diseñado para vivir, cada minuto cuenta.' },
  'airpods':      { key: 'airpods',      name: 'AirPods',         emoji: '🎧', bgA: '#1a1f3a', bgB: '#06081a', tagline: 'Sonido inmersivo, libertad total.' },
  'playstation':  { key: 'playstation',  name: 'PlayStation',     emoji: '🎮', bgA: '#06183a', bgB: '#02081a', tagline: 'Jugá a lo imposible. PS5 Pro ya disponible.' },
  'nintendo':     { key: 'nintendo',     name: 'Nintendo',        emoji: '🕹️', bgA: '#3a060f', bgB: '#1a0206', tagline: 'La diversión no espera. Switch 2 ya llegó.' },
  'samsung':      { key: 'samsung',      name: 'Samsung',         emoji: '📱', bgA: '#1a1a3a', bgB: '#06061a', tagline: 'Galaxy AI. Innovación coreana en tu bolsillo.' },
  'imac':         { key: 'imac',         name: 'iMac',            emoji: '🖥️', bgA: '#2a1a3a', bgB: '#0a061a', tagline: 'All-in-one. Siete colores. Un solo deseo.' },
  'mac-mini':     { key: 'mac-mini',     name: 'Mac mini',        emoji: '🧊', bgA: '#1a2a3a', bgB: '#06101a', tagline: 'Minúsculo. Monstruoso. Chip M4 inside.' },
  'mac-studio':   { key: 'mac-studio',   name: 'Mac Studio',      emoji: '🖥️', bgA: '#2a1a3a', bgB: '#0a061a', tagline: 'La workstation definitiva.' },
  'apple-tv':     { key: 'apple-tv',     name: 'Apple TV',        emoji: '📺', bgA: '#1a1a1a', bgB: '#060606', tagline: 'Cine, series y gaming en tu living.' },
  'homepod':      { key: 'homepod',      name: 'HomePod',         emoji: '🔊', bgA: '#2a1a1a', bgB: '#0e0606', tagline: 'Audio espacial para tu casa.' },
  'apple-pencil': { key: 'apple-pencil', name: 'Apple Pencil',    emoji: '✏️', bgA: '#2a2a1a', bgB: '#0e0e06', tagline: 'La precisión en tus manos.' },
  'airtag':       { key: 'airtag',       name: 'AirTag',          emoji: '📍', bgA: '#2a2a2a', bgB: '#0a0a0a', tagline: 'Nunca más pierdas lo que importa.' },
  'accesorios':   { key: 'accesorios',   name: 'Accesorios Apple', emoji: '⌨️', bgA: '#1a1a1a', bgB: '#060606', tagline: 'Teclados, mouses y más para tu setup.' },
  'joysticks':    { key: 'joysticks',    name: 'Joysticks',       emoji: '🎮', bgA: '#1a1a3a', bgB: '#06061a', tagline: 'Control total en cada partida.' },
  'gopro':        { key: 'gopro',        name: 'GoPro',           emoji: '📷', bgA: '#3a2a06', bgB: '#1a1206', tagline: 'Capturá tu aventura en 5K.' },
  'insta360':     { key: 'insta360',     name: 'Insta360',        emoji: '📸', bgA: '#1a3a2a', bgB: '#061a0e', tagline: '360° de pura adrenalina.' },
  'meta':         { key: 'meta',         name: 'Meta Quest',      emoji: '🥽', bgA: '#1a1a3a', bgB: '#06061a', tagline: 'Realidad mixta sin cables.' },
  'google':       { key: 'google',       name: 'Google Pixel',    emoji: '📱', bgA: '#1a3a2a', bgB: '#061a0e', tagline: 'Fotografía computacional al máximo.' },
  'motorola':     { key: 'motorola',     name: 'Motorola',        emoji: '📱', bgA: '#1a3a3a', bgB: '#061a1a', tagline: 'Diseño audaz, cámara de 200MP.' },
  'notebooks':    { key: 'notebooks',    name: 'Notebooks',       emoji: '💻', bgA: '#1a1f26', bgB: '#0a0b0f', tagline: 'Rendimiento para trabajar y jugar.' },
  'baseus':       { key: 'baseus',       name: 'Baseus',          emoji: '🔌', bgA: '#1a2a2a', bgB: '#060e0e', tagline: 'Carga rápida, confiable.' },
  'portal':       { key: 'portal',       name: 'Portal',          emoji: '🎮', bgA: '#06183a', bgB: '#02081a', tagline: 'Jugá tu PS5 desde cualquier lugar.' },
  'tom-ford':     { key: 'tom-ford',     name: 'Tom Ford',        emoji: '🧴', bgA: '#2a0a0a', bgB: '#0e0303', tagline: 'Perfumería de autor.' }
};

export const categoryOrder: CategoryKey[] = [
  'iphone', 'macbook', 'ipad', 'apple-watch', 'airpods',
  'playstation', 'nintendo', 'samsung', 'imac', 'mac-mini',
  'google', 'motorola', 'meta', 'gopro', 'insta360',
  'joysticks', 'portal', 'accesorios', 'apple-pencil',
  'apple-tv', 'homepod', 'airtag', 'mac-studio',
  'notebooks', 'baseus', 'tom-ford'
];
