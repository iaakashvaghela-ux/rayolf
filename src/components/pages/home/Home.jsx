import React from 'react'
import HomeSlider from './HomeSlider'
import NewCollections from './NewCollections'
import MensWear from './MensWear'
import WomenWear from './WomenWear'
import AllProductsGrid from './AllProductsGrid'

export default function Home() {
  return (
    <main>
      <HomeSlider />
      <NewCollections />
      <MensWear />
      <WomenWear />
      <AllProductsGrid />
    </main>
  )
}
