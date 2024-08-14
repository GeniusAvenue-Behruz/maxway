import React from 'react';
import google from './google.svg'
import apple from './apple.svg'
import phone from './phone.png'
const Footer = () => {
    return (
        <footer className="bg-[#800A7A] text-white py-6 mt-[150px] mb-[120px]">
            <div className='container flex justify-center items-center'>
                <div className="text-center container">
                    <h1 className="text-5xl font-bold mb-10 text-left max-w-[600px] ">
                        Mobil ilovamiz <br/>
                        orqali buyurtma <br/>
                        berish yanada osonroq
                    </h1>
                    <div className="flex justify-start space-x-6">
                        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                            <img
                                src={google}
                                alt="Google Play"
                                className="h-10"
                            />
                        </a>
                        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                            <img
                                src={apple}
                                alt="App Store"
                                className="h-10"
                            />
                        </a>
                    </div>
                </div>
                <img src={phone} alt="PHONE" className='-mt-52 '/>
            </div>
        </footer>
    );
};

export default Footer;
