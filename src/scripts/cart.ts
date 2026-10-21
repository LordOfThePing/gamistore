// Client-side cart. Vanilla TS, no framework.
// localStorage key: gamistore:cart = { [productId]: { id, name, price, emoji, qty } }

export interface CartLine {
  id: string;
  name: string;
  price: number;
  emoji: string;
  qty: number;
}

export type Cart = Record<string, CartLine>;

const KEY = 'gamistore:cart';

export const readCart = (): Cart => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

export const writeCart = (c: Cart): void => {
  localStorage.setItem(KEY, JSON.stringify(c));
  window.dispatchEvent(new CustomEvent('cart:change'));
};

export const addToCart = (line: Omit<CartLine, 'qty'>, qty = 1): void => {
  const c = readCart();
  const prev = c[line.id];
  c[line.id] = prev
    ? { ...prev, qty: prev.qty + qty }
    : { ...line, qty };
  writeCart(c);
};

export const setQty = (id: string, qty: number): void => {
  const c = readCart();
  if (!c[id]) return;
  if (qty <= 0) delete c[id];
  else c[id].qty = qty;
  writeCart(c);
};

export const removeFromCart = (id: string): void => {
  const c = readCart();
  delete c[id];
  writeCart(c);
};

export const clearCart = (): void => {
  writeCart({});
};

export const cartCount = (c: Cart = readCart()): number =>
  Object.values(c).reduce((s, l) => s + l.qty, 0);

export const cartTotal = (c: Cart = readCart()): number =>
  Object.values(c).reduce((s, l) => s + l.price * l.qty, 0);
