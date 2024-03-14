'use client'
import { useTheme } from '@/Components/Providers/ThemeProvider';
import Image from 'next/image';
import React from 'react';

function Header() {

  const theme = useTheme();
  console.log(theme)
  return (
    <nav className='py-6 px-6 flex items-center flex-wrap'>
      <div className='flex items-center justify-center  w-full  '>
        <div className='max-w-[200px] flex items-center gap-3'>
          <div  className='relative min-h-[48px]  min-w-[48px]'>
            <Image fill src={theme.merchantLogo} alt='Brand Logo'/>
          </div>
          <h4 className='text-3xl'>{theme.merchantName}</h4>
        </div>

        <div className='ml-auto hidden md:flex gap-8'>
          {/* Show links only on medium and larger screens */}
          <div className='flex gap-6'>
            <div>Link 1</div>
            <div>Link 2</div>
            <div>Link 3</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
