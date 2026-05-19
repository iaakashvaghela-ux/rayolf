"use client";

import ProductCollectionSection from '@/components/common/ProductCollectionSection';
import { newCollectionProducts } from './productData';

export default function NewCollections() {
  return (
    <ProductCollectionSection
      title="New Collections"
      watermark="RAYOLF"
      products={newCollectionProducts}
      buttonText="Explore All Collections"
    />
  );
}
