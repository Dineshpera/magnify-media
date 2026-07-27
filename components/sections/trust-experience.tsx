import { trustedBrands } from '@/lib/growth-data';

export function TrustExperience() {
  const brands = [...trustedBrands, ...trustedBrands];
  return (
    <section className="trust-experience" aria-label="Trusted brands">
      <p className="section-kicker">TRUSTED BY BRANDS BUILDING TOMORROW</p>
      <div className="brand-marquee"><div>{brands.map((brand, index) => <span key={`${brand}-${index}`}>{brand}</span>)}</div></div>
    </section>
  );
}
