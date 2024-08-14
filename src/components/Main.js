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
            <nav class="bg-inherit py-4">
                <div class="container mx-auto flex justify-between items-center">
                    <div class="flex space-x-4">
                        <button class="bg-[#F1B301] text-white px-4 py-2 rounded-full">Barchasi</button>
                        <a href="#!" class="text-inherit px-4 py-2">Pitsa</a>
                        <a href="#!" class="text-inherit px-4 py-2">Burger</a>
                        <a href="#!" class="text-inherit px-4 py-2">Kombo</a>
                        <a href="#!" class="text-inherit px-4 py-2">Salat</a>
                        <a href="#!" class="text-inherit px-4 py-2">Shirinliklar</a>
                        <a href="#!" class="text-inherit px-4 py-2">Ichimliklar</a>
                    </div>
                    <button class="!bg-[#F5F5F5] text-[#222124] px-[44px] py-[15px] rounded-full">Filtr</button>
                </div>
            </nav>

            {/* <!-- Main Content --> */}
            <div class="container mx-auto mt-10">
                <h1 class="text-3xl font-bold text-[#222124] mb-10">Pitsa</h1>

                <div class="grid grid-cols-3 gap-6">
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
            {/* BURGERS */}
            <div class="container mx-auto mt-10">
                <h1 class="text-3xl font-bold text-[#222124] mb-10">Burger</h1>

                <div class="grid grid-cols-3 gap-6">
                    <PizzaCard
                        // imageSrc={gavayaImg}
                        imageSrc={burgerImg}
                        altText="Cheeseburger"
                        title="Cheeseburger"
                        description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                        price="45,000 UZS"
                        emoji=""
                    />
                    <PizzaCard
                        // imageSrc={mexicoImg}
                        imageSrc={burgerImg}
                        altText="Mexica"
                        title="Mexica"
                        description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                        price="53,000 UZS"
                        emoji=""
                    />
                    <PizzaCard
                        // imageSrc={hotImg}
                        imageSrc={burgerImg}
                        altText="Hot achchiko"
                        title="Hot Achichiko"
                        description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                        price="64,000 UZS"
                        emoji=""
                    />
                    <PizzaCard
                        // imageSrc={mexicoImg2}
                        imageSrc={burgerImg}
                        altText="Mexica"
                        title="Mexica"
                        description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                        price="45,000 UZS"
                        emoji=""
                    />


                </div>
            </div>

            {/* Kombo */}
            <div class="container mx-auto mt-10">
                <h1 class="text-3xl font-bold text-[#222124] mb-10">Burger</h1>

                <div class="grid grid-cols-3 gap-6">
                    <PizzaCard
                        // imageSrc={gavayaImg}
                        imageSrc={komboImg}
                        altText="Cheeseburger"
                        title="Kombo-1"
                        description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                        price="25,000 UZS"
                        emoji=""
                    />
                    <PizzaCard
                        // imageSrc={mexicoImg}
                        imageSrc={komboImg2}
                        altText="Mexica"
                        title="Kombo-2"
                        description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                        price="23,000 UZS"
                        emoji=""
                    />
                    <PizzaCard
                        // imageSrc={hotImg}
                        imageSrc={komboImg}
                        altText="Hot achchiko"
                        title="Kombo-3"
                        description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                        price="30,000 UZS"
                        emoji=""
                    />
                </div>
            </div>

            {/* Ichimliklar */}
            <div class="container mx-auto mt-10">
                <h1 class="text-3xl font-bold text-[#222124] mb-10">Ichimliklar</h1>

                <div class="grid grid-cols-3 gap-6">
                    <PizzaCard
                        // imageSrc={gavayaImg}
                        imageSrc={sprite}
                        altText="Cheeseburger"
                        title="Sprite 1L"
                        description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                        price="6,000 UZS"
                        emoji=""
                    />
                    <PizzaCard
                        // imageSrc={mexicoImg}
                        imageSrc={kola}
                        altText="Mexica"
                        title="Coca Cola 1L"
                        description="Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле"
                        price="9,000 UZS"
                        emoji=""
                    />
                    <PizzaCard
                        // imageSrc={hotImg}
                        imageSrc={fanta}
                        altText="Hot achchiko"
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