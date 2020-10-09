import React      from 'react';

import './_style.scss';
export interface ITitleProps{
  text:string;
}

const Title = (props:ITitleProps) => (
  <h1 className="a__title">{props.text}</h1>
);

export default Title;
