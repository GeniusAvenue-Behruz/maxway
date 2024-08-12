import React from 'react'
import callCenter from '../call-center.svg'
import shopIcon from '../shopIcon.svg'
export const Header = () => {
    return (
        <header className='header'>
            <div className='container flex items-center justify-between'>
                <nav className='header__nav flex w-full justify-between items-center'>
                    <a href="!">
                        <img src='logo.svg' alt='logo' />
                    </a>
                    <ul className='header__nav-menu flex justify-between items-center gap-10'>
                        <li><a href='#!'>Menyu</a></li>
                        <li><a href='#!'>Bolalar Uchun</a></li>
                        <li><a href='#!'>Filiallar</a></li>
                    </ul>
                    <div className='contact-detatils flex w-full'>
                    <div className='call-center flex content-start items-center mr-20'>
                        <img className='mr-4' src={callCenter}alt='call center' />
                        <div className=''>
                            <span className='text-[12px]'>(+99871)</span>
                            <h1 className='text-2xl font-bold'>200-54-00</h1>
                        </div>
                    </div>
                    <div className='profile flex content-start items-center'>
                        <img className='mr-4' src={shopIcon} alt="Shop Icon"/>
                        <div className=''>
                            <h1 className='text-2xl'>Korzina</h1>
                            <span className='text-[12px]'>125, 400 UZS</span>                            
                        </div>
                    </div>
                </div>
                </nav>
                
            </div>
        </header>
    )
}

export default Header
