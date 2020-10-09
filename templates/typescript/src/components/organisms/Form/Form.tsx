import React        from 'react';

import LabeledInput, {ILInputProps} from '../../molecules/LabeledInput/LabeledInput';
import Button       from '../../atoms/Button/Button';

import './_style.scss';
export interface IFormProps{fields:ILInputProps[];buttonText:string;}

const Form = (props:IFormProps) => (
  <form className="o__form">
    {
      props.fields.map((field, i) => (<LabeledInput input={field.input} label={field.label} key={i} />))
    }
    <Button text={props.buttonText} />
  </form>
);

export default Form;
