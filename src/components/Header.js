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
        <header className='header relative mb-20'>
    <div className='container flex flex-col md:flex-row justify-between items-center'>
        <nav className='header__nav flex w-full flex-col md:flex-row justify-between items-center'>
            <a href="!">
                <img src='logo.svg' alt='logo' className='w-20 md:w-auto' />
            </a>
            <ul className='header__nav-menu flex flex-col md:flex-row sm:ml-0 md:ml-auto mr-0 md:mr-20 justify-between items-center gap-4 md:gap-10 mt-4 md:mt-0'>
                <li><a href='#!'>Menyu</a></li>
                <li><a href='#!'>Bolalar Uchun</a></li>
                <li><a href='#!'>Filiallar</a></li>
                <li><button onClick={myFunction}>Switch mode</button></li>
            </ul>
            <div className='purple-w hidden md:block absolute h-[300px] md:h-[807px] top-0 right-0 -z-10 bg-[#800A7A]'></div>
            <div className='contact-details md:text-white flex flex-col md:flex-row w-full md:w-[40%] mt-4 md:mt-0 sm:text-black'>
                <div className='call-center flex items-center mx-auto md:mx-20 mb-4 md:mb-0'>
                    <img className='mr-4' src={callCenter} alt='call center' />
                    <div>
                        <span className='text-[12px]'>(+99871)</span>
                        <h1 className='text-2xl font-bold'>200-54-00</h1>
                    </div>
                </div>
                <div className='profile flex items-center mx-auto'>
                    <img className='sm:mr-0 md:mr-4' src={shopIcon} alt="Shop Icon" />
                    <div>
                        <h1 className='text-2xl font-bold'>Korzina</h1>
                        <span className='text-[12px]'>125, 400 UZS</span>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <div className='header__hero container flex flex-col md:flex-row justify-start items-center mt-10 md:mt-0'>
        <div className='header__hero-text'>
            <h1 className='min-w-[250px] max-w-[450px] w-full tracking-tight leading-none text-[40px] md:text-[80px] font-bold'>
                Siz izlagan mazzali ta’mlar
            </h1>
            <p className='max-w-[300px] min-w-[250px] w-full text-[14px] md:text-[16px]'>
                When an unknown printer took a galley of type scrambled it to make a type specimen
            </p>
        </div>
        <img src={burger} alt='Burger' className='w-3/4 md:w-auto mt-8 md:mt-0' />
    </div>
    <div className='header__hero-hot container flex flex-col items-center md:items-start md:flex-row gap-[20px] md:gap-[30px] -mt-20 md:-mt-30'>
        <PizzaCard 
          bgColor="#F1B301"
          nameColor={"#E76A06"}
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
