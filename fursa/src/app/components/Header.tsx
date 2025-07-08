'use client';
import Image from 'next/image';
import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [lampOn, setLampOn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

const navItemKeys = ['whyFursa', 'graduatePrograms', 'certifications', 'jobOpportunities'];

const navItems = [
  { href: '/why-fursa', label: 'لماذا فرصة؟' },
  { href: '/gdp-programs', label: 'برامج تطوير الخريجين' },
  { href: '/certifications', label: 'الشهادات الاحترافية' },
  { href: '/job-opportunities', label: 'فرص وظيفية' },
];

  return (
    <div className="relative">
      <div
        className="absolute top-[-10px] left-6 z-50 cursor-pointer"
        onClick={() => setLampOn((prev) => !prev)}
        title={lampOn ? 'إطفاء المصباح' : 'تشغيل المصباح'}
      >
        <Image
          src="/assets/logo.png"
          width={80}
          height={80}
          alt="Lamp Logo"
          className={`rounded-full transition duration-300 ${
            lampOn
              ? 'drop-shadow-[0_0_25px_rgba(255,215,0,0.8)]'
              : 'drop-shadow-none brightness-75'
          }`}
        />
      </div>

      <header className="bg-[#2b3830] backdrop-blur-md shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
         

        <nav className="hidden md:flex space-x-reverse space-x-8">
  {navItems.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className="px-3 py-2 rounded-md text-sm font-medium text-[#e2e2e2] hover:text-[#2b3830] hover:bg-white/70 transition-colors duration-200 cursor-pointer"
    >
      {item.label}
    </Link>
  ))}
</nav>

            <div className="flex items-center space-x-4 space-x-reverse">
                         <LanguageSwitcher />


              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-blue-600 focus:outline-none"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg shadow-lg mt-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-right px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
