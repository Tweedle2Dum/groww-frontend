import React from 'react';

function Header() {
  return (
    <nav className='py-6 px-6 flex items-center flex-wrap'>
      <div className='flex items-center justify-center  w-full md:justify-between '>
        <div className='max-w-[200px] ml-[50%] mr-[50%]'>
          <h4 className='text-3xl'>LOGO</h4>
        </div>

        <div className='ml-auto flex gap-8'>
          {/* Show links only on medium and larger screens */}
          <div className='hidden md:flex gap-6'>
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
