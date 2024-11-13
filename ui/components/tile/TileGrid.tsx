import React from 'react';
import Tile from './Tile'; // Import the Tile component

// Example icons, you can replace these with your own
import { FaBitcoin, FaEthereum, FaNodeJs } from 'react-icons/fa'; 

const TileGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
      <Tile title="Bitcoin" icon={<FaBitcoin />} />
      <Tile title="Ethereum" icon={<FaEthereum />} />
      <Tile title="NodeJS" icon={<FaNodeJs />} />
      {/* Add more tiles as needed */}
    </div>
  );
};

export default TileGrid;
