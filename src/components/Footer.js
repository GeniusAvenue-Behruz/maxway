import React from 'react';
import google from './google.svg'
import apple from './apple.svg'
import phone from './phone.png'
const Footer = () => {
    return (
        <footer className="bg-[#800A7A] text-white py-6 mt-[50px] md:mt-[150px] mb-[50px] md:mb-[120px]">
    <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="text-center md:text-left md:mr-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10 max-w-[600px]">
                Mobil ilovamiz <br/>
                orqali buyurtma <br/>
                berish yanada osonroq
            </h1>
            <div className="flex justify-center md:justify-start space-x-4 md:space-x-6">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                    <img
                        src={google}
                        alt="Google Play"
                        className="h-8 md:h-10"
                    />
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                    <img
                        src={apple}
                        alt="App Store"
                        className="h-8 md:h-10"
                    />
                </a>
            </div>
        </div>
        <img src={phone} alt="PHONE" className="mt-10 md:mt-0 md:ml-10 max-w-xs md:max-w-none w-full md:w-auto" />
    </div>
</footer>

    );
};

export default Footer;
