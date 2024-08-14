import React from 'react'
import gavayaImg from '../gavayaImg.png'
import mexicoImg from './mexico.png'
import hotImg from './hot.png'
import mexicoImg2 from './Mexica2.png'
import burgerImg from "./burger.png"
import PizzaCard from './MainPizzaCard.js'
import komboImg from './kombo.svg'
import komboImg2 from './kombo2.png'
import sprite from './sprite.png'
import fanta from './fanta.png'
import kola from './kola.png'

const Main = () => {
    return (
        <div>
    {/* Navigation */}
    <nav className="bg-inherit py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
                <button className="bg-[#F1B301] text-white px-4 py-2 rounded-full">Barchasi</button>
                <a href="#!" className="text-inherit px-4 py-2">Pitsa</a>
                <a href="#!" className="text-inherit px-4 py-2">Burger</a>
                <a href="#!" className="text-inherit px-4 py-2">Kombo</a>
                <a href="#!" className="text-inherit px-4 py-2">Salat</a>
                <a href="#!" className="text-inherit px-4 py-2">Shirinliklar</a>
                <a href="#!" className="text-inherit px-4 py-2">Ichimliklar</a>
            </div>
            <button className="bg-[#F5F5F5] text-[#222124] px-[20px] md:px-[44px] py-[10px] md:py-[15px] rounded-full">Filtr</button>
        </div>
    </nav>

    {/* Main Content */}
    <div className="container mx-auto mt-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#222124] mb-10">Pitsa</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <PizzaCard
                imageSrc={gavayaImg}
                altText="Gavaya Pizza"
                title="Gavaya"
                description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                price="45,000 UZS"
                emoji="🍍"
                hot={true}
            />
            <PizzaCard
                imageSrc={mexicoImg}
                altText="Mexica"
                title="Mexica"
                description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                price="53,000 UZS"
                emoji="🌶️"
            />
            <PizzaCard
                imageSrc={hotImg}
                altText="Hot achchiko"
                title="Hot Achichiko"
                description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                price="64,000 UZS"
                emoji="🍀"
            />
            <PizzaCard
                imageSrc={mexicoImg2}
                altText="Mexica"
                title="Mexica"
                description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                price="45,000 UZS"
                emoji=""
            />
            <PizzaCard
                imageSrc={hotImg}
                altText="Apocalipo"
                title="Apocalipo"
                description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                price="64,000 UZS"
                emoji="🌶️"
            />
            <PizzaCard
                imageSrc={mexicoImg2}
                altText="Sosiskacho"
                title="Sosiskacho"
                description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                price="45,000 UZS"
                emoji="🍀"
            />
            <PizzaCard
                imageSrc={mexicoImg}
                altText="Mexica"
                title="Mexica"
                description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                price="53,000 UZS"
                emoji=""
            />
        </div>
    </div>

    {/* Burgers Section */}
    <div className="container mx-auto mt-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#222124] mb-10">Burger</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <PizzaCard
                imageSrc={burgerImg}
                altText="Cheeseburger"
                title="Cheeseburger"
                description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                price="45,000 UZS"
                emoji=""
            />
            <PizzaCard
                imageSrc={burgerImg}
                altText="Mexica"
                title="Mexica"
                description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                price="53,000 UZS"
                emoji=""
            />
            <PizzaCard
                imageSrc={burgerImg}
                altText="Hot achchiko"
                title="Hot Achichiko"
                description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                price="64,000 UZS"
                emoji=""
            />
            <PizzaCard
                imageSrc={burgerImg}
                altText="Mexica"
                title="Mexica"
                description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                price="45,000 UZS"
                emoji=""
            />
        </div>
    </div>

    {/* Kombo Section */}
    <div className="container mx-auto mt-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#222124] mb-10">Kombo</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <PizzaCard
                imageSrc={komboImg}
                altText="Cheeseburger"
                title="Kombo-1"
                description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                price="25,000 UZS"
                emoji=""
            />
            <PizzaCard
                imageSrc={komboImg2}
                altText="Mexica"
                title="Kombo-2"
                description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                price="23,000 UZS"
                emoji=""
            />
            <PizzaCard
                imageSrc={komboImg}
                altText="Hot achchiko"
                title="Kombo-3"
                description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                price="30,000 UZS"
                emoji=""
            />
        </div>
    </div>

    {/* Ichimliklar Section */}
    <div className="container mx-auto mt-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#222124] mb-10">Ichimliklar</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <PizzaCard
                imageSrc={sprite}
                altText="Sprite 1L"
                title="Sprite 1L"
                description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                price="6,000 UZS"
                emoji=""
            />
            <PizzaCard
                imageSrc={kola}
                altText="Coca Cola 1L"
                title="Coca Cola 1L"
                description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                price="9,000 UZS"
                emoji=""
            />
            <PizzaCard
                imageSrc={fanta}
                altText="Fanta 1L"
                title="Fanta 1L"
                description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                price="6,000 UZS"
                emoji=""
            />
        </div>
    </div>
</div>

    )
}

export default Main