import React from 'react';

import './_style.scss';
export interface IButtonProps{
  text:string;
}
const Button= (props:IButtonProps) => (
  <button className="a__button">{props.text}</button>
);

export default Button;
