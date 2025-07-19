'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Bars3Icon, 
  XMarkIcon, 
  HomeIcon, 
  UserGroupIcon, 
  ClipboardDocumentListIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg border-b-2 border-primary-100" role="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">🏠</span>
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:block">
                Senior Welfare Guide
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/" className="senior-nav-link flex items-center space-x-2">
              <span className="text-2xl">🏠</span>
              <span>Home</span>
            </a>
            
            <a href="/recommendation" className="senior-nav-link flex items-center space-x-2">
              <span className="text-2xl">👥</span>
              <span>Find Benefits</span>
            </a>
            
            <a href="/programs" className="senior-nav-link flex items-center space-x-2">
              <span className="text-2xl">📋</span>
              <span>All Programs</span>
            </a>
            
            {/* Emergency Contact */}
            <a
              href="tel:055-860-8000"
              className="senior-button-primary flex items-center space-x-2 bg-red-600 hover:bg-red-700"
            >
              <span className="text-xl">📞</span>
              <span className="hidden lg:inline">Emergency</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
} 