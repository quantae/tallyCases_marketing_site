import React from 'react';

type TileProps = {
  title: string;
  icon: JSX.Element;
};

const Tile: React.FC<TileProps> = ({ title, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-md p-4 rounded-lg transform perspective-1000 hover:rotate-0 hover:scale-105 hover:translate-z-10 transition-transform duration-500 hover:shadow-xl">
      <div className="text-4xl mb-2 transform rotateX-10 rotateY-10 translateZ-5">{icon}</div>
      <div className="text-lg font-bold">{title}</div>
    </div>
  );
};

export default Tile;
