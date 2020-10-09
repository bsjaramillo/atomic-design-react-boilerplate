import React from 'react';
import Content from '../../molecules/Content/Content';

import './_style.scss';
import {IImageProps} from '../../atoms/Image/Image';
export interface IArticleProps{image:IImageProps;content:string;title:string;}
const Article = (props:IArticleProps) => (
  <div className="o__article">
    <img className="article_featured" src={props.image.src} alt={props.image.alt} />
    <Content text={props.content} title={props.title} />
  </div>
);

export default Article;
