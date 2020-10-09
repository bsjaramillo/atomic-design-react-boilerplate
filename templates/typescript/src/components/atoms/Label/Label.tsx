import React      from 'react';

import './_style.scss';
export interface ILabelProps{
  text:string;
}

const Label = (props:ILabelProps) => (
  <span className="a__label">{props.text}</span>
);

export default Label;
