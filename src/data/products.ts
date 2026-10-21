import type { CategoryKey } from './categories';
import { slug } from './slug';

export type Badge = 'NEW' | 'HOT' | 'SALE';

export interface Product {
  id: string;
  name: string;
  category: CategoryKey;
  price: number;
  oldPrice?: number;
  badge?: Badge;
  featured?: boolean;
  heroHighlight?: boolean;
}

const p = (
  name: string,
  category: CategoryKey,
  price: number,
  opts: Partial<Omit<Product, 'id' | 'name' | 'category' | 'price'>> = {}
): Product => ({
  id: slug(name),
  name,
  category,
  price,
  ...opts
});

export const products: Product[] = [
  // ===== iPhone =====
  p('iPhone 18 Pro Max', 'iphone', 4500000, { oldPrice: 4800000, badge: 'NEW' }),
  p('iPhone 18 Pro', 'iphone', 3900000, { badge: 'NEW' }),
  p('iPhone 17 Pro Max', 'iphone', 3500000, { badge: 'HOT', featured: true, heroHighlight: true }),
  p('iPhone 17 Pro', 'iphone', 3100000, { badge: 'HOT', featured: true }),
  p('iPhone 17', 'iphone', 2600000, { featured: true }),
  p('iPhone 16 Pro Max', 'iphone', 2900000),
  p('iPhone 16 Pro', 'iphone', 2500000),
  p('iPhone 16 Plus', 'iphone', 2100000),
  p('iPhone 16', 'iphone', 1900000, { oldPrice: 2100000, badge: 'SALE' }),
  p('iPhone 15 Pro Max', 'iphone', 2400000),
  p('iPhone 15 Pro', 'iphone', 2100000, { oldPrice: 2400000, badge: 'SALE' }),
  p('iPhone 15 Plus', 'iphone', 1750000),
  p('iPhone 15', 'iphone', 1600000),
  p('iPhone 14 Pro Max', 'iphone', 1900000),
  p('iPhone 14 Pro', 'iphone', 1700000),
  p('iPhone 14 Plus', 'iphone', 1400000),
  p('iPhone 14', 'iphone', 1250000),
  p('iPhone 13 Pro Max', 'iphone', 1500000),
  p('iPhone 13 Pro', 'iphone', 1300000),
  p('iPhone 13 Mini', 'iphone', 950000),
  p('iPhone 13', 'iphone', 1050000),
  p('iPhone 12 Pro Max', 'iphone', 1200000),
  p('iPhone 12 Pro', 'iphone', 1050000),
  p('iPhone 12 Mini', 'iphone', 780000),
  p('iPhone 12', 'iphone', 870000),
  p('iPhone 11 Pro Max', 'iphone', 950000),
  p('iPhone 11 Pro', 'iphone', 820000),
  p('iPhone 11', 'iphone', 650000, { badge: 'SALE', oldPrice: 780000 }),

  // ===== MacBook =====
  p('MacBook Pro M5 PRO 16"', 'macbook', 7500000, { badge: 'NEW', featured: true, heroHighlight: true }),
  p('MacBook Pro M5 PRO 14"', 'macbook', 6200000, { badge: 'NEW', featured: true }),
  p('MacBook Pro M5 16"', 'macbook', 5800000, { featured: true }),
  p('MacBook Pro M5 14"', 'macbook', 4800000, { badge: 'NEW', featured: true }),
  p('MacBook Air M5 15"', 'macbook', 3400000, { badge: 'NEW', featured: true }),
  p('MacBook Air M5 13"', 'macbook', 2900000, { badge: 'NEW' }),
  p('MacBook Pro M4 MAX 16"', 'macbook', 7200000),
  p('MacBook Pro M4 PRO 16"', 'macbook', 5900000),
  p('MacBook Pro M4 PRO 14"', 'macbook', 4800000),
  p('MacBook Pro M4 14"', 'macbook', 4000000),
  p('MacBook Air M4 15"', 'macbook', 2600000, { featured: true }),
  p('MacBook Air M4 13"', 'macbook', 2200000, { oldPrice: 2500000, badge: 'SALE', featured: true }),
  p('MacBook Pro M3 MAX 16.2"', 'macbook', 6800000),
  p('MacBook Pro M3 MAX 14"', 'macbook', 5500000),
  p('MacBook Pro M3 PRO 16"', 'macbook', 5200000),
  p('MacBook Pro M3 PRO 14"', 'macbook', 4200000),
  p('MacBook Pro M3 14"', 'macbook', 3400000),
  p('MacBook Air M3 15"', 'macbook', 2200000, { oldPrice: 2500000, badge: 'SALE' }),
  p('MacBook Air M3 13.6"', 'macbook', 1900000),
  p('MacBook Pro M2 PRO 16.2"', 'macbook', 4800000),
  p('MacBook Pro M2 MAX 16.2"', 'macbook', 5500000),
  p('MacBook Pro M2 MAX 14"', 'macbook', 4800000),
  p('MacBook Pro M2 16.2"', 'macbook', 3800000),
  p('MacBook Pro M2 14.2"', 'macbook', 3200000),
  p('MacBook Pro M2 13.3"', 'macbook', 2500000),
  p('MacBook Air M2 15"', 'macbook', 1700000),
  p('MacBook Air M2 13.6"', 'macbook', 1500000, { oldPrice: 1800000, badge: 'SALE' }),
  p('MacBook Air M1 13.6"', 'macbook', 1250000, { oldPrice: 1500000, badge: 'SALE' }),
  p('MacBook Pro M1 16.2"', 'macbook', 3200000),
  p('MacBook Pro i5 13"', 'macbook', 850000, { badge: 'SALE' }),
  p('MacBook NEO A18 Pro 13"', 'macbook', 1700000),

  // ===== PlayStation =====
  p('PlayStation 5 Pro', 'playstation', 1500000, { badge: 'HOT', featured: true, heroHighlight: true }),
  p('PlayStation 5 Disc Slim', 'playstation', 1100000, { featured: true }),
  p('PlayStation 5 Digital Slim', 'playstation', 950000, { featured: true }),
  p('PlayStation 5 Disc Slim + Spiderman 2 Bundle', 'playstation', 1200000),
  p('PlayStation 5 Disc Slim + FIFA 24', 'playstation', 1250000),
  p('PlayStation 5 Disc Slim + Fornite', 'playstation', 1100000),
  p('PlayStation 5 Disc Slim + Returnal + Ratchet and Clank', 'playstation', 1300000),
  p('PlayStation 5 Digital Slim + Spiderman 2 Bundle', 'playstation', 1100000),
  p('PlayStation 5 Digital Slim + Returnal + Ratchet and Clank', 'playstation', 1150000),
  p('PlayStation 5 Disc Slim Double Controller', 'playstation', 1300000),
  p('PlayStation 5 Digital Slim Double Controller', 'playstation', 1150000),
  p('PlayStation 5 Headset Pulse 3D', 'playstation', 220000),
  p('PlayStation 5 Pulse Explorer', 'playstation', 180000),
  p('PlayStation 5 Dual Charge Station', 'playstation', 65000),
  p('PlayStation 4 Slim', 'playstation', 450000),
  p('PlayStation 4 + Call of Duty Bundle', 'playstation', 490000),
  p('PlayStation 4 + God of War Bundle', 'playstation', 490000),

  // ===== Joysticks =====
  p('Joystick PlayStation 5 Edge', 'joysticks', 320000),
  p('Joystick PlayStation 5', 'joysticks', 125000),
  p('Joystick PlayStation 4', 'joysticks', 90000),

  // ===== Portal =====
  p('Portal Remote Player PS5', 'portal', 450000),

  // ===== Nintendo =====
  p('Nintendo Switch 2', 'nintendo', 950000, { badge: 'NEW', featured: true, heroHighlight: true }),
  p('Nintendo Switch OLED Mario Bros Edition', 'nintendo', 650000),
  p('Nintendo Switch OLED Neon White', 'nintendo', 580000),
  p('Nintendo Switch OLED Pokemon Edition', 'nintendo', 650000),
  p('Nintendo Switch OLED Splatoon 3 Edition', 'nintendo', 650000),
  p('Nintendo Switch OLED Zelda Edition', 'nintendo', 680000),
  p('Joycon Nintendo Red Blue', 'nintendo', 150000),

  // ===== iPad =====
  p('iPad Pro M5 13" Wi-Fi', 'ipad', 3200000, { badge: 'NEW', featured: true }),
  p('iPad Pro M5 11" Wi-Fi', 'ipad', 2500000, { badge: 'NEW', featured: true }),
  p('iPad Pro M4 13" Wi-Fi', 'ipad', 2800000),
  p('iPad Pro M4 11" Wi-Fi', 'ipad', 2200000),
  p('iPad Pro M2 12" Wi-Fi', 'ipad', 1900000),
  p('iPad Pro M2 11" Wi-Fi', 'ipad', 1500000),
  p('iPad Air M4 13" Wi-Fi', 'ipad', 1500000, { featured: true }),
  p('iPad Air M4 11" Wi-Fi', 'ipad', 1200000, { featured: true }),
  p('iPad Air M3 13" Wi-Fi', 'ipad', 1350000),
  p('iPad Air M3 11" Wi-Fi', 'ipad', 1050000),
  p('iPad Air M2 13" Wi-Fi', 'ipad', 1200000),
  p('iPad Air M2 11" Wi-Fi', 'ipad', 950000),
  p('iPad Air 5th Gen Wi-Fi', 'ipad', 850000),
  p('iPad A16 11" Wi-Fi', 'ipad', 650000, { badge: 'NEW' }),
  p('iPad 10.9 10th Gen Wi-Fi', 'ipad', 550000, { oldPrice: 650000, badge: 'SALE' }),
  p('iPad 10.2 9th Gen Wi-Fi+Celular', 'ipad', 650000),
  p('iPad 10.2 9th Gen Wi-Fi', 'ipad', 480000),
  p('iPad Mini 7th Gen Wi-Fi', 'ipad', 800000),
  p('iPad Mini 6th Gen Wi-Fi', 'ipad', 650000),

  // ===== Apple Watch =====
  p('Apple Watch Ultra 3 GPS', 'apple-watch', 1500000, { badge: 'NEW', featured: true }),
  p('Apple Watch Ultra 2 GPS', 'apple-watch', 1200000, { featured: true }),
  p('Apple Watch Series 11 46mm', 'apple-watch', 950000, { badge: 'NEW', featured: true }),
  p('Apple Watch Series 11 42mm', 'apple-watch', 850000, { badge: 'NEW' }),
  p('Apple Watch Series 12 46mm', 'apple-watch', 1050000, { badge: 'NEW' }),
  p('Apple Watch Series 12 42mm', 'apple-watch', 950000, { badge: 'NEW' }),
  p('Apple Watch Series 10 46mm', 'apple-watch', 780000),
  p('Apple Watch Series 10 46mm GPS', 'apple-watch', 720000),
  p('Apple Watch Series 10 42mm', 'apple-watch', 720000),
  p('Apple Watch Series 10 42mm GPS', 'apple-watch', 650000),
  p('Apple Watch SE 3 44mm', 'apple-watch', 500000),
  p('Apple Watch SE 3 40mm', 'apple-watch', 450000),
  p('Apple Watch SE 2 44mm GPS', 'apple-watch', 380000),
  p('Apple Watch SE 2 44mm', 'apple-watch', 420000),
  p('Apple Watch SE 2 40mm GPS', 'apple-watch', 350000),
  p('Apple Watch SE 2 40mm', 'apple-watch', 380000),
  p('Apple Watch Series 9 45mm CEL+GPS', 'apple-watch', 650000),
  p('Apple Watch Series 9 45mm GPS', 'apple-watch', 580000),
  p('Apple Watch Series 9 41mm CEL+GPS', 'apple-watch', 600000),
  p('Apple Watch Series 9 41mm GPS', 'apple-watch', 530000),
  p('Wristband Apple Watch Series 10 46mm Black S/M', 'apple-watch', 35000),

  // ===== AirPods =====
  p('AirPods Pro 3rd Gen', 'airpods', 450000, { badge: 'NEW', featured: true }),
  p('AirPods Pro 2nd Gen USB-C', 'airpods', 380000, { featured: true }),
  p('AirPods Pro 2nd Gen Lightning', 'airpods', 350000),
  p('AirPods 4th Gen W/Noise Cancel', 'airpods', 320000),
  p('AirPods 4th Gen', 'airpods', 250000),
  p('AirPods 3rd Gen', 'airpods', 230000),
  p('AirPods 2nd Gen', 'airpods', 180000),
  p('AirPods 5', 'airpods', 300000, { badge: 'NEW' }),
  p('AirPods 5 ANC', 'airpods', 380000, { badge: 'NEW' }),
  p('AirPods Max', 'airpods', 950000),

  // ===== Samsung =====
  p('Samsung Galaxy S26 Ultra', 'samsung', 2800000, { badge: 'NEW', featured: true, heroHighlight: true }),
  p('Samsung Galaxy S26', 'samsung', 2000000, { badge: 'NEW', featured: true }),
  p('Samsung Galaxy S25 Ultra', 'samsung', 2500000, { featured: true }),
  p('Samsung Galaxy S25', 'samsung', 1700000),
  p('Samsung Galaxy S24 Ultra', 'samsung', 2100000, { oldPrice: 2400000, badge: 'SALE' }),
  p('Samsung Galaxy S24', 'samsung', 1400000),
  p('Samsung Galaxy S23 Ultra', 'samsung', 1600000),
  p('Samsung Galaxy Z FLIP 7', 'samsung', 2200000),
  p('Samsung Galaxy A56', 'samsung', 650000),
  p('Samsung Galaxy A55', 'samsung', 580000),
  p('Samsung Galaxy A58', 'samsung', 650000),
  p('Samsung Galaxy A36', 'samsung', 480000),
  p('Samsung Galaxy A35', 'samsung', 450000),
  p('Samsung Galaxy A16', 'samsung', 320000),

  // ===== iMac =====
  p('iMac 24" M4', 'imac', 2600000, { featured: true }),
  p('iMac 24" M3', 'imac', 2200000),
  p('iMac 24" M1', 'imac', 1500000, { oldPrice: 1800000, badge: 'SALE' }),

  // ===== Mac mini =====
  p('Mac mini M4 Pro', 'mac-mini', 2800000, { badge: 'NEW' }),
  p('Mac mini M4', 'mac-mini', 1600000, { badge: 'NEW', featured: true }),
  p('Mac mini', 'mac-mini', 950000),

  // ===== Mac Studio =====
  p('Mac Studio M4 Max', 'mac-studio', 6500000),

  // ===== Apple TV =====
  p('Apple TV 4K Wi-Fi + Ethernet', 'apple-tv', 350000),
  p('Apple TV 4K Wi-Fi', 'apple-tv', 300000),

  // ===== HomePod =====
  p('HomePod Mini', 'homepod', 220000),

  // ===== Apple Pencil =====
  p('Apple Pencil Pro', 'apple-pencil', 220000),
  p('Apple Pencil 2nd Gen', 'apple-pencil', 150000),
  p('Apple Pencil 1st Gen USB-C', 'apple-pencil', 95000),
  p('Apple Pencil 1st Gen', 'apple-pencil', 110000),

  // ===== AirTag =====
  p('AirTag Pack x4', 'airtag', 180000),
  p('AirTag', 'airtag', 55000),

  // ===== Accesorios Apple =====
  p('Magic Keyboard Pro M4 13"', 'accesorios', 950000),
  p('Magic Keyboard Pro M4 11"', 'accesorios', 850000),
  p('Magic Keyboard Air 13"', 'accesorios', 650000),
  p('Magic Keyboard Air 11"', 'accesorios', 580000),
  p('Magic Keyboard 13"', 'accesorios', 450000),
  p('Magic Keyboard 11"', 'accesorios', 400000),
  p('Magic Keyboard Folio', 'accesorios', 380000),
  p('Magic Mouse 3', 'accesorios', 180000, { badge: 'NEW' }),
  p('Magic Mouse 2', 'accesorios', 150000),
  p('Keyboard Chesona for iPad 10th / 11th Gen', 'accesorios', 220000),
  p('Keyboard Tunkarmor for iPad A16 11th + Mouse', 'accesorios', 240000),

  // ===== GoPro =====
  p('GoPro Hero 12', 'gopro', 720000, { featured: true }),
  p('GoPro Hero 12 Black Enduro', 'gopro', 780000),
  p('GoPro Hero 11', 'gopro', 580000),
  p('GoPro Hero 10', 'gopro', 450000),
  p('GoPro Hero 9', 'gopro', 380000, { oldPrice: 450000, badge: 'SALE' }),

  // ===== Insta360 =====
  p('Insta360 X4 8K', 'insta360', 950000, { badge: 'NEW', featured: true }),
  p('Insta360 X3 Kit Acción', 'insta360', 780000),
  p('Insta360 X3', 'insta360', 650000),

  // ===== Meta =====
  p('Meta Quest 3', 'meta', 950000, { badge: 'NEW', featured: true }),
  p('Meta Quest 2', 'meta', 620000),

  // ===== Google =====
  p('Google Pixel 10', 'google', 1700000, { badge: 'NEW' }),

  // ===== Motorola =====
  p('Motorola Edge 50 Ultra', 'motorola', 1100000),

  // ===== Baseus =====
  p('Baseus GAN5 30W', 'baseus', 45000),

  // ===== Notebooks =====
  p('Dell Inspiron 15 Ryzen 7 7730U 16GB 1TB Touch Carbon Black', 'notebooks', 1300000),
  p('Dell Inspiron 15 i7-1255U 16GB 1TB Carbon Black', 'notebooks', 1250000),

  // ===== Tom Ford =====
  p('Tom Ford Beau De Jour EDP', 'tom-ford', 580000),
  p('Tom Ford Bitter Peach EDP', 'tom-ford', 650000),
  p('Tom Ford Black Orchid', 'tom-ford', 550000),
  p('Tom Ford Café Rose EDP', 'tom-ford', 620000),
  p('Tom Ford Cherry Smoke EDP', 'tom-ford', 650000),
  p('Tom Ford Costa Azzura EDP', 'tom-ford', 580000),
  p('Tom Ford Eau d\'Ombré Leather EDT', 'tom-ford', 480000)
];

export const getByCategory = (c: CategoryKey) =>
  products.filter(x => x.category === c);

export const getById = (id: string) =>
  products.find(x => x.id === id);

export const getFeatured = () =>
  products.filter(x => x.featured);

export const getHeroHighlights = () =>
  products.filter(x => x.heroHighlight);

export const getOnSale = () =>
  products.filter(x => x.badge === 'SALE' || x.oldPrice);

export const getNew = () =>
  products.filter(x => x.badge === 'NEW');

export const categoryCount = (c: CategoryKey) =>
  products.filter(x => x.category === c).length;
