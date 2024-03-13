import React from 'react'
function Header() {
  return (
    <nav className='min-h-100px flex items-center'>
            <div>
            <h4 className=' text-3xl'>LOGO</h4>
            </div>

            <div className='ml-auto flex gap-8'>
                <div>Link 1</div>
                <div>Link 2</div>
                <div>Link 3</div>
            </div>

    </nav>
  )
}

export default Header