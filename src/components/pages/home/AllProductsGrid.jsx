"use client";

import { useMemo, useState } from 'react';
import Image from 'next/image';

import { allProducts } from './productData';

const categories = [
  { label: "All", value: "all" },
  { label: "Men", value: "men" },
  { label: "Women", value: "women" },
  { label: "New", value: "new" },
];

export default function AllProductsGrid() {
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("low-high");
  const [selectedSizes, setSelectedSizes] = useState({});

  const products = useMemo(() => {
    return [...allProducts]
      .filter(product => category === "all" || product.category === category)
      .sort((a, b) => sortOrder === "low-high" ? a.price - b.price : b.price - a.price);
  }, [category, sortOrder]);

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  return (
    <section className="relative overflow-hidden bg-[#080808] py-20 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c5a059]/30 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 48%)', backgroundSize: '12px 12px' }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl uppercase tracking-widest text-white font-playfair md:text-5xl">All Products</h2>
            <div className="mt-4 h-px w-32 bg-gradient-to-r from-[#c5a059] to-transparent" />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-2">
              {categories.map(item => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setCategory(item.value)}
                  className={`h-10 border px-4 text-[10px] font-semibold uppercase tracking-[0.22em] transition-all ${
                    category === item.value
                      ? 'border-[#c5a059] bg-[#c5a059] text-black'
                      : 'border-white/10 bg-white/[0.03] text-white/45 hover:border-[#c5a059]/40 hover:text-[#c5a059]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <select
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value)}
              className="h-10 border border-white/10 bg-[#101010] px-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 outline-none transition-all hover:border-[#c5a059]/40 focus:border-[#c5a059]/60"
            >
              <option value="low-high">Low to High</option>
              <option value="high-low">High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:gap-8">
          {products.map(product => (
            <article
              key={product.id}
              className="group/card flex min-h-[430px] flex-col overflow-hidden border border-white/5 bg-[#111111]/75 transition-all duration-500 hover:-translate-y-1 hover:border-[#c5a059]/35 hover:bg-[#141414] sm:min-h-[500px]"
            >
              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[#171717] p-3 sm:p-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="50vw"
                  className="object-contain p-2 transition-transform duration-700 group-hover/card:scale-105 sm:p-4"
                />
              </div>

              <div className="flex flex-1 flex-col p-3 sm:p-5">
                <div className="mb-3 flex flex-wrap gap-1.5 sm:gap-2">
                  {product.badges.map(badge => (
                    <span key={badge} className="border border-white/10 px-2 py-1 text-[8px] uppercase tracking-[0.14em] text-white/35 sm:text-[9px] sm:tracking-[0.18em]">
                      {badge}
                    </span>
                  ))}
                </div>

                <h3 className="min-h-[48px] text-sm leading-snug text-white font-playfair transition-colors group-hover/card:text-[#c5a059] sm:text-xl">
                  {product.name}
                </h3>

                <div className="mt-2 text-base font-semibold text-[#c5a059] sm:text-xl">${product.price.toFixed(2)}</div>

                <div className="mt-4">
                  <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/30 sm:text-[10px]">Sizes</span>
                  <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => handleSizeSelect(product.id, size)}
                        className={`flex h-8 min-w-8 items-center justify-center border px-2 text-[9px] tracking-widest transition-all sm:h-9 sm:min-w-9 sm:text-[10px] ${
                          selectedSizes[product.id] === size
                            ? 'border-[#c5a059] bg-[#c5a059] font-bold text-black'
                            : 'border-white/10 text-white/45 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-auto h-11 w-full border border-[#c5a059]/35 bg-[#c5a059]/10 text-[9px] font-bold uppercase tracking-[0.22em] text-[#c5a059] transition-all duration-300 hover:bg-[#c5a059] hover:text-black sm:h-12 sm:text-[10px] sm:tracking-[0.28em]"
                >
                  Add To Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
