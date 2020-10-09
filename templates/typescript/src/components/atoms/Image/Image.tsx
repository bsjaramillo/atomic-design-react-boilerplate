import React from 'react';

import './_style.scss';

export interface IImageProps{
  src:string;
  alt:string;
}
const Image = (props:IImageProps) => (
  <img className="a__image" src={props.src} alt={props.alt} />
);

export default Image;
