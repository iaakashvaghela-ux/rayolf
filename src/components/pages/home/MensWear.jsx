"use client";

import ProductCollectionSection from '@/components/common/ProductCollectionSection';
import { mensWearProducts } from './productData';

export default function MensWear() {
  return (
    <ProductCollectionSection
      title="Men's Wear"
      watermark="MEN"
      products={mensWearProducts}
      buttonText="Explore Men's Wear"
    />
  );
}
