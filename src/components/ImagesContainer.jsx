import React from 'react';
import Image from './Image';

const ImagesContainer = ({ images }) => {
  return (
    <div className="images-container">
      {images.map((image, i) => {
        return <Image key={i} {...image} />;
      })}
    </div>
  );
};

export default ImagesContainer;
