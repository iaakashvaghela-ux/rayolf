"use client";

import Image from 'next/image';

export default function ProductCardShowcase({ product, onSizeSelect, selectedSize }) {
  return (
    <article className="group/card flex h-full min-h-[520px] flex-col overflow-hidden rounded-xl border border-white/5 bg-[#111111]/75 transition-all duration-500 hover:-translate-y-1 hover:border-[#c5a059]/35 hover:bg-[#141414]">
      <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-[#171717] p-5">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-4 transition-transform duration-700 group-hover/card:scale-105"
        />
        <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-[#c5a059]/30 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          {product.badges.map((badge) => (
            <span key={badge} className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-white/35">
              {badge}
            </span>
          ))}
        </div>

        <h3 className="min-h-[56px] text-lg leading-snug text-white font-playfair transition-colors duration-300 group-hover/card:text-[#c5a059]">
          {product.name}
        </h3>

        <div className="mt-3 text-xl font-semibold text-[#c5a059]">${product.price.toFixed(2)}</div>

        <div className="mt-5">
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/30">Select Size</span>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => onSizeSelect(product.id, size)}
                className={`flex h-9 min-w-9 items-center justify-center rounded-md border px-2.5 text-[10px] tracking-widest transition-all duration-300 ${
                  selectedSize === size
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
          className="mt-auto flex h-12 w-full items-center justify-center border border-[#c5a059]/35 bg-[#c5a059]/10 text-[10px] font-bold uppercase tracking-[0.28em] text-[#c5a059] transition-all duration-300 hover:bg-[#c5a059] hover:text-black"
        >
          Add To Cart
        </button>
      </div>
    </article>
  );
}
