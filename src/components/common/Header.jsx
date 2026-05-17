'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navLinks = [
    // { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Menswear', href: '/menswear' },
    { name: 'Womenswear', href: '/womenswear' },
    { name: 'Collections', href: '/collections' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'About Us', href: '/about-us' },
  ]

  return (
    <header className="w-full sticky top-0 z-[100]">
      {/* Top Golden Accent Line - Premium Mix */}
      <div className="h-[4px] w-full bg-gradient-to-r from-[#1a1a1a] via-[#8a6d3b] via-[#c5a059] via-[#8a6d3b] to-[#1a1a1a] shadow-[0_2px_15px_rgba(197,160,89,0.3)]"></div>
      
      <div className="bg-[#0a0a0a]/95 backdrop-blur-md text-white py-4 px-4 md:px-12 flex items-center justify-between border-b border-white/5 relative">
        {/* Mobile Menu Toggle - Left (Visible only on mobile) */}
        <div className="lg:hidden w-1/4">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 -ml-2 text-white/80 hover:text-[#c5a059] transition-colors"
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Logo Section - Center on mobile, Left on desktop */}
        <div className="w-1/2 lg:w-1/4 flex justify-center lg:justify-start">
          <Link href="/" className="relative group">
            <img 
              src="/images/rayolf-logo-white.png" 
              alt="RAYOLF Logo" 
              className="h-8 md:h-14 w-auto object-contain hover:opacity-90 transition-all duration-500 filter drop-shadow-[0_0_8px_rgba(197,160,89,0.2)] group-hover:scale-105" 
            />
          </Link>
        </div>

        {/* Navigation Links - Center Aligned (Desktop Only) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12 text-[13px] tracking-[0.25em] uppercase font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`nav-link relative py-2 transition-all duration-300 ${link.name === 'New Arrivals' ? 'text-[#c5a059]' : 'hover:text-[#c5a059]'}`}
            >
              {link.name}
              {link.name === 'New Arrivals' && (
                <span className="absolute -bottom-0 left-0 w-full h-[1.5px] bg-[#c5a059]"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Actions Section - Right Aligned */}
        <div className="w-1/4 flex justify-end items-center gap-3 md:gap-6 xl:gap-8 text-[11px] tracking-[0.2em] uppercase font-medium">
          <Link href="/profile" className="flex items-center gap-2 group hover:text-[#c5a059] transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#c5a059] transition-colors">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span className="hidden xl:inline">User</span>
          </Link>
          
          <Link href="/wishlist" className="hidden md:flex items-center gap-2 group hover:text-[#c5a059] transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#c5a059] transition-colors">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span className="hidden xl:inline">Wishlist</span>
          </Link>

          <Link href="/cart" className="flex items-center gap-2 group hover:text-[#c5a059] transition-all duration-300 relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#c5a059] transition-colors">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <path d="M3 6h18"></path>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="hidden xl:inline">Cart</span>
            {/* Minimalist Cart Badge */}
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#c5a059] rounded-full lg:hidden"></span>
          </Link>
        </div>
      </div>

      {/* Premium Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] transition-opacity duration-500 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`absolute top-0 left-0 h-full w-[85%] max-w-[400px] bg-[#0a0a0a] shadow-[10px_0_30px_rgba(0,0,0,0.5)] border-r border-white/5 transition-transform duration-500 ease-out flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="p-6 flex items-center justify-between border-b border-white/5">
            <img 
              src="/images/rayolf-logo-white.png" 
              alt="RAYOLF" 
              className="h-8 w-auto object-contain" 
            />
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-white/50 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex-1 overflow-y-auto py-8 px-8 flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center justify-between text-[14px] tracking-[0.3em] uppercase font-light text-white/70 hover:text-[#c5a059] transition-all duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span>{link.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            ))}
          </nav>

          {/* Drawer Footer - Premium Contact/Social */}
          <div className="p-8 border-t border-white/5 space-y-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-medium">Connect with us</span>
              <div className="flex gap-6">
                <a href="#" className="text-white/50 hover:text-[#c5a059] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="text-white/50 hover:text-[#c5a059] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="text-white/50 hover:text-[#c5a059] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-[9px] tracking-[0.1em] text-white/20 uppercase">© 2026 RAYOLF LUXURY. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

