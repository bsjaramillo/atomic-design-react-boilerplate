import React from 'react';

import './_style.scss';
export interface IInputProps{
  type:string;
  placeholder:string;
  text:string;
}

const Input = (props:IInputProps) => (
  <input type={props.type} placeholder={props.placeholder} className="a__input" />
);

export default Input;
