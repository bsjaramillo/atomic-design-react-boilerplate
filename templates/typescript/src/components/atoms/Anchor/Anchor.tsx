import React from 'react';

import './_style.scss';
export interface IAnchorProps{
  text:string;
}
const Anchor= (props:IAnchorProps) => (
  <a className="a__anchor">{props.text}</a>
);

export default Anchor;
