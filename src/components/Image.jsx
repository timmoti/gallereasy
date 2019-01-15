import React from 'react';

const Image = ({
  images: {
    fixed_height_still: { url }
  }
}) => {
  return (
    <div>
      <img src={`${url}`} alt={`${url}`} />
    </div>
  );
};

export default Image;
