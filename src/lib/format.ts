import { siteConfig } from '@/config/site';

export const money = (n: number): string => {
  const nf = new Intl.NumberFormat(siteConfig.locale, {
    style: 'currency',
    currency: siteConfig.currencyCode,
    maximumFractionDigits: 0
  });
  return nf.format(n);
};

export const moneyPlain = (n: number): string => {
  const nf = new Intl.NumberFormat(siteConfig.locale, { maximumFractionDigits: 0 });
  return `${siteConfig.currencySymbol}${nf.format(n)}`;
};

export const cuotasOf = (n: number, cuotas = 12): string => {
  const per = Math.round(n / cuotas);
  return `${cuotas} cuotas sin interés de ${moneyPlain(per)}`;
};

export const percentOff = (price: number, old: number): number =>
  Math.max(1, Math.round(((old - price) / old) * 100));
