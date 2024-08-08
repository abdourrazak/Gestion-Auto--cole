import React from 'react';
import './AspectItem.css';

interface AspectItemProps {
  text: string;
}

const AspectItem: React.FC<AspectItemProps> = ({ text }) => {
  return (
    <div className="aspect-item">
      <div className="aspect-icon"></div>
      <p>{text}</p>
    </div>
  );
};

export default AspectItem;
