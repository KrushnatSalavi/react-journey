import React from 'react'

const Card = () => {
  return (
    <div className="relative w-[100px] h-[100px] rounded-xl overflow-hidden">
  <img
    src="/Images/rajgad.png"
    alt="Rajgad"
    width={'300px'} height={'auto'}
/>

  <div className="absolute inset-0 bg-black/40"></div>

  <div className="absolute bottom-5 left-5 text-white">
    <h1 className="text-3xl font-bold">Krushna Salavi</h1>
    <p>Frontend Developer</p>
  </div>
</div>
  );
};

export default Card;

