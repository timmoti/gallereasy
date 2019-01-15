import React from 'react';

const Image = ({
  images: {
    downsized_still: { url }
  }
}) => {
  return (
    <div>
      <img src={`${url}`} alt={`${url}`} />
    </div>
  );
};

export default Image;
