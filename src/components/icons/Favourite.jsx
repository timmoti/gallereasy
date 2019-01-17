import React from 'react';
import Icon from '../../Icon';
import { ICONS } from '../../constants';

const Favourite = ({ handleFavourite }) => {
  return (
    <button className="favourite" onClick={event => handleFavourite(event)}>
      <Icon icon={ICONS.HEART} size={30} color={'red'} />
    </button>
  );
};

export default Favourite;
