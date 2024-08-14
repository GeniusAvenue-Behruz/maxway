import React from 'react';

const PizzaCard = ({ bgColor = '#FFC85C', nameColor = '#E76A06', status = 'Yangi', name = 'Pit -sa', imgSrc, imgAlt = 'Yangi Pizza' }) => {
  return (
    <div className={`bg-[${bgColor}] w-[255px] h-[200px] rounded-xl pt-8 relative overflow-hidden`}>
      <span className='status text-base px-5 py-[10px] bg-[#ffffff69] rounded-2xl ml-5'>{status}</span>
      <div className='flex justify-between items-end absolute bottom-0'>
        <h1 className={`name pl-8 mb-5 text-[${nameColor}] text-3xl uppercase font-bold`}>
          {name}
        </h1>
        <img className='img' src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  );
};

export default PizzaCard;
