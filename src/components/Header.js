import React from 'react';
import callCenter from '../call-center.svg';
import shopIcon from '../shopIcon.svg';
import burger from '../burger.svg'
import pizza from '../pizza.svg'
import kombo from '../kombo.svg'
import PizzaCard from './pizzaCard.js'

function myFunction() {
    let element = document.body;
    console.log(element);
    element.classList.toggle("dark");

    let card = document.getElementById("card");
    console.log(card);
    card.classList.toggle("dark");

}

export const Header = () => {
    return (
        <header className='header realtive mb-20'>
            <div className='container flex justify-between items-center'>
                <nav className='header__nav flex w-full justify-between items-center'>
                    <a href="!">
                        <img src='logo.svg' alt='logo' />
                    </a>
                    <ul className='header__nav-menu flex ml-auto mr-20 justify-between items-center gap-10'>
                        <li><a href='#!'>Menyu</a></li>
                        <li><a href='#!'>Bolalar Uchun</a></li>
                        <li><a href='#!'>Filiallar</a></li>
                        <li><button onClick={myFunction}>Switch mode</button> </li>
                    </ul>
                    <div className='purple-w absolute h-[807px] top-0 right-0 -z-10 bg-[#800A7A]'></div>
                    <div className='contact-details text-white flex w-[40%]'>
                        <div className='call-center flex items-center mx-20'>
                            <img className='mr-4' src={callCenter} alt='call center' />
                            <div className=''>
                                <span className='text-[12px]'>(+99871)</span>
                                <h1 className='text-2xl font-bold'>200-54-00</h1>
                            </div>
                        </div>
                        <div className='profile flex items-center'>
                            <img className='mr-4' src={shopIcon} alt="Shop Icon" />
                            <div className=''>
                                <h1 className='text-2xl font-bold'>Korzina</h1>
                                <span className='text-[12px]'>125, 400 UZS</span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='header__hero container flex justify-start items-center'>
                    <div className='header__hero-text'>
                        <h1 className='min-w-[400px] max-w-[450px] w-full tracking-tight leading-none text-[80px] font-bold '>Siz izlagan
                            mazzali
                            ta’mlar</h1>
                        <p className='max-w-[400px] min-w-[350px] w-full'>When an unknown printer took a galley of type
                            scrambled it to make a type specimen </p>
                    </div>
                    <img src={burger} alt='Burger'/>
                </div>
            <div className='header__hero-hot container flex gap-[30px] -mt-40'>
<PizzaCard 
  bgColor="#F1B301"
  nameColor={"#E76A06" }
  status="Yangi" 
  name="Pit -sa" 
  imgSrc={pizza} 
  imgAlt="Yangi Pizza" 
/>
<PizzaCard 
  bgColor="#800A7A" 
  nameColor={"#FC96F7"}
  status="Svejiy" 
  name="Kom -bo" 
  imgSrc={kombo} 
  imgAlt="Yangi Pizza" 
/>

            </div>
        </header>
    );
}

export default Header;
