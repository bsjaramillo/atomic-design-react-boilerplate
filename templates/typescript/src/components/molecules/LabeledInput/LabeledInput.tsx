import React      from 'react';

import Label      from '../../atoms/Label/Label';
import Input, {IInputProps}      from '../../atoms/Input/Input';

import './_style.scss';
export interface ILInputProps{label:string;input: IInputProps;}

const LabeledInput = (props:ILInputProps) => (
  <div className="m__labeled_input">
    <Label text={props.label} />
    <Input text={props.input.text} placeholder={props.input.placeholder} type={props.input.type}/>
  </div>
);

export default LabeledInput;
