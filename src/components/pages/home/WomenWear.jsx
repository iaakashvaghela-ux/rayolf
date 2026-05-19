"use client";

import ProductCollectionSection from '@/components/common/ProductCollectionSection';
import { womensWearProducts } from './productData';

export default function WomenWear() {
  return (
    <ProductCollectionSection
      title="Women's Wear"
      watermark="WOMEN"
      products={womensWearProducts}
      buttonText="Explore Women's Wear"
    />
  );
}
