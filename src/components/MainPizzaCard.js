import React from 'react';

const PizzaCard = ({ id='card', imageSrc, altText, title, description, price, emoji, hot=false }) => {
    return (
        <div id={id} className="bg-white w-auto p-6 rounded-xl flex gap-10 justify-between border border-[#9797972a]">
            <div className="relative">
                <img className="my-4" src={imageSrc} alt={altText} />
                {hot && <div className="fire-icon"></div>}
            </div><div className="flex flex-col justify-evenly max-w-[300px]">
                <div className="flex justify-start items-center mb-[10px]">
                    <span className="text-xl font-medium">{title}</span>
                    <span>{emoji}</span>
                </div>
                <p className="text-sm">
                    {description}
                </p>
                <div className="flex justify-between items-center mt-4 max-w-[180px]">
                    <span className="text-xl font-bold">{price}</span>
                    <button className="!bg-[#F1B301] text-white w-8 h-8 rounded-full flex items-center justify-center">+</button>
                </div>
            </div>
        </div>
    );
};

export default PizzaCard;
