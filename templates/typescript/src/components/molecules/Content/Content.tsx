import React      from 'react';

import Title      from '../../atoms/Title/Title';
import Paragraph  from '../../atoms/Paragraph/Paragraph';

import './_style.scss';
export interface IContentProps{title:string;text:string;}

const Content = (props:IContentProps) => (
  <div className="m__content">
    <Title text={props.title} />
    <Paragraph text={props.text} />
  </div>
);

export default Content;
