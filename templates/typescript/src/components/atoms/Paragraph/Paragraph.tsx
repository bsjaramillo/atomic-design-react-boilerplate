import React from 'react';

import './_style.scss';
export interface IParagraphProps{
  text:string;
}
const Paragraph = (props:IParagraphProps) => (
  <p className="a__paragraph">{props.text}</p>
);

export default Paragraph;
